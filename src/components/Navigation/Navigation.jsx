function Navigation({ setCurrentPage }) {
    return (
      <div className="navigation">
        <div>Компонент "Навигация". Включает кнопки для перехода между страницами</div>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Главная</button>
          <button onClick={() => setCurrentPage('favorites')}>Избранное</button>
          <button onClick={() => setCurrentPage('add')}>Добавить фильм</button>
        </nav>
      </div>
    )
  }
  
  export default Navigation