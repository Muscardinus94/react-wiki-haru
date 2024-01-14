import styles from './Download.module.css';

import DownloadIcon from '../assets/download.png';

export const Download = () => {
  return (
    <a
      href="https://open.spotify.com/track/4d96YEbQXNqQsbBauaButp?si=d661ba8a1761495c&nd=1&dlsi=220220e019364608"
      className={styles.download}
      target="_blank"
    >
      <img src={DownloadIcon} alt="download" width={14} height={14} />
      MP3 다운로드
    </a>
  );
};
