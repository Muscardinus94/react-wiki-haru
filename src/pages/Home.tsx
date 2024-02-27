import { Spacing } from '../components/Spacing.tsx';
import Typography from '../components/Typography.tsx';
import { Container } from '../components/Container.tsx';
import { HomeSubTitle } from '../components/HomeSubTitle.tsx';
import { HomeSearch } from '../components/HomeSearch.tsx';
import { TrackThumbnail } from '../components/TrackThumbnail.tsx';
import { Subscribe } from '../components/Subscribe.tsx';
import { Reviews } from '../components/Reviews.tsx';
import { Information } from '../components/Information.tsx';
import { RecommendMusicVideo } from '../components/RecommendMusicVideo.tsx';
import { RecommendTrack } from '../components/RecommendTrack.tsx';

const Home = () => {
  return (
    <div>
      <Spacing height={15} />
      <Container>
        <Typography.HomeTitle>
          온라인에서 가장 신뢰받는 하루 키드 (Haru Kid) 웹사이트인 위키하루에 오신 것을 환영합니다.
        </Typography.HomeTitle>
      </Container>
      <Spacing height={16.21} />
      <Container>
        <HomeSubTitle />
      </Container>
      <HomeSearch />
      <Spacing height={30} />
      <TrackThumbnail />
      <Spacing height={30} />
      <Subscribe />
      <Spacing height={29.96} />
      <RecommendMusicVideo />
      <Spacing height={30} />
      <RecommendTrack />
      <Spacing height={30} />
      <Reviews />
      <Spacing height={32} />
      <Information />
    </div>
  );
};

export default Home;
