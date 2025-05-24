# Filmograf

**Filmograf** — это приложение для управления коллекцией фильмов. Проект реализован на React с использованием Vite, Redux и React Router. Можно просматривать список фильмов, добавлять новые, редактировать, отмечать избранные и фильтровать по жанрам.

## Возможности

- Просмотр всех фильмов
- Добавление нового фильма с изображением и описанием
- Редактирование информации о фильме
- Удаление и добавление фильмов в избранное
- Фильтрация по жанрам
- Сохранение состояния избранного в localStorage

## Технологии

- React
- Vite
- Redux
- React Router
- CSS Modules

## Структура проекта

```
filmograf/
├── node_modules/
├── public/
│   ├── images/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── GenreFilters/
│   │   │   ├── GenreFilters.css
│   │   │   └── GenreFilters.jsx
│   │   ├── MovieCard/
│   │   │   ├── MovieCard.css
│   │   │   └── MovieCard.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   ├── PageHeader/
│   │   │   ├── PageHeader.css
│   │   │   └── PageHeader.jsx
│   │   └── layout/
│   │       └── Layout.jsx
│   ├── databases/
│   │   └── db_films.js
│   ├── pages/
│   │   ├── AddMovie/
│   │   │   ├── AddMovie.css
│   │   │   └── AddMovie.jsx
│   │   ├── EditMovie/
│   │   │   ├── EditMovie.css
│   │   │   └── EditMovie.jsx
│   │   ├── Favorites/
│   │   │   ├── Favorites.css
│   │   │   └── Favorites.jsx
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   └── Movie/
│   │       ├── Movie.css
│   │       └── Movie.jsx
│   ├── routes/
│   │   └── index.jsx
│   ├── store/
│   │   ├── actions/
│   │   │   └── favoritesActions.js
│   │   ├── reducers/
│   │   │   ├── favoritesReducer.js
│   │   │   └── index.js
│   │   └── index.js 
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├──.gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Запуск проекта

1. Установите зависимости:
   ```
   npm install
   ```
2. Запустите проект:
   ```
   npm run dev
   ```
3. Откройте в браузере адрес, указанный в консоли (обычно http://localhost:5173)
