import { useState } from 'react'
import Favorites from './pages/Favorites/Favorites'
import Movie from './pages/Movie/Movie.jsx'
import AddMovie from './pages/AddMovie/AddMovie'
import PageHeader from './components/PageHeader/PageHeader'
import GenreFilters from './components/GenreFilters/GenreFilters';
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home';
import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />
      case 'favorites': return <Favorites />
      case 'add': return <AddMovie />
      default: return <Home />
    }
  }

  return (
    <div className="app">
      <PageHeader />
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
