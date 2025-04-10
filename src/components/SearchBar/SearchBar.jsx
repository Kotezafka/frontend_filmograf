function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <div className="search-bar">
        <div>Компонент "Поиск". Позволяет фильтровать фильмы по названию</div>
        <input
          type="text"
          placeholder="Поиск фильмов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    )
  }
  
  export default SearchBar