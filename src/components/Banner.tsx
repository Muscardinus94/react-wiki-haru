import BannerImage from '../assets/banner.png';

import styles from './Banner.module.css';

export const Banner = () => {
  return <img src={BannerImage} alt="배너" width={800} height={391} className={styles.banner} />;
};
