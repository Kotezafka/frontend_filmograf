import { createStore } from 'redux';
import rootReducer from './reducers'; // Импорт корневого редьюсера

// Создание хранилища Redux
const store = createStore(
  rootReducer,
  // Для Redux DevTools (необязательно)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;