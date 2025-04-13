import './GenreFilters.css';

const genreColors = {
  'Боевик': { bg: 'rgba(255, 77, 79, 0.2)', text: '#ff4d4f' },
  'Триллер': { bg: 'rgba(114, 46, 209, 0.2)', text: '#722ed1' },
  'Комедия': { bg: 'rgba(250, 173, 20, 0.2)', text: '#faad14' },
  'Драма': { bg: 'rgba(19, 194, 194, 0.2)', text: '#13c2c2' }
};

export default function GenreFilters({ activeGenre, onGenreChange }) {
  const handleGenreClick = (genre) => {
    // Если жанр уже выбран - сбросить фильтр, иначе выбрать
    onGenreChange(activeGenre === genre ? null : genre);
  };

  return (
    <div className="genre-filters">
      {Object.entries(genreColors).map(([genre, colors]) => (
        <button
          key={genre}
          className={`genre-filter ${activeGenre === genre ? 'active' : ''}`}
          onClick={() => handleGenreClick(genre)}
          style={{
            '--bg-color': colors.bg,
            '--text-color': colors.text,
            '--border-color': colors.text
          }}
        >
          <div className="genre-color" />
          <span className="genre-name">{genre}</span>
        </button>
      ))}
    </div>
  );
}