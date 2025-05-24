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
      "«Матрица» — научно-фантастический боевик, снятый братьями Вачовски по их собственному сценарию и спродюсированный Джоэлом Сильвером. Главные роли в фильме исполнили Киану Ривз, Лоренс Фишберн, Кэрри-Энн Мосс и Хьюго Уивинг. Премьера фильма состоялась в США 31 марта 1999 года, и он положил начало одноимённой медиафраншизе, включающей ещё три фильма, комиксы, компьютерные игры и аниме. Сюжет фильма разворачивается в будущем, где реальность, воспринимаемая большинством людей, на самом деле является симуляцией типа «мозг в колбе», созданной разумными машинами для подчинения человечества. Люди используются машинами в качестве источника энергии, обеспечивая их теплом и электрической активностью своих тел. Главный герой — хакер по кличке Нео, который присоединяется к повстанцам, борющимся против машин. Перед ним встаёт выбор: вернуться к жизни в симуляции или присоединиться к сопротивлению, сражаясь за освобождение человечества. Нео выбирает борьбу, присоединяясь к другим людям, которые также освободились из иллюзорного мира и вышли в реальность.",
  },
  {
    id: 2,
    title: 'Безумный Макс',
    genre: 'Боевик',
    duration: 88,
    isFavourite: false,
    image: "../../public/images/posters/mad_max.png",
    description:
      "Постапокалиптический мир, где ресурсы на исходе, а банды мотоциклистов терроризируют остатки цивилизации. Макс Рокатански, бывший полицейский, оказывается втянут в жестокую борьбу за выживание, когда его семья становится жертвой хаоса. Фильм положил начало культовой франшизе, известной своими безумными погонями и мрачной атмосферой.",
  },
  {
    id: 3,
    title: 'Джентльмены',
    genre: 'Драма',
    duration: 113,
    isFavourite: false,
    image: "../../public/images/posters/gentelments.png",
    description:
      "Режиссёр Гай Ричи представляет историю американского наркобарона, который решает продать свой прибыльный бизнес в Лондоне. Однако сделка оборачивается чередой предательств, двойных игр и неожиданных поворотов. Фильм наполнен фирменным стилем Ричи — чёрным юмором, колоритными персонажами и витиеватым сюжетом.",
  },
  {
    id: 4,
    title: 'Отступники',
    genre: 'Триллер',
    duration: 151,
    isFavourite: false,
    image: "../../public/images/posters/departed.png",
    description:
      "Два полицейских внедряются в ирландскую мафию в Бостоне, но никто не подозревает, что в самом отделе полиции тоже есть крот. Фильм Мартина Скорсезе, основанный на гонконгской ленте «Infernal Affairs», держит в напряжении до самого финала, исследуя темы предательства, лояльности и морального выбора.",
  },
  {
    id: 5,
    title: 'Гладиатор',
    genre: 'Боевик',
    duration: 155,
    isFavourite: false,
    image: "../../public/images/posters/gladiator.png",
    description:
      "Римский генерал Максимус предан императором Коммодом, его семья убита, а сам он попадает в рабство. Чтобы выжить и отомстить, он становится гладиатором, сражаясь на арене ради славы и справедливости. Эпичный фильм Ридли Скотта с Расселом Кроу в главной роли завоевал пять «Оскаров», включая награду за лучший фильм.",
  },
  {
    id: 6,
    title: 'Однажды в Голливуде',
    genre: 'Драма',
    duration: 161,
    isFavourite: false,
    image: "../../public/images/posters/hollywood.png",
    description:
      "Квентин Тарантино переносит зрителей в Голливуд 1969 года, где актёр Рик Далтон и его дублёр Клифф Бут пытаются найти своё место в стремительно меняющейся киноиндустрии. Фильм сочетает ностальгию, чёрный юмор и альтернативную историю, включая события, связанные с семьёй Мэнсон.",
  },
  {
    id: 7,
    title: 'Предложение',
    genre: 'Комедия',
    duration: 106,
    isFavourite: false,
    image: "../../public/images/posters/proposal.png",
    description:
      "Чтобы избежать депортации, редакторша Маргарет Тейт вынуждает своего помощника Эндрю пожениться на ней. Однако визит иммиграционного офицера и поездка на Аляску к семье Эндрю превращают фиктивный брак в череду неловких и забавных ситуаций. Лёгкая и остроумная романтическая комедия с Сандрой Буллок и Райаном Рейнольдсом.",
  },
  {
    id: 8,
    title: 'Малышка на миллион',
    genre: 'Драма',
    duration: 132,
    isFavourite: false,
    image: "../../public/images/posters/million_dollar.png",
    description:
      "История Мэгги Фицджеральд, девушки из бедной семьи, которая мечтает стать профессиональной боксёршей. Под руководством тренера Фрэнка Данна она идёт к своей цели, несмотря на скептицизм окружающих. Фильм Клинта Иствуда с Хилари Суэнк в главной роли получил четыре «Оскара», включая награду за лучшую женскую роль.",
  },
  {
    id: 9,
    title: 'Ларри Краун',
    genre: 'Комедия',
    duration: 98,
    isFavourite: false,
    image: "../../public/images/posters/larry_crowne.png",
    description:
      "После увольнения Ларри Краун пытается начать новую жизнь, сталкиваясь с чередой неудач и нелепых ситуаций. Фильм Тома Хэнкса (который также играет одну из ролей) сочетает грустный юмор и трогательные моменты, исследуя тему поиска себя во взрослой жизни.",
  },
];

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
