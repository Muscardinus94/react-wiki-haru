import styles from './Download.module.css';

import DownloadIcon from '../assets/download.png';

type Props = {
  url: string;
};

export const Download = ({ url }: Props) => {
  return (
    <a href={url} className={styles.download} target="_blank">
      <img src={DownloadIcon} alt="download" width={14} height={14} />
      MP3 다운로드
    </a>
  );
};
