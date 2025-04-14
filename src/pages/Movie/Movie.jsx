import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Movie = () => {
  // Получаем ID фильма из URL
  const { id } = useParams();
  
  // Получаем данные фильма из Redux store
  const movie = useSelector(state => 
    state.movies.find(movie => movie.id === id)
  );

  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  return (
    <div className="movie-container">
      <h1>{movie.title}</h1>
      <div className="movie-details">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-info">
          <p><strong>Год:</strong> {movie.year}</p>
          <p><strong>Жанр:</strong> {movie.genre}</p>
          <p><strong>Длительность:</strong> {movie.duration} мин.</p>
          <p><strong>Описание:</strong> {movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;