import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="favorites-container">
      <div className="header">
        <Link to="/" className="header-link">Все фильмы</Link>
        <Link to="/favorites" className="header-link active">Избранное</Link>
        <Link to="/add-movie" className="header-link">Добавить фильм</Link>
      </div>

      <h1># Избранное</h1>

      {favorites.length === 0 ? (
        <p>Нет избранных фильмов</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(movie => (
            <li key={movie.id} className="favorite-item">
              <span className="movie-title">{movie.title}</span>
              <span className="movie-duration">○ {movie.duration} мин.</span>
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

      <div className="footer">
        <Link to="/" className="footer-link">Фильмограф</Link>
      </div>
    </div>
  );
};

export default Favorites;