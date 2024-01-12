import Typography from '../components/Typography.tsx';
import { Spacing } from '../components/Spacing.tsx';
import { Download } from '../components/Download.tsx';
import { Ad } from '../components/Ad.tsx';
import { Track } from '../components/Track.tsx';
import { AlbumImage } from '../components/AlbumImage.tsx';
import { Divider } from '../components/Divider.tsx';
import { Lyric } from '../components/Lyric.tsx';
import { AboutTrack } from '../components/AboutTrack.tsx';
import { Recommendation } from '../components/Recommendation.tsx';
import { AboutWiki } from '../components/AboutWiki.tsx';
import { Container } from '../components/Container.tsx';

export const TrackDetail = () => {
  return (
    <div>
      <Spacing height={12} />
      <Container>
        <Typography.BreadCrumb list={['건강', '심리요법']} />
      </Container>
      <Spacing height={11} />
      <Container>
        <Typography.HeadLine>축구장 벤치에서 감독과 기싸움 하는 법</Typography.HeadLine>
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Author>Delbert E. McInnis</Typography.Author>
      </Container>
      <Spacing height={19} />
      <Container>
        <Download />
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Summary>
          축구장 벤치에서 감독과의 기싸움을 위한 방법들을 팁에 대해 알아봅니다. 포즈와 몸짓을
          연습하면서 자연스러운 표현을 갖출 수 있도록 노력하고, 기싸움을 넘어 분노로 번지지 않도록
          인내심을 유지하기 위한 명상법을 활용해보세요. 또한 실감나면서도 과장되지 않는 감정 표현을
          통해 감독은 물론 관중과의 상호작용마저 흥미롭게 할 수 있습니다. 이러한 다양한 방법을
          조합하여 감독과의 기싸움에서 승리해보세요!
        </Typography.Summary>
      </Container>
      <Spacing height={19} />
      <Container>
        <Ad />
      </Container>
      <Spacing height={29} />
      <Container>
        <Track trackNumber={1} title="Bench Warmer (feat. Boi B)" />
      </Container>
      <Spacing height={12} />
      <AlbumImage />
      <Spacing height={31.95} />
      <Container>
        <Divider height={2.221} backgroundColor="#f5f5f5" />
      </Container>
      <Spacing height={14.83} />
      <Container>
        <Lyric
          title="Verse 1"
          description="체력안배는 끝났고
        난 가볍게 뛰어 터치라인 뒤
        초조한 내 앞에 시간은 어느새
        심장소리는 100데시벨
        어서 공을 던져줘 내 앞에
        갈고닦은 내 트래핑 보여줄게
        공이 내 발에서
        떨어지지 않을 테니
        I just wanna be heated
        누군가의 뜨거운 입김 위에서
        하나도 그립지 않을 줄만 알았어
        I just wanna be filled with
        너의 문장들, 색깔은 붉게
        나는 아주 준비가 돼있어
        Let me run this track"
        />
      </Container>
      <Spacing height={21.22} />
      <Container>
        <Divider height={2.223} />
      </Container>
      <AboutTrack
        description={[
          'Lyrics by Haru Kid, 보이비\n' +
            'Composed by Haru Kid, 보이비, qjarn Arranged by qjarn\n' +
            'Mixed by Song Eunsuk\n' +
            'Mastered by (성지훈) Francis Jihoon Seong, (류경민) Allen Ryu at JFS Mastering',
          '그녀에게 한마디 하고싶습니다. "니가 하는 그 사랑놀이에 나도 좀 뛰게 해줘라!"\n',
        ]}
        tip={'Bench Warmer - 언제나 벤치에 앉아서 출전 기회를 기다리는 후보급 선수'}
      />
      <Spacing height={56.33} />
      <AboutWiki artist="Delbert E. McInnis" sub="심리 전문의" category="심리요법" />
      <Spacing height={24} />
      <Container>
        <Recommendation />
      </Container>
    </div>
  );
};
