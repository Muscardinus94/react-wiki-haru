import styles from './TrackThumbnail.module.css';

import Typography from './Typography.tsx';
import { Container } from './Container.tsx';
import { Spacing } from './Spacing.tsx';
import { Thumbnail } from './Thumbnail.tsx';

export const TrackThumbnail = () => {
  return (
    <div>
      <Container>
        <Typography.ThumbnailTitle>전문가 참여 트랙</Typography.ThumbnailTitle>
      </Container>
      <Spacing height={16} />
      <div className={styles.container}>
        {[1, 2, 3, 4].map((v) => (
          <Thumbnail key={v} index={v} />
        ))}
      </div>
    </div>
  );
};
