import './Navigation.css';


export default function Navigation({ activeTab, onTabChange }) {
  return (
    <div className="tabs-container">
      <button 
        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onTabChange('all')}
      >
        Все фильмы
      </button>
      <button 
        className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => onTabChange('favorites')}
      >
        Избранное
      </button>
      <button 
        className={`tab ${activeTab === 'add' ? 'active' : ''}`}
        onClick={() => onTabChange('add')}
      >
        Добавить фильм
      </button>
    </div>
  );
}