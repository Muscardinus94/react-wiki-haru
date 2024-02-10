import styles from './Footer.module.css';

import FooterImage from '../assets/footer.png';
import Instagram from '../assets/instagram.svg';
import YouTube from '../assets/youtube.svg';
import Mail from '../assets/mail.svg';

import { Divider } from './Divider.tsx';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <img src={FooterImage} alt="헤더 이미지" width={174} height={41} />
      <Divider backgroundColor="#83a161" />
      <p>팔로우 하기</p>
      <div className={styles.follow}>
        <a href="https://www.instagram.com/haru.kid/" target="_blank">
          <img src={Instagram} alt="instargram" width={20} height={20} />
        </a>
        <a href="https://www.youtube.com/@harukid1704" target="_blank">
          <img src={YouTube} alt="youtube" width={20} height={20} />
        </a>
        <a href="mailto:contact@selrecords.com">
          <img src={Mail} alt="email" width={20} height={20} />
        </a>
      </div>
    </footer>
  );
};
