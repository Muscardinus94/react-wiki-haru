import styles from './SelAd.module.css';
import Sel from '../assets/sel-ad.png';

export const SelAd = () => {
  return (
    <a className={styles.container} href="https://selrecords.com/" target="_blank">
      <img src={Sel} width={768} height={280.484} alt="SEL ad" />
    </a>
  );
};
