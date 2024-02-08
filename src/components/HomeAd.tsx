import styles from './HomeAd.module.css';

import HomeAdImage from '../assets/home-ad.png';

export const HomeAd = () => {
  return (
    <a
      className={styles.container}
      href="https://docs.google.com/forms/d/e/1FAIpQLSducoSLcYOLKYaCqlTeVgY6ZRQg8DVnF_SfrJGfPQU6Oit2Yw/viewform"
      target="_blank"
    >
      <img src={HomeAdImage} alt="굿즈 증정 이벤트" width={800} height={457} />
    </a>
  );
};
