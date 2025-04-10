// function MovieCard({ movie, toggleFavorite }) {
//     return (
//       <div className="movie-card">
//         <div>Компонент "Карточка фильма". Отображает постер, название, рейтинг и кнопку избранного</div>
//         <h3>{movie.title}</h3>
//         <button 
//           onClick={() => toggleFavorite(movie.id)}
//           style={{ color: movie.isFavorite ? 'red' : 'gray' }}
//         >
//           {movie.isFavorite ? '★' : '☆'}
//         </button>
//       </div>
//     )
//   }
  
//   export default MovieCard

export default function MovieCard({ movie, toggleFavorite }) {
  return (
    <div className="movie-card">
      <div>
        Компонент "Карточка фильма"<br />
        Получает пропсы: 
        <ul>
          <li>movie (объект с данными фильма)</li>
          <li>toggleFavorite (функция для добавления в избранное)</li>
        </ul>
      </div>
      
      <h3>{movie.title}</h3>
      <button onClick={() => toggleFavorite(movie.id)}
        style={{ color: movie.isFavorite ? 'orange' : 'gray' }}
      >
        {movie.isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
}