import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

export const Layout = () => {
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
