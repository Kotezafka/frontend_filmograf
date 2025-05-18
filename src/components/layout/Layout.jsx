import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PageHeader from '../PageHeader/PageHeader';

const Layout = () => {
  return (
    <div className="app">
      <PageHeader />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 