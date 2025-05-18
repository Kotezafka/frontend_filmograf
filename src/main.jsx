import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';
import { loadFavorites } from './store/actions/favoritesActions';
import { initLocalDb } from './databases/db_films';


initLocalDb();

const savedFavorites = localStorage.getItem('favorites');
if (savedFavorites) {
  store.dispatch(loadFavorites(JSON.parse(savedFavorites)));
}

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('favorites', JSON.stringify(state.favorites.favorites));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);