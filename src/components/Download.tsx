import styles from './Download.module.css';

import DownloadIcon from '../assets/download.png';

export const Download = () => {
  return (
    <button type="button" className={styles.download}>
      <img src={DownloadIcon} alt="download" width={14} height={14} />
      MP3 다운로드
    </button>
  );
};
