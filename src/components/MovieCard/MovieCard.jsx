import { useState } from 'react';
import './MovieCard.css';

const genreColors = {
  'Боевик': { bg: 'rgba(255, 77, 79, 0.2)', text: '#ff4d4f' },
  'Триллер': { bg: 'rgba(114, 46, 209, 0.2)', text: '#722ed1' },
  'Комедия': { bg: 'rgba(250, 173, 20, 0.2)', text: '#faad14' },
  'Драма': { bg: 'rgba(19, 194, 194, 0.2)', text: '#13c2c2' }
};

export default function MovieCard({ movie, toggleFavorite }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="poster-container">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="movie-poster"
        />
        {isHovered && <div className="overlay"></div>}
      </div>
      
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span 
            className="genre-tag"
            style={{
              backgroundColor: genreColors[movie.genre].bg,
              color: genreColors[movie.genre].text
            }}
          >
            {movie.genre}
          </span>
          <span className="duration">🕒 {movie.duration}</span>
        </div>
        <button 
          className={`favorite-btn ${movie.isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(movie.id)}
        >
          {movie.isFavorite ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
}

