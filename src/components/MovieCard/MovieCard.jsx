import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const genreColors = {
  'Боевик': { bg: 'rgba(234,146,99,0.12)', text: '#E26C2D' },
  'Триллер': { bg: 'rgba(73,182,78,0.12)', text: '#49B64E' },
  'Комедия': { bg: 'rgba(135,117,210,0.12)', text: '#8775D2' },
  'Драма': { bg: 'rgba(149,143,143,0.12)', text: '#958F8F' },
};

function StarIcon({ active }) {
  return active ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#F9A62B" stroke="#F9A62B" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F9A62B" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ClockIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#000" strokeWidth="1" fill="none" />
            <path d="M8 4.5V8L10.5 9.5" stroke="#000" strokeWidth="1" strokeLinecap="round" />
        </svg>
    );
}

export default function MovieCard({ movie, toggleFavorite }) {
  const [isHovered, setIsHovered] = useState(false);

  let currentDurationStr = String(movie.duration || '').trim();
  const displayDuration = currentDurationStr.includes('мин') || currentDurationStr === ''
    ? currentDurationStr
    : `${currentDurationStr} мин.`;

  const movieGenres = Array.isArray(movie.genres) ? movie.genres : (movie.genre ? [movie.genre] : []);

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
              {movieGenres.map(genre => (
                <span
                  key={genre}
                  className="genre-tag"
                  style={{
                    backgroundColor: genreColors[genre]?.bg,
                    color: genreColors[genre]?.text,
                    borderRadius: '24px',
                    padding: '4px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '17px',
                    marginRight: '8px',
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1, justifyContent: 'center' }}>
              <ClockIcon />
              {displayDuration && (
                <span className="duration" style={{ fontSize: '14px', color: '#000', fontWeight: '400' }}>{displayDuration}</span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div 
                 style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                 onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   toggleFavorite();
                 }}
              >
                 <StarIcon active={movie.isFavourite} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

