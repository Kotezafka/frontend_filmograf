export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="description">
        Компонент "Навигация". Позволяет переключаться между разделами приложения.
      </div>
      <div className="nav-links">
        <button className="active">Все фильмы</button>
        <button>Избранное</button>
        <button>Добавить фильм</button>
      </div>
    </nav>
  );
}