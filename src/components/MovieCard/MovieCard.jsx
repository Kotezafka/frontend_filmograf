import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const genreColors = {
  'Боевик': { bg: 'rgba(255, 77, 79, 0.2)', text: '#ff4d4f' },
  'Триллер': { bg: 'rgba(114, 46, 209, 0.2)', text: '#722ed1' },
  'Комедия': { bg: 'rgba(250, 173, 20, 0.2)', text: '#faad14' },
  'Драма': { bg: 'rgba(19, 194, 194, 0.2)', text: '#13c2c2' }
};

function StarIcon({ active }) {
  return active ? (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="#FFB800" stroke="#FFB800" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,3 17.7,10.6 26,11.5 19.8,17.1 21.6,25.2 14,21.1 6.4,25.2 8.2,17.1 2,11.5 10.3,10.6" />
    </svg>
  ) : (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C4C4C4" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,3 17.7,10.6 26,11.5 19.8,17.1 21.6,25.2 14,21.1 6.4,25.2 8.2,17.1 2,11.5 10.3,10.6" />
    </svg>
  );
}

export default function MovieCard({ movie, toggleFavorite }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="poster-container">
          <img 
            src={movie.image} 
            alt={movie.title}
            className="movie-poster"
          />
          {isHovered && <div className="overlay"></div>}
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="movie-meta">
            <div className="genre-tags">
              {(Array.isArray(movie.genres) ? movie.genres : []).map(genre => (
                <span 
                  key={genre}
                  className="genre-tag"
                  style={{
                    backgroundColor: genreColors[genre]?.bg,
                    color: genreColors[genre]?.text
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>
            <span className="duration">🕒 {movie.duration}</span>
          </div>
        </div>
      </Link>
      <button 
        className={`favorite-btn ${movie.isFavourite ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite();
        }}
      >
        <StarIcon active={movie.isFavourite} />
      </button>
    </div>
  );
}

