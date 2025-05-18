import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilmById, updateFilm } from '../../databases/db_films';
import './EditMovie.css';

const genres = [
  { label: 'Боевик', color: '#ff4d4f' },
  { label: 'Триллер', color: '#722ed1' },
  { label: 'Комедия', color: '#faad14' },
  { label: 'Драма', color: '#13c2c2' },
];

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = getFilmById(id);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    duration: '',
    description: '',
    file: null,
    fileName: '',
    image: '',
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title || '',
        genre: movie.genre || '',
        duration: movie.duration || '',
        description: movie.description || '',
        file: null,
        fileName: '',
        image: movie.image || '',
      });
    }
  }, []);

  if (!movie) {
    return <div className="movie-not-found">Фильм не найден</div>;
  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        file: files[0],
        fileName: files[0] ? files[0].name : '',
        image: files[0] ? URL.createObjectURL(files[0]) : prev.image,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleGenreChange = (genre) => {
    setFormData(prev => ({ ...prev, genre }));
    setErrors(prev => ({ ...prev, genre: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = true;
    if (!formData.genre.trim()) newErrors.genre = true;
    if (!formData.duration) newErrors.duration = true;
    if (!formData.description.trim()) newErrors.description = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    updateFilm({
      ...movie,
      title: formData.title,
      genre: formData.genre,
      duration: formData.duration,
      description: formData.description,
      image: formData.file ? URL.createObjectURL(formData.file) : movie.image,
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate(`/movie/${movie.id}`);
    }, 1500);
  };

  return (
    <div className="add-movie-outer">
      <h1 className="add-movie-title">Редактировать фильм</h1>
      {success && <div className="add-movie-success">Изменения сохранены!</div>}
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Название фильма</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Название фильма"
            value={formData.title}
            onChange={handleChange}
            required
            className={errors.title ? 'input-error' : ''}
          />
        </div>
        <div className="form-group">
          <label>Жанр</label>
          <div className="genre-radio-group">
            {genres.map(g => (
              <label key={g.label} className="genre-radio-label">
                <input
                  type="radio"
                  name="genre"
                  value={g.label}
                  checked={formData.genre === g.label}
                  onChange={() => handleGenreChange(g.label)}
                  required
                />
                <span className="genre-radio-custom" style={{ borderColor: g.color }}>
                  {formData.genre === g.label && <span style={{ background: g.color }} className="genre-radio-dot" />}
                </span>
                <span style={{ color: g.color }}>{g.label}</span>
              </label>
            ))}
          </div>
          {errors.genre && <div className="input-error-text">Выберите жанр</div>}
        </div>
        <div className="form-group duration-group">
          <label htmlFor="duration">Длительность</label>
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="Длительность"
            value={formData.duration}
            onChange={handleChange}
            min={1}
            required
            className={errors.duration ? 'input-error' : ''}
          />
          <span className="duration-label">мин</span>
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <textarea
            name="description"
            id="description"
            placeholder="Описание фильма"
            value={formData.description}
            onChange={handleChange}
            required
            className={errors.description ? 'input-error' : ''}
          />
        </div>
        <div className="form-group file-group">
          <label>Загрузить фото</label>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="file" className="file-btn">Выбрать файл</label>
          {formData.fileName && <span className="file-name">{formData.fileName}</span>}
        </div>
        <button type="submit" className="add-movie-submit">Сохранить</button>
      </form>
    </div>
  );
}

export default EditMovie; 