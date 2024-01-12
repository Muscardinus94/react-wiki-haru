import styles from './Track.module.css';

type Props = {
  trackNumber: number;
  title: string;
};

export const Track = ({ trackNumber, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['track-number']}>{trackNumber}</div>
      <div className={styles['track-detail']}>
        트랙 {trackNumber}:<span>{title}</span>
      </div>
    </div>
  );
};
