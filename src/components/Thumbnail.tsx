import { Link } from 'react-router-dom';

import styles from './Thumbnail.module.css';

import ThumbnailImage from '../assets/thumbnail.png';
import ThumbnailBadge from '../assets/thumbnail_badge.png';

type Props = {
  index: number;
};

export const Thumbnail = ({ index }: Props) => {
  return (
    <Link to={`/track/${index}`} className={styles.container}>
      <div>
        <div className={styles.badge}>
          <div>
            <span>{index}</span>
            <img src={ThumbnailBadge} alt="thumbnail-badge" width={10} height={10} />
          </div>
          <span>Bench Warmer</span>
        </div>
        <img src={ThumbnailImage} alt="thumbnail" width="100%" />
      </div>
      <h4>축구장 벤치에서 감독과 기싸움 하는 법</h4>
    </Link>
  );
};
