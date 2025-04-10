import { useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'

function Favorites() {
  const [favoriteMovies] = useState([
    { id: 2, title: 'Побег из Шоушенка', isFavorite: true }
  ])

  return (
    <div className="favorites-page">
      <div>Компонент "Избранное". Показывает фильмы, добавленные в избранное</div>
      <h2>Избранные фильмы</h2>
      <div className="favorites-list">
        {favoriteMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Favorites