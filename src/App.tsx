import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Favorites from './pages/Favorites/Favorites';
import Movie from './pages/Movie/Movie';
import AddMovie from './pages/AddMovie/AddMovie';
import PageHeader from './components/PageHeader/PageHeader';
import GenreFilters from './components/GenreFilters/GenreFilters';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="app">
        {/* Общие компоненты для всех страниц */}
        <PageHeader />
        <Navigation setCurrentPage={setCurrentPage} />
        <GenreFilters />

        <Routes>
          {/* Основные маршруты */}
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<AddMovie />} />

          {/* Дополнительные маршруты */}
          <Route path="/home" element={<Home />} />
          
          {/* Резервный маршрут для 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;