import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="tabs-container">
      <NavLink 
        to="/"
        className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
        end
      >
        Все фильмы
      </NavLink>
      <NavLink 
        to="/favorites"
        className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
      >
        Избранное
      </NavLink>
      <NavLink 
        to="/add"
        className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
      >
        Добавить фильм
      </NavLink>
    </div>
  );
}