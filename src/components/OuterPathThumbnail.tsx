import styles from './Thumbnail.module.css';

import { Video } from '../constants.tsx';

import ThumbnailBadge from '../assets/thumbnail-badge.png';

type Props = Video;

export const OuterPathThumbnail = ({
  url,
  trackNameKr,
  trackNameEn,
  trackNumber,
  imgPath,
}: Props) => {
  return (
    <a href={url} target="_blank" className={styles.container}>
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
    </a>
  );
};
