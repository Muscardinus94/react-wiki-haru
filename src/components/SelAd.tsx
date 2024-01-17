import styles from './SelAd.module.css';
import Sel from '../assets/sel-ad.png';

export const SelAd = () => {
  return (
    <a className={styles.container} href="/" target="_blank">
      <img src={Sel} width="100%" alt="SEL ad" />
    </a>
  );
};
