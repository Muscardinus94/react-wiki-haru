import styles from './Intro.module.css';
import { Banner } from '../components/Banner.tsx';
import { Spacing } from '../components/Spacing.tsx';
import Typography from '../components/Typography.tsx';
import { Container } from '../components/Container.tsx';
import { RecommendMusicVideo } from '../components/RecommendMusicVideo.tsx';
import { RecommendTrack } from '../components/RecommendTrack.tsx';
import { Subscribe } from '../components/Subscribe.tsx';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Spacing height={15} />
      <Container>
        <Typography.HomeTitle>
          하루키드 (Haru Kid)의 새로운 앨범 LIFE가 발매되기 전 아티스트 정보에 대해서 알아보세요!
        </Typography.HomeTitle>
        <Spacing height={20} />
        <RecommendMusicVideo />
        <Spacing height={30} />
        <RecommendTrack />
        <Spacing height={30} />
        <Subscribe />
      </Container>
    </div>
  );
};

export default Intro;
