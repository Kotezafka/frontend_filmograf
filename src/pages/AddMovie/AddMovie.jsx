import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { addFilm } from '../../databases/db_films'
import './AddMovie.css'

const genres = [
  { label: 'Боевик', color: '#ff4d4f' },
  { label: 'Триллер', color: '#722ed1' },
  { label: 'Комедия', color: '#faad14' },
  { label: 'Драма', color: '#13c2c2' },
]

function AddMovie() {
  const [success, setSuccess] = useState(false)
  const [imageBase64, setImageBase64] = useState('')
  const [fileName, setFileName] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control
  } = useForm({
    defaultValues: {
      title: '',
      genres: [],
      duration: '',
      description: '',
    }
  })

  const onSubmit = (data) => {
    const filmToAdd = {
      ...data,
      image: imageBase64 || undefined,
    }
    console.log('Form data:', filmToAdd) // Выводим данные в консоль
    addFilm(filmToAdd)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <div className="add-movie-outer">
      <h1 className="add-movie-title">Добавить фильм</h1>
      {success && <div className="add-movie-success">Фильм успешно добавлен!</div>}
      <form className="add-movie-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Название фильма</label>
          <input
            type="text"
            id="title"
            placeholder="Название фильма"
            {...register('title', { 
              required: 'Название фильма обязательно',
              minLength: {
                value: 2,
                message: 'Название должно содержать минимум 2 символа'
              }
            })}
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <div className="input-error-text">{errors.title.message}</div>}
        </div>

        <div className="form-group">
          <label>Жанры</label>
          <div className="genre-checkbox-group">
            <Controller
              name="genres"
              control={control}
              rules={{
                validate: value => value.length > 0 || 'Выберите хотя бы один жанр'
              }}
              render={({ field }) => (
                genres.map(g => (
                  <label key={g.label} className="genre-checkbox-label">
                    <input
                      type="checkbox"
                      value={g.label}
                      checked={field.value.includes(g.label)}
                      onChange={() => {
                        const newValue = field.value.includes(g.label)
                          ? field.value.filter(v => v !== g.label)
                          : [...field.value, g.label]
                        field.onChange(newValue)
                      }}
                    />
                    <span className="genre-checkbox-custom" style={{ '--genre-color': g.color }}>
                    </span>
                    <span>{g.label}</span>
                  </label>
                ))
              )}
            />
          </div>
          {errors.genres && <div className="input-error-text">{errors.genres.message}</div>}
        </div>

        <div className="form-group duration-group">
          <label htmlFor="duration">Длительность</label>
          <input
            type="number"
            id="duration"
            placeholder="Длительность"
            {...register('duration', {
              required: 'Укажите длительность фильма',
              min: {
                value: 1,
                message: 'Длительность должна быть больше 0'
              }
            })}
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
            {...register('description', {
              required: 'Описание фильма обязательно',
              minLength: {
                value: 10,
                message: 'Описание должно содержать минимум 10 символов'
              }
            })}
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
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onloadend = () => {
                        setImageBase64(reader.result)
                        setFileName(file.name)
                        field.onChange(reader.result)
                      }
                      reader.readAsDataURL(file)
                    }
                  }}
                  style={{ display: 'none' }}
                />
                <label htmlFor="file" className="file-btn">Выбрать файл</label>
                {fileName && <span className="file-name">{fileName}</span>}
              </>
            )}
          />
        </div>

        <button type="submit" className="add-movie-submit">Добавить фильм</button>
      </form>
    </div>
  )
}

export default AddMovie