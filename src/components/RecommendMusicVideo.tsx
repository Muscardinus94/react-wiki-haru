import styles from './TrackThumbnail.module.css';

import Typography from './Typography.tsx';
import { Container } from './Container.tsx';
import { Spacing } from './Spacing.tsx';

import { MUSIC_VIDEO_INFORMATION } from '../constants.tsx';
import { OuterPathThumbnail } from './OuterPathThumbnail.tsx';

export const RecommendMusicVideo = () => {
  return (
    <div>
      <Container>
        <Typography.ThumbnailTitle>하루키드 추천 뮤비</Typography.ThumbnailTitle>
      </Container>
      <Spacing height={16} />
      <div className={styles.container}>
        {MUSIC_VIDEO_INFORMATION.map((video) => (
          <OuterPathThumbnail key={video.trackNumber} {...video} />
        ))}
      </div>
    </div>
  );
};
