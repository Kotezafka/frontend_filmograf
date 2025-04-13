import './GenreFilters.css';

const genreColors = {
  'Боевик': { bg: 'rgba(255, 77, 79, 0.2)', text: '#ff4d4f' },
  'Триллер': { bg: 'rgba(114, 46, 209, 0.2)', text: '#722ed1' },
  'Комедия': { bg: 'rgba(250, 173, 20, 0.2)', text: '#faad14' },
  'Драма': { bg: 'rgba(19, 194, 194, 0.2)', text: '#13c2c2' }
};

export default function GenreFilters({ activeGenre, onGenreChange }) {
  return (
    <div className="genre-filters">
      {Object.entries(genreColors).map(([genre, colors]) => (
        <div 
          key={genre}
          className="genre-filter"
          onClick={() => onGenreChange(genre)}
        >
          <div 
            className="genre-color"
            style={{
              backgroundColor: colors.bg,
              border: `1px solid ${colors.text}`
            }}
          />
          <span 
            className="genre-name"
            style={{ color: activeGenre === genre ? colors.text : '#666' }}
          >
            {genre}
          </span>
        </div>
      ))}
    </div>
  );
}
