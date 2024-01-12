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
      <div className={styles.contact}>
        <a href="#">
          <img src={Instagram} alt="instargram" />
        </a>
        <a href="#">
          <img src={YouTube} alt="youtube" />
        </a>
        <a href="#">
          <img src={Mail} alt="email" />
        </a>
      </div>
    </footer>
  );
};
