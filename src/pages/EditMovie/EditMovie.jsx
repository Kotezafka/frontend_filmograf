import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
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
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control
  } = useForm({
    defaultValues: {
      title: '',
      genre: '',
      duration: '',
      description: '',
      image: '',
    }
  });

  useEffect(() => {
    if (movie) {
      setValue('title', movie.title || '');
      setValue('genre', movie.genre || '');
      setValue('duration', movie.duration || '');
      setValue('description', movie.description || '');
      setValue('image', movie.image || '');
    }
  }, [movie, setValue]);

  if (!movie) {
    return <div className="movie-not-found">Фильм не найден</div>;
  }

  const onSubmit = (data) => {
    updateFilm({
      ...movie,
      ...data,
      image: data.image || movie.image,
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
      <form className="add-movie-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Название фильма</label>
          <input
            type="text"
            id="title"
            placeholder="Название фильма"
            {...register('title', { required: 'Название фильма обязательно' })}
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <div className="input-error-text">{errors.title.message}</div>}
        </div>
        <div className="form-group">
          <label>Жанр</label>
          <div className="genre-radio-group">
            <Controller
              name="genre"
              control={control}
              rules={{ required: 'Выберите жанр' }}
              render={({ field }) => (
                genres.map(g => (
                  <label key={g.label} className="genre-radio-label">
                    <input
                      type="radio"
                      value={g.label}
                      checked={field.value === g.label}
                      onChange={() => field.onChange(g.label)}
                    />
                    <span className="genre-radio-custom" style={{ borderColor: g.color }}>
                      {field.value === g.label && <span style={{ background: g.color }} className="genre-radio-dot" />}
                    </span>
                    <span style={{ color: g.color }}>{g.label}</span>
                  </label>
                ))
              )}
            />
          </div>
          {errors.genre && <div className="input-error-text">{errors.genre.message}</div>}
        </div>
        <div className="form-group duration-group">
          <label htmlFor="duration">Длительность</label>
          <input
            type="number"
            id="duration"
            placeholder="Длительность"
            {...register('duration', { required: 'Укажите длительность фильма', min: 1 })}
            className={errors.duration ? 'input-error' : ''}
          />
          <span className="duration-label">мин</span>
          {errors.duration && <div className="input-error-text">{errors.duration.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <textarea
            id="description"
            placeholder="Описание фильма"
            {...register('description', { required: 'Описание фильма обязательно' })}
            className={errors.description ? 'input-error' : ''}
          />
          {errors.description && <div className="input-error-text">{errors.description.message}</div>}
        </div>
        <div className="form-group file-group">
          <label>Загрузить фото</label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        field.onChange(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  style={{ display: 'none' }}
                />
                <label htmlFor="file" className="file-btn">Выбрать файл</label>
                {field.value && <span className="file-name">{field.value}</span>}
              </>
            )}
          />
        </div>
        <button type="submit" className="add-movie-submit">Сохранить</button>
      </form>
    </div>
  );
}

export default EditMovie; 