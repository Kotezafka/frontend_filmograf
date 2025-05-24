import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.example.com/movies');
        console.log(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
      }
    };

    fetchMovies();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
