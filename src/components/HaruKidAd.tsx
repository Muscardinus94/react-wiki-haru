import styles from './HaruKidAd.module.css';

import Jersey from '../assets/jersey.png';
import Cap from '../assets/cap.png';

export const HaruKidAd = () => {
  return (
    <div className={styles.container}>
      <a href="" target="_blank">
        <img src={Jersey} alt="haru-kid" width="100%" height="100%" />
      </a>
      <a href="" target="_blank">
        <img src={Jersey} alt="jersey" width="100%" height="100%" />
      </a>
      <a href="" target="_blank">
        <img src={Cap} alt="cap" width="100%" height="100%" />
      </a>
    </div>
  );
};
