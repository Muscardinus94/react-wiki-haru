import styles from './Subscribe.module.css';
import { Spacing } from './Spacing.tsx';

import YoutubeMail from '../assets/youtube_mail.png';

export const Subscribe = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>YouTube</h3>
      <Spacing height={13} />
      <div className={styles['subscribe-container']}>
        <img src={YoutubeMail} alt="youtube-mail" width={55} height={53.854} />
        <Spacing height={13} />
        <h3>하루키드 유튜브 구독하기</h3>
        <Spacing height={13} />
        <span>어쩌다 가끔 구독탭에 뜨는 유익한 정보들!</span>
        <Spacing height={11} />
        <button>구독할래요!</button>
      </div>
    </div>
  );
};
