import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer'; // Импорт редьюсера для избранного

// Объединение всех редьюсеров
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Другие редьюсеры (если есть)
});

export default rootReducer;