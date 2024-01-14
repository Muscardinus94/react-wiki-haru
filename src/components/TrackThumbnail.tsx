import styles from './TrackThumbnail.module.css';

import Typography from './Typography.tsx';
import { Container } from './Container.tsx';
import { Spacing } from './Spacing.tsx';
import { Thumbnail } from './Thumbnail.tsx';

import { TRACK_INFORMATION } from '../constants.tsx';

export const TrackThumbnail = () => {
  return (
    <div>
      <Container>
        <Typography.ThumbnailTitle>전문가 참여 트랙</Typography.ThumbnailTitle>
      </Container>
      <Spacing height={16} />
      <div className={styles.container}>
        {TRACK_INFORMATION.map((track) => (
          <Thumbnail key={track.trackNumber} {...track} />
        ))}
      </div>
    </div>
  );
};
