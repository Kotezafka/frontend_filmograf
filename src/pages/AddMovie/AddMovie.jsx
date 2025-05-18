import { useState } from 'react'
import { addFilm } from '../../databases/db_films'
import './AddMovie.css'

const genres = [
  { label: 'Боевик', color: '#ff4d4f' },
  { label: 'Триллер', color: '#722ed1' },
  { label: 'Комедия', color: '#faad14' },
  { label: 'Драма', color: '#13c2c2' },
]

function AddMovie() {
  const [formData, setFormData] = useState({
    title: '',
    genres: [],
    duration: '',
    description: '',
    file: null,
    fileName: '',
    imageBase64: '',
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            file,
            fileName: file.name,
            imageBase64: reader.result,
          }))
        };
        reader.readAsDataURL(file);
      } else {
        setFormData(prev => ({
          ...prev,
          file: null,
          fileName: '',
          imageBase64: '',
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleGenreChange = (genre) => {
    setFormData(prev => {
      const currentGenres = [...prev.genres]
      if (currentGenres.includes(genre)) {
        return { ...prev, genres: currentGenres.filter(g => g !== genre) }
      } else {
        return { ...prev, genres: [...currentGenres, genre] }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const filmToAdd = {
      title: formData.title,
      genres: formData.genres,
      duration: formData.duration,
      description: formData.description,
      image: formData.imageBase64 || undefined,
    }
    addFilm(filmToAdd)
    setSuccess(true)
    setFormData({
      title: '',
      genres: [],
      duration: '',
      description: '',
      file: null,
      fileName: '',
      imageBase64: '',
    })
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <div className="add-movie-outer">
      <h1 className="add-movie-title">Добавить фильм</h1>
      {success && <div className="add-movie-success">Фильм успешно добавлен!</div>}
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
          />
        </div>
        <div className="form-group">
          <label>Жанры</label>
          <div className="genre-checkbox-group">
            {genres.map(g => (
              <label key={g.label} className="genre-checkbox-label">
                <input
                  type="checkbox"
                  name="genres"
                  value={g.label}
                  checked={formData.genres.includes(g.label)}
                  onChange={() => handleGenreChange(g.label)}
                />
                <span className="genre-checkbox-custom" style={{ '--genre-color': g.color }}>
                  {/* SVG галочка теперь через CSS */}
                </span>
                <span>{g.label}</span>
              </label>
            ))}
          </div>
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
        <button type="submit" className="add-movie-submit">Добавить фильм</button>
      </form>
    </div>
  )
}

export default AddMovie