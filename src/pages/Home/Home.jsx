import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
    const [selectedGenres, setSelectedGenres] = useState([]);

  const [movies, setMovies] = useState([
    {
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

  return (
    <div className="home-page">
      <div className="films-nav">
          <button 
            className={`nav-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Все фильмы
          </button>
          <button 
            className={`nav-btn ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Избранное
          </button>
          <button 
            className={`nav-btn ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            Добавить фильм
          </button>
        </div>
      {/* Заголовок и навигация */}
      <div className="header-section">
        <h1 className="main-title">Фильмы</h1>

      <div className="genre-filters">
          <span className="genre-tag">Боевик</span>
          <span className="genre-tag">Триллер</span>
          <span className="genre-tag">Комедия</span>
          <span className="genre-tag">Драма</span>
        </div>
      </div>

      {/* Сетка фильмов */}
      <div className="movies-grid">
        {movies.map(movie => (
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