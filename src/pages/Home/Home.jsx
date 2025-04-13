import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import PageHeader from '../../components/PageHeader/PageHeader';
import GenreFilters from '../../components/GenreFilters/GenreFilters';
import Navigation from '../../components/Navigation/Navigation';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState(
    [{
      id: 1,
      title: 'Матрица',
      genre: 'Боевик',
      duration: '136 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/matrix.png'
    },
    {
      id: 2,
      title: 'Безумный Макс',
      genre: 'Боевик',
      duration: '88 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/mad_max.png'
    },
    {
      id: 3,
      title: 'Джентльмены',
      genre: 'Драма',
      duration: '113 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/gentelments.png'
    },
    {
      id: 4,
      title: 'Отступники',
      genre: 'Триллер',
      duration: '151 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/departed.png'
    },
    {
      id: 5,
      title: 'Гладиатор',
      genre: 'Боевик',
      duration: '155 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/gladiator.png'
    },
    {
      id: 6,
      title: 'Однажды в Голливуде',
      genre: 'Драма',
      duration: '161 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/hollywood.png'
    },
    {
      id: 7,
      title: 'Предложение',
      genre: 'Комедия',
      duration: '106 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/proposal.png'
    },
    {
      id: 8,
      title: 'Малышка на миллион',
      genre: 'Драма',
      duration: '132 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/million_dollar.png'
    },
    {
      id: 9,
      title: 'Ларри Краун',
      genre: 'Комедия',
      duration: '98 мин.',
      isFavorite: false,
      imageUrl: '/images/posters/larry_crowne.png'
    }
  ]);

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? {...movie, isFavorite: !movie.isFavorite} : movie
    ));
  };

  const handleGenreFilter = (genres) => {
    setSelectedGenres(genres);
  };

  const filteredMovies = selectedGenres.length > 0
    ? movies.filter(movie => selectedGenres.includes(movie.genre))
    : movies;

  return (
    <div className="home-page">
      <div className="header-container">
        <PageHeader />
        <GenreFilters onFilterChange={handleGenreFilter} />
      </div>
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}