import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Favorites from '../pages/Favorites/Favorites';
import AddMovie from '../pages/AddMovie/AddMovie';
import Movie from '../pages/Movie/Movie';
import EditMovie from '../pages/EditMovie/EditMovie';
import Layout from '../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'add',
        element: <AddMovie />,
      },
      {
        path: 'movie/:id',
        element: <Movie />,
      },
      {
        path: 'edit/:id',
        element: <EditMovie />,
      },
    ],
  },
]); 