import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmById, updateFilm, deleteFilm } from '../../databases/db_films';
import { addToFavorites, removeFromFavorites } from '../../store/actions/favoritesActions';
import './Movie.css';

const genreColors = {
  'Боевик': { bg: 'rgba(255, 77, 79, 0.2)', text: '#ff4d4f' },
  'Триллер': { bg: 'rgba(114, 46, 209, 0.2)', text: '#722ed1' },
  'Комедия': { bg: 'rgba(250, 173, 20, 0.2)', text: '#faad14' },
  'Драма': { bg: 'rgba(19, 194, 194, 0.2)', text: '#13c2c2' }
};
const genres = Object.keys(genreColors);

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const movie = getFilmById(id);
  const isFavourite = favorites.some(f => String(f.id) === String(id));

  const [editData, setEditData] = useState(movie ? {
    title: movie.title,
    genre: movie.genre,
    duration: movie.duration,
    description: movie.description,
    image: movie.image,
  } : {});

  if (!movie) {
    return <div className="movie-not-found">Фильм не найден</div>;
  }

  const handleToggleFavorite = () => {
    if (isFavourite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateFilm({ ...movie, ...editData });
    setSuccess(true);
    setEditing(false);
    setTimeout(() => setSuccess(false), 2000);
  };

  const handleDelete = () => {
    deleteFilm(movie.id);
    navigate('/');
  };

  return (
    <div className="movie-page">
      <div className="movie-content">
        <div className="movie-poster-large">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="movie-details-block">
          <div className="movie-header-row">
            {editing ? (
              <input
                className="movie-title-large"
                name="title"
                value={editData.title}
                onChange={handleEditChange}
                style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 8 }}
              />
            ) : (
              <h1 className="movie-title-large">{movie.title}</h1>
            )}
            <button className={`movie-fav-btn ${isFavourite ? 'active' : ''}`} onClick={handleToggleFavorite} title={isFavourite ? 'Убрать из избранного' : 'В избранное'}>
              {isFavourite ? '★' : '☆'}
            </button>
          </div>
          <div className="movie-meta-row">
            {editing ? (
              <select
                name="genre"
                value={editData.genre}
                onChange={handleEditChange}
                className="movie-genre-badge"
                style={{ background: genreColors[editData.genre]?.bg, color: genreColors[editData.genre]?.text }}
              >
                {genres.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            ) : (
              <span className="movie-genre-badge" style={{ background: genreColors[movie.genre]?.bg, color: genreColors[movie.genre]?.text }}>{movie.genre}</span>
            )}
            {editing ? (
              <input
                type="number"
                name="duration"
                value={editData.duration}
                onChange={handleEditChange}
                className="movie-duration-large"
                style={{ width: 70 }}
              />
            ) : (
              <span className="movie-duration-large">🕒 {movie.duration} мин.</span>
            )}
          </div>
          <div className="movie-description">
            {editing ? (
              <textarea
                name="description"
                value={editData.description}
                onChange={handleEditChange}
                style={{ width: '100%', minHeight: 80 }}
              />
            ) : (
              movie.description
            )}
          </div>
          {success && <div className="movie-edit-success">Изменения сохранены!</div>}
          <div className="movie-actions-row">
            {editing ? (
              <>
                <button className="movie-edit-btn" onClick={handleEditSubmit}>Сохранить</button>
                <button className="movie-delete-btn" onClick={() => setEditing(false)}>Отмена</button>
              </>
            ) : (
              <>
                <Link to={`/edit/${movie.id}`} className="movie-edit-btn">Редактировать</Link>
                <button className="movie-delete-btn" onClick={() => setShowDelete(true)}>Удалить</button>
              </>
            )}
          </div>
          {showDelete && (
            <div className="movie-delete-confirm">
              <div>Удалить фильм безвозвратно?</div>
              <button className="movie-delete-btn" onClick={handleDelete}>Да, удалить</button>
              <button className="movie-edit-btn" onClick={() => setShowDelete(false)}>Отмена</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;