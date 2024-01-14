import styles from './Track.module.css';

type Props = {
  trackNumber: number;
  trackName: string;
};

export const Track = ({ trackNumber, trackName }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['track-number']}>{trackNumber}</div>
      <div className={styles['track-detail']}>
        트랙 {trackNumber}:<span>{trackName}</span>
      </div>
    </div>
  );
};
