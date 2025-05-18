const STORAGE_KEY = "filmograf_data"


const defaultData = [
  {
    id: 1,
    title: "Матрица",
    genre: "Боевик",
    duration: 90,
    image: "../../public/images/posters/matrix.png",
    isFavourite: false,
    description:
      "«Матрица» — научно-фантастический боевик, поставленный братьями Вачовски по собственному сценарию и спродюсированный Джоэлом Сильвером. Главные роли исполнили Киану Ривз, Лоренс Фишберн, Керри-Энн Мосс и Хьюго Уивинг. Фильм вышел на экраны в США 31 марта 1999 года и послужил созданию одноимённой медиафраншизы, в которую вошли ещё три фильма, комиксы, компьютерные игры и аниме.\n\nФильм изображает будущее, в котором реальность, существующая для большинства людей, является в действительности симуляцией типа «мозг в колбе», созданной разумными машинами, чтобы подчинить и усмирить человеческое население, в то время как тепло и электрическая активность их тел используются машинами в качестве источника энергии. Привлечённый повстанцами против машин хакер по кличке Нео оказывается в новом, пугающем реальном мире. Он проходит выбор — вернуться к существованию в симуляции, либо начать повстанческую борьбу против машин, в которую также вовлечены другие люди, освободившиеся из «мира снов» и выбравшиеся в реальность. Он выбирает борьбу.",
  },
  {
    id: 2,
    title: 'Безумный Макс',
    genre: 'Боевик',
    duration: '88 мин.',
    isFavourite: false,
    image: "../../public/images/posters/matrix.png",
  },
  {
    id: 3,
    title: 'Джентльмены',
    genre: 'Драма',
    duration: '113 мин.',
    isFavourite: false,
    image: "../../public/images/posters/matrix.png",
  }
]

const FORCE_RESET = false

export const initLocalDb = () => {
  if (FORCE_RESET || !localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData))
  }
}

export const getAllFilms = () => {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : []
}

const saveFilms = (films) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(films))
}

export const toggleFavourite = (id) => {
  const films = getAllFilms()
  const updated = films.map((film) =>
    film.id === id ? { ...film, isFavourite: !film.isFavourite } : film
  )
  saveFilms(updated)
  return updated
}

export function updateFilm(updatedFilm) {
  const films = getAllFilms()

  const updatedList = films.map((film) =>
    film.id === updatedFilm.id ? { ...film, ...updatedFilm } : film
  )

  saveFilms(updatedList)
  return updatedList
}

export const deleteFilm = (id) => {
  const films = getAllFilms()
  const updated = films.filter((f) => f.id !== id)
  saveFilms(updated)
  return updated
}

export const addFilm = (film) => {
  const films = getAllFilms()
  const newFilm = { ...film, id: Date.now(), isFavourite: false }
  const updated = [...films, newFilm]
  saveFilms(updated)
  return updated
}

export const getFilmById = (id) => {
  const films = getAllFilms()
  return films.find((f) => f.id === Number(id))
}
