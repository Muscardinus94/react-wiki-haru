import styles from './HomeAd.module.css';

import HaruKidEventLg from '../assets/haru-kid-event-lg.png';
import Jersey from '../assets/jersey.png';
import Cap from '../assets/cap.png';

export const HomeAd = () => {
  return (
    <div className={styles.container}>
      <img src={HaruKidEventLg} alt="haru-kid-event-large" width="100%" />
      <img src={HaruKidEventLg} alt="haru-kid-event-large" width="100%" />
      <img src={Jersey} alt="haru-kid-jersey" width="100%" />
      <img src={Cap} alt="haru-kid-cap" width="100%" />
    </div>
  );
};
