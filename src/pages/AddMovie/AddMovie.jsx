import { useState } from 'react'

function AddMovie() {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Добавлен фильм:', formData)
    // Здесь должна быть логика добавления фильма
  }

  return (
    <div className="add-movie-page">
      <div>Компонент "Добавление фильма". Содержит форму для внесения нового фильма в базу</div>
      <h2>Добавить фильм</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Название фильма"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Год выпуска"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Описание фильма"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Добавить фильм</button>
      </form>
    </div>
  )
}

export default AddMovie