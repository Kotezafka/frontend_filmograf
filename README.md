# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# homework_2 - filmograf
    filmograf/
        ├── node_modules/
        ├── public/
        ├── src/
        │   ├── assets/
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
        │   │   └── PageHeader/
        │   │       ├── PageHeader.css
        │   │       └── PageHeader.jsx
        │   ├── pages/
        │   │   ├── AddMovie/
        │   │   │   └── AddMovie.jsx
        │   │   ├── Favorites/
        │   │   │   ├── Favorites.css
        │   │   │   └── Favorites.jsx
        │   │   ├── Home/
        │   │   │   ├── Home.css
        │   │   │   └── Home.jsx
        │   │   └── Movie/
        │   │       └── Movie.jsx
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
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        └── vite.config.js
