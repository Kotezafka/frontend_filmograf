import { useState } from 'react'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites'
import Movie from './pages/Movie/Movie.jsx'
import AddMovie from './pages/AddMovie/AddMovie'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
      <Header />
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

