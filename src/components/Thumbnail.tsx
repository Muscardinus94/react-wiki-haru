import { Link } from 'react-router-dom';

import styles from './Thumbnail.module.css';

import { Track } from '../constants.tsx';

import ThumbnailBadge from '../assets/thumbnail-badge.png';

type Props = Track;

export const Thumbnail = ({ path, trackNameKr, trackNameEn, trackNumber, imgPath }: Props) => {
  return (
    <Link to={`/track/${path}`} className={styles.container}>
      <div>
        <div className={styles.badge}>
          <div>
            <span>{trackNumber}</span>
            <img src={ThumbnailBadge} alt="thumbnail-badge" width={18} height={18} />
          </div>
          <span>{trackNameEn}</span>
        </div>
        <img
          src={imgPath}
          alt="thumbnail"
          width={368}
          height={244.555}
          className={styles['thumbnail-image']}
        />
      </div>
      <h4>{trackNameKr}</h4>
    </Link>
  );
};
