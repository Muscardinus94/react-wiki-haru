import { Spacing } from './Spacing.tsx';
import { Container } from './Container.tsx';
import Typography from './Typography.tsx';
import { Download } from './Download.tsx';
import { SelAd } from './SelAd.tsx';
import { TrackImage } from './TrackImage.tsx';
import LetTheCameraRollCover from '../assets/let-the-camera-roll-cover.png';
import { Divider } from './Divider.tsx';
import { Lyric } from './Lyric.tsx';
import { HighLight } from './HighLight.tsx';
import { AboutTrack } from './AboutTrack.tsx';
import { AboutWiki } from './AboutWiki.tsx';
import Dongho from '../assets/dongho.png';
import { Recommendation } from './Recommendation.tsx';
import { Track } from './Track.tsx';

export const LetTheCameraRoll = () => {
  return (
    <>
      <Spacing height={12} />
      <Container>
        <Typography.BreadCrumb list={['예술', '영화']} />
      </Container>
      <Spacing height={11} />
      <Container>
        <Typography.HeadLine>영화 안 보고 본 척 하는 법</Typography.HeadLine>
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Author>Dongho Lee</Typography.Author>
      </Container>
      <Spacing height={19} />
      <Container>
        <Download url="https://youtu.be/UPH8gxm3WbA" />
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Summary>
          영화를 안 보고 본 척하는 것은 배우나 연기자가 사용하는 기술 중 하나입니다. 가짜리뷰를
          작성하거나, 일반적인 클리셰를 활용해 줄거리나 대사를 상상해낼 수 있습니다. 단, 세부적인
          내용은 생략하여 표현해야 자연스럽게 보일 것입니다. 이외에 다양한 팁과 방법에 대해
          소개합니다. 다만 주의하세요, 이런 행동은 다른 사람을 속이는 용도로 사용되면 문제가 될 수
          있으며, 허구의 이야기를 만들거나 다른 사람을 속이는 행동은 윤리적으로 문제가 될 수
          있습니다.
        </Typography.Summary>
      </Container>
      <Spacing height={19} />
      <Container>
        <SelAd />
      </Container>
      <Spacing height={29} />
      <Container>
        <Track trackNumber={4} trackName="Let The Camera Roll (feat. 이바다)" />
      </Container>
      <Spacing height={12} />
      <TrackImage imgPath={LetTheCameraRollCover} />
      <Spacing height={31.95} />
      <Container>
        <Divider height={2.221} backgroundColor="#f5f5f5" />
      </Container>
      <Spacing height={14.83} />
      <Container>
        <Lyric
          title="Hook"
          description="You can be
what you wanna be
with me
“Baby”
“Oh my lord”
“Best friend”
Whatever
Let the camera roll
Action!"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Verse 1"
          description="우리 역할은 뭐든 가능해
girl, what’s your mood today?
지금 당장 내가 써줄게
쪽대본 퀄리티는 아카데미
눈물 연기는 안 다룰 테니
안약은 안 가져와도 돼
대사 위에 애드립 얹어
안는 게 좋겠군
혹시 너는 그 이상을 원해?
극장에 걸어
모두가 볼 수 있게
너와 나의 얼굴이
자동차만해질 때까지
zoom in 땡겨 더 더 더
밤새도록 단어들을 굴릴테니
지루할 걱정은
전부 이불 아래 내버려 둬
"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="You can be
what you wanna be
with me
“Baby”
“Oh my lord”
“Best friend”
Whatever
Let the camera roll
Action!"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Verse 2"
          description="oh, you ain’t my persona
너를 온전히 담기를 원해
물론 니가 든 카메라 속의
나 역시도
i wanna be me, babe
감정은 진짜를 뱉어놔
bad or good, i don’t care,
run it you make me
Fableman
너의 무엇이든
imma do it with my 8mm
완벽할 필요 없지
난 원하지도 않아
별 두개 반을 준대도 OK
baby what’s your name?
이동진 박평식
crank in everyday
가방에 낭비할 필름이 많아
i got more scenes and
characters
let me waste the film
come with me
"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Bridge"
          description="In the dim of the morning
light,I i pick up my lens,
ready to ignite,
Through the viewfinder,
I see the world's stage,
순간을 페이지 단위로 난 캡쳐해"
        />
        <Spacing height={22.3} />
        <HighLight title="피쳐링">이바다</HighLight>
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="You can be
what you wanna be
with me
“Baby”
“Oh my lord”
“Best friend”
Whatever
Let the camera roll
Action!"
        />
      </Container>
      <Spacing height={42.5} />
      <AboutTrack
        description={[
          'Lyrics by Haru Kid \nComposed by Haru Kid, Alive Funk\nArranged by Alive Funk\nMixed by Song Eunsuk\nMastered by (성지훈) Francis Jihoon Seong, (류경민) Allen Ryu at JFS Mastering',
          '영잘알처럼 보이기 위해 재밌는 단어들을 몇 가지를 가사에 넣어뒀습니다. 찾아보면서 노래를 들으면 재미가 두 배!',
        ]}
      />
      <Spacing height={56.33} />
      <AboutWiki
        artistImagePath={Dongho}
        artist="Delbert E. McInnis"
        description={
          <>
            이 글은 공동 작성자 <span>Dongho Lee</span> 이동호는 영화 평론가로 영화에 대한 신랄한
            평가를 제시합니다. 그의 글은 독자들에게 도전적인 생각을 전달하며 논란을 자아냅니다.
            이외로 그는 영화 뿐 아니라 예민한 주제인 사람의 인성과 종교 등을 다루는 악취미를 가지고
            있습니다. 그러나 이러한 악취미 또한 모순이 없는 완벽한 평론으로 상당한 지지를 받고
            있습니다. 그는 주제를 선입견 없이 다루며 철저한 사실 확인과 근거를 통해 평가합니다. 그의
            악취미는 오히려 그의 평론을 독특하고 깊이 있는 분석으로 이끌어냅니다. 이에 그는 영화
            평론가로서뿐만 아니라, 그의 악취미에 대해서도 상당한 지지를 받고 있습니다.
          </>
        }
        sub="영화  평론가"
        category="영화"
      />
      <Spacing height={24} />
      <Container>
        <Recommendation />
      </Container>
    </>
  );
};
