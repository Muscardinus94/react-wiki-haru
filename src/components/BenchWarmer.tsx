import { Spacing } from './Spacing.tsx';
import { Container } from './Container.tsx';
import Typography from './Typography.tsx';
import { Download } from './Download.tsx';
import { TrackImage } from './TrackImage.tsx';
import BenchWarmerCover from '../assets/bench-warmer-cover.png';
import { Divider } from './Divider.tsx';
import { Lyric } from './Lyric.tsx';
import { HighLight } from './HighLight.tsx';
import { AboutTrack } from './AboutTrack.tsx';
import { AboutWiki } from './AboutWiki.tsx';
import Delbert from '../assets/delbert.png';
import { Recommendation } from './Recommendation.tsx';
import { Track } from './Track.tsx';
import { VideoPlayer } from './VideoPlayer.tsx';
import { AudioPlayer } from './AudioPlayer.tsx';
import BenchWarmerAudio from '../assets/audio/bench-warmer.wav';

export const BenchWarmer = () => {
  return (
    <>
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
        <Download url="https://www.youtube.com/watch?v=m6t7iswKQbo&feature=youtu.be" />
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
        <VideoPlayer
          title="Bench Warmer 비주얼라이저를 즐겨보세요!"
          description="이 곡은 환상적인 비주얼라이저와 함께 감상할 수 있습니다. 신나고 환상적인 비주얼라이저와
          함께 Bench Warmer를 즐겨보세요!"
          src="https://youtu.be/YSW9VSkEZ9E"
          embedSrc="https://www.youtube.com/embed/YSW9VSkEZ9E?si=zIEVoHi_kj5MHOiV"
        />
      </Container>
      <Spacing height={29} />
      <Container>
        <Track trackNumber={1} trackName="Bench Warmer (feat. Boi B)" />
      </Container>
      <Spacing height={12} />
      <TrackImage imgPath={BenchWarmerCover} />
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
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="Hey, coach!
I wanna know
경기가 끝나겠어
어서 날 좀 내보내줘
Pass me the ball
then Imma control
소중한 기횔 다시 놓치지 않아
가쁜 숨소릴 원해
Hey, coach
I wanna know
경기가 끝나겠어
어서 날 좀 내보내줘
Pass me the ball
Imma control
소중한 기횔 다시 놓치지 않아
가쁜 숨소릴 원해"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Verse 2"
          description="정수리부터 새끼발톱까지
시공간을 무시하는 beauty
난 티발씨에 뚝딱이 재질
She said it’s okay
너그럽기까지 하지
Kick it  그어진 선을 넘어
후반은 방금 시작 됐고
흐름을 다시 바꿔
천수형 호흡법 후 후
Inhala exhala
너가 짠 포메이션 내 자린 메짤라
I just wanna be heated
전반전에 뛴 놈들은 헛다리 질 뿐
머리 감싸 쥔다거나
한숨을 쉴 필요 없어
난 너가 딱 한번
기횔 줘도 만들겠어
Give me the ball
첫 터치 하고
턴 기분은 외데고르
수 백 번을 이미지
트레이닝 해왔다구
절대 안져 0304년도 아스날
경쟁자는 이적요청하기 바뻐"
        />
        <Spacing height={22.3} />
        <HighLight title="피쳐링">Boi B (보이비)</HighLight>
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Outro"
          description="팀이 이긴대도
목에 메달을 걸기 머쓱해
고갤 숙이네
차라리 지기를 원해
내가 출전 못 한다면
못난 내 속마음이 안 보이게
팀이 이긴대도
목에 메달을 걸기 머쓱해
고갤 숙이네
차라리 지기를 원해
내가 출전 못 한다면
못난 내 속마음이"
        />
      </Container>
      <Spacing height={42.5} />
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
      <AboutWiki
        artistImagePath={Delbert}
        artist="Delbert E. McInnis"
        description={
          <>
            이 글은 공동 작성자 <span>Delbert E. Mclnnis</span> 델버트 이 멕클니스는 전 세계적으로
            유명한 심리 전문의입니다. 10년 동안 한 인도 사원에서 수도승 생활을 하며 명상과 철학에
            대한 깊은 이해를 얻었습니다. 그리고 어느 날 갑자기 축구에 대한 열정을 불태우게 되었고,
            축구장 벤치 심리 전문가로서의 진로를 결정하였고 The Warm Bench라는 벤치 심리 전문 컨설팅
            회사를 설립하였습니다.
          </>
        }
        sub="심리 전문의"
        category="심리요법"
      />
      <Spacing height={24} />
      <Container>
        <Recommendation />
      </Container>
      <AudioPlayer
        src={BenchWarmerAudio}
        title="1. 하루키드 (Haru Kid) - Bench Warmer (feat.Boi B)"
      />
    </>
  );
};
