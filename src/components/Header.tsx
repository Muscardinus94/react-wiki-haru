import styles from './Header.module.css';

import HeaderImage from '../assets/header.png';

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={HeaderImage} alt="헤더 이미지" width={120} height={30} />
    </header>
  );
};
