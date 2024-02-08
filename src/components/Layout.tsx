import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import styles from './Layout.module.css';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Intro from '../pages/Intro.tsx';

const LIMIT_DATE = dayjs(new Date('2024-02-13')).set('hour', 18).toDate();

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  const IS_AFTER_LIMIT_DATE = useMemo(() => {
    return dayjs().isAfter(LIMIT_DATE);
  }, []);

  // useEffect(() => {
  //   if (!IS_AFTER_LIMIT_DATE) {
  //     navigate('/', { replace: true });
  //   }
  // }, [IS_AFTER_LIMIT_DATE, navigate]);

  return (
    <div className={styles.container}>
      <Header />
      {/*<main>{IS_AFTER_LIMIT_DATE ? <Outlet /> : <Intro />}</main>*/}
      <main>{!IS_AFTER_LIMIT_DATE ? <Outlet /> : <Intro />}</main>
      <Footer />
    </div>
  );
};
