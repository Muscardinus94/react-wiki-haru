import styles from './HomeSubTitle.module.css';

import Books from '../assets/books.png';

import Typography from './Typography.tsx';

export const HomeSubTitle = () => {
  return (
    <div className={styles.container}>
      <Typography.HomeSubTitle>오늘은 무엇을 들어볼까요?</Typography.HomeSubTitle>
      <img src={Books} alt="books" height="100%" width={172.8} />
    </div>
  );
};
