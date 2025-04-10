import { useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import SearchBar from '../../components/SearchBar/SearchBar'

function Home() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Крестный отец', isFavorite: false },
    { id: 2, title: 'Побег из Шоушенка', isFavorite: true },
    { id: 3, title: 'Темный рыцарь', isFavorite: false }
  ])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? {...movie, isFavorite: !movie.isFavorite} : movie
    ))
  }

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="home-page">
      <div>Компонент "Главная страница". Отображает список фильмов с возможностью поиска и добавления в избранное</div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="movies-list">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            toggleFavorite={toggleFavorite} 
          />
        ))}
      </div>
    </div>
  )
}

export default Home