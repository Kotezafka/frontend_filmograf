import './GenreFilters.css';

const genreColors = {
  'Боевик': { bg: '#ff4d4f' },
  'Триллер': { bg: '#27ae60' },
  'Комедия': { bg: '#296be7' },
  'Драма': { bg: '#111' }
};

export default function GenreFilters({ activeGenres = [], onGenreChange }) {
  const handleGenreClick = (genre) => {
    const newGenres = activeGenres.includes(genre)
      ? activeGenres.filter(g => g !== genre)
      : [...activeGenres, genre];
    onGenreChange(newGenres);
  };

  return (
    <div className="genre-filters">
      {Object.entries(genreColors).map(([genre, { bg }]) => (
        <button
          key={genre}
          className={`genre-filter ${activeGenres.includes(genre) ? 'active' : ''}`}
          onClick={() => handleGenreClick(genre)}
        >
          <span className="genre-circle" style={{ background: bg }}>
            {activeGenres.includes(genre) && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7.5L6 10.5L11 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
          <span className="genre-name">{genre}</span>
        </button>
      ))}
    </div>
  );
}