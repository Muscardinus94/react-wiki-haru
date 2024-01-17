import { Spacing } from './Spacing.tsx';
import { Container } from './Container.tsx';
import Typography from './Typography.tsx';
import { Download } from './Download.tsx';
import { HaruKidAd } from './HaruKidAd.tsx';
import { TrackImage } from './TrackImage.tsx';
import ThirtyNineDegreesCover from '../assets/39-degrees-cover.png';
import { Divider } from './Divider.tsx';
import { Lyric } from './Lyric.tsx';
import { AboutTrack } from './AboutTrack.tsx';
import { AboutWiki } from './AboutWiki.tsx';
import Liam from '../assets/liam.png';
import { Recommendation } from './Recommendation.tsx';
import { Track } from './Track.tsx';

export const ThirtyNineDegrees = () => {
  return (
    <>
      <Spacing height={12} />
      <Container>
        <Typography.BreadCrumb list={['운동', '레저 스포츠']} />
      </Container>
      <Spacing height={11} />
      <Container>
        <Typography.HeadLine>목욕탕 온탕에서 옆사람보다 오래 버티는 법</Typography.HeadLine>
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Author>Liam Oceanhart</Typography.Author>
      </Container>
      <Spacing height={19} />
      <Container>
        <Download />
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Summary>
          목욕탕 온탕에서 오래 버티는 능력을 향상시키려면 체력향상을 위한 유산소 운동을 하거나, 물
          섭취를 늘린다던지 자칫 혼미해질 수 있는 상황을 고려, 정신적 안정을 취하는 등 몇 가지 팁을
          따르면 도움이 될 수 있습니다. 그러나 주의해야 할 점은 자신의 체력과 건강 상태를 고려하여
          적절한 조절이 필요하다는 점입니다. 너무 오래 버티려고 무리하게 행동하면 건강에 해를 끼칠
          수 있으므로 적절한 조절이 필요합니다.
        </Typography.Summary>
      </Container>
      <Spacing height={19} />
      <Container>
        <HaruKidAd />
      </Container>
      <Spacing height={29} />
      <Container>
        <Track trackNumber={3} trackName="39 degrees" />
      </Container>
      <Spacing height={12} />
      <TrackImage imgPath={ThirtyNineDegreesCover} />
      <Spacing height={31.95} />
      <Container>
        <Divider height={2.221} backgroundColor="#f5f5f5" />
      </Container>
      <Spacing height={14.83} />
      <Container>
        <Lyric
          title="Hook"
          description="oh yeah, Imma fly to you
배낭 가득 이사를 가는 듯이
(뭐가 필요해?)
i just wanna,
가방엔 향기가 가득해
우리의 거리가 마음에 들지만
오늘만큼은 코 닿을 듯이
(그러기로 해)
아주 잔뜩,
입안에 단어를 채워둘게"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Verse 1"
          description="적당히 건조해서 좋은 것 같애
너와 나의 관계
빨래도 금방 마르고
손에 땀도 안 차는데
편리하지 여기서
난 안정감을 찾아내
nobody crying
우린 딱 맞는 온도
온몸을 편히 담궜네
오늘은 예외로 해볼까 해
정수리 후끈해질 만큼
물을 더 데워 터프하게
39, we hit it
온탕, we up in here
빨래는 내일로 미뤄도 돼
지금 너와 내겐
옷이 필요 없을 테니 편하게
all night,
we breathe in and out
body talk, silence"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="oh yeah, Imma fly to you
배낭 가득 이사를 가는 듯이
(뭐가 필요해?)
i just wanna,
가방엔 향기가 가득해
우리의 거리가 마음에 들지만
오늘만큼은 코 닿을 듯이
(그러기로 해)
아주 잔뜩,
입안에 단어를 채워둘게"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Verse 2"
          description="평소답지 않은 오늘이
우릴 어디로 데려갈지는
몰라도 좋아
후회가 눈앞에 있지만
지금 내 마음이 그래
굴러떨어지게 둘래
너의 목소리도
나의 것과 같은 톤
상기된 얼굴일걸
밤이 새벽에 닿을 때쯤엔
우리는 함부로
저 하늘 위를 두드려
다 식어버릴지도 몰라
해가 뜨고 난 뒤엔
그건 너무 자연스럽지
이미 빨갛게
온몸은 익어버렸지만
(뭐 어떡해)
섭섭할 필요는 없잖아
너도 나도 다 큰 어른인걸
우린 가끔 잊곤 해
적당히 넘어가도 돼"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="oh yeah, Imma fly to you
배낭 가득 이사를 가는 듯이
(뭐가 필요해?)
i just wanna,
가방엔 향기가 가득해
우리의 거리가 마음에 들지만
오늘만큼은 코 닿을 듯이
(그러기로 해)
아주 잔뜩,
입안에 단어를 채워둘게"
        />
      </Container>
      <Spacing height={42.5} />
      <AboutTrack
        description={[
          'Lyrics by Haru Kid\nComposed by Haru Kid, qjarn Arranged by qjarn\nMixed by Song Eunsuk\nMastered by (성지훈) Francis Jihoon Seong, (류경민) Allen Ryu at JFS Mastering',
          '온탕에 뛰어들듯, 좀 더 깊은 관계로 뛰어드는 마음을 표현해봤습니다. 39도의 뜨거운 물에서 우리는 얼마나 오래 버틸 수 있을까요?',
        ]}
      />
      <Spacing height={29} />
      <AboutWiki
        artistImagePath={Liam}
        artist="Liam Oceanhart"
        sub="해남"
        description={
          <>
            이 글은 공동 작성자 <span>Liam Oceanhart</span> 리암 오션하트는 해남이자
            슈퍼히어로입니다. 그는 생계를 위한 물질 중 불현듯 자신의 잠재된 슈퍼파워를 발견하여
            슈퍼히어로의 길을 걸었습니다. 그는 10년간의 물질 경력을 통해 물 속에서 10시간을 버틸 수
            있는 힘을 발현시켰습니다. 이 슈퍼파워를 활용하여, 일반인의 1000배에 달하는 각종 어패류의
            수확량을 통해 제주도의 경제를 책임집니다. 그는 강인한 의지로 무장하여, 희망과 영감을
            전파하며 우리가 내면에 품고 있는 잠재력을 상기시킵니다.
          </>
        }
        category="레저 스포츠"
      />
      <Spacing height={24} />
      <Container>
        <Recommendation />
      </Container>
    </>
  );
};
