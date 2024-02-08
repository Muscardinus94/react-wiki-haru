import styles from './HaruKidAd.module.css';

import HaruKidAdImage from '../assets/haru-kid-ad.png';

export const HaruKidAd = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSducoSLcYOLKYaCqlTeVgY6ZRQg8DVnF_SfrJGfPQU6Oit2Yw/viewform"
      target="_blank"
      className={styles.container}
    >
      <img src={HaruKidAdImage} alt="하루키드 참여" width="800" height="125" />
    </a>
  );
};
