import styles from './TrackThumbnail.module.css';

import Typography from './Typography.tsx';
import { Container } from './Container.tsx';
import { Spacing } from './Spacing.tsx';

import { RECOMMEND_TRACK_INFROMATION } from '../constants.tsx';
import { OuterPathThumbnail } from './OuterPathThumbnail.tsx';

export const RecommendTrack = () => {
  return (
    <div>
      <Container>
        <Typography.ThumbnailTitle>하루키드 추천 트랙</Typography.ThumbnailTitle>
      </Container>
      <Spacing height={16} />
      <div className={styles.container}>
        {RECOMMEND_TRACK_INFROMATION.map((video) => (
          <OuterPathThumbnail key={video.trackNumber} {...video} />
        ))}
      </div>
    </div>
  );
};
