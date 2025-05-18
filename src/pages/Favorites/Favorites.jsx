import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../../store/actions/favoritesActions';
import './Favorites.css';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const handleRemove = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Избранное</h1>
      {favorites.length === 0 ? (
        <p className="favorites-empty">Нет избранных фильмов</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(movie => (
            <li key={movie.id} className="favorite-item">
              <img src={movie.image} alt={movie.title} className="favorite-poster" />
              <div className="favorite-info">
                <span className="movie-title">{movie.title}</span>
                <span className="movie-duration">🕒 {movie.duration} мин.</span>
              </div>
              <button 
                onClick={() => handleRemove(movie.id)} 
                className="remove-button"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;