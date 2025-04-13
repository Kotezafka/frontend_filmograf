export default function MovieCard({ movie, toggleFavorite }) {
  const genreColors = {
    'Боевик': 'rgba(255, 77, 79, 0.2)',
    'Триллер': 'rgba(114, 46, 209, 0.2)',
    'Драма': 'rgba(19, 194, 194, 0.2)',
    'Комедия': 'rgba(250, 173, 20, 0.2)'
  };

  const genreTextColors = {
    'Боевик': '#ff4d4f',
    'Триллер': '#722ed1',
    'Драма': '#13c2c2',
    'Комедия': '#faad14'
  };

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="movie-poster"
        />
        <div className="overlay"></div>
      </div>
      
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <div className="details">
          <span className="genre" style={{
            backgroundColor: genreColors[movie.genre],
            color: genreTextColors[movie.genre]
          }}>
            {movie.genre}
          </span>
          <span className="duration">🕒 {movie.duration}</span>
        </div>
        <div 
          className={`favorite-icon ${movie.isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(movie.id)}
        >
          {movie.isFavorite ? '★' : '☆'}
        </div>
      </div>
    </div>
  );
}
