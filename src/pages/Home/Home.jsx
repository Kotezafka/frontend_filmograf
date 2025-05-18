import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import GenreFilters from '../../components/GenreFilters/GenreFilters';
import Footer from '../../components/Footer/Footer';
import { getAllFilms } from '../../databases/db_films';
import { addToFavorites, removeFromFavorites } from '../../store/actions/favoritesActions';
import './Home.css';

export default function Home() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const movies = getAllFilms();

  const filteredMovies = movies.filter(movie => {
    if (selectedGenres.length === 0) return true;
    const movieGenres = Array.isArray(movie.genres)
      ? movie.genres
      : movie.genre
        ? [movie.genre]
        : [];
    return selectedGenres.some(genre => movieGenres.includes(genre));
  });

  const isFavorite = (movieId) => favorites.some(f => f.id === movieId);

  const handleToggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="home-page">
      <div className="main-content">
        <GenreFilters 
          activeGenres={selectedGenres}
          onGenreChange={setSelectedGenres}
        />
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id}
              movie={{ ...movie, isFavourite: isFavorite(movie.id) }}
              toggleFavorite={() => handleToggleFavorite(movie)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}