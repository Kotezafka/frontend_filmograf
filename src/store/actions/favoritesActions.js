export const addToFavorites = (movie) => ({
    type: 'ADD_TO_FAVORITES',
    payload: movie
  });
  
  export const removeFromFavorites = (movieId) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: movieId
  });
  
  export const loadFavorites = (favorites) => ({
    type: 'LOAD_FAVORITES',
    payload: favorites
  });