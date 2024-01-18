import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './Layout.module.css';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

export const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
