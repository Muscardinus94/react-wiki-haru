import styles from './HaruKidAd.module.css';

import HaruKidAdImage from '../assets/haru-kid-ad.png';

export const HaruKidAd = () => {
  return (
    <div className={styles.container}>
      <a href="" target="_blank">
        <img src={HaruKidAdImage} alt="하루키드 참여" width="100%" height="100%" />
      </a>
    </div>
  );
};
