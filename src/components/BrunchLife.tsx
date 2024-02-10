import { Spacing } from './Spacing.tsx';
import { Container } from './Container.tsx';
import Typography from './Typography.tsx';
import { Download } from './Download.tsx';
import { TrackImage } from './TrackImage.tsx';
import BrunchLifeCover from '../assets/brunch-life-cover.png';
import { Divider } from './Divider.tsx';
import { Lyric } from './Lyric.tsx';
import { AboutTrack } from './AboutTrack.tsx';
import { AboutWiki } from './AboutWiki.tsx';
import Jose from '../assets/jose.png';
import { Recommendation } from './Recommendation.tsx';
import { Track } from './Track.tsx';
import { VideoPlayer } from './VideoPlayer.tsx';
import { AudioPlayer } from './AudioPlayer.tsx';
import BrunchLifeAudio from '../assets/audio/brunch-life.wav';

export const BrunchLife = () => {
  return (
    <>
      <Spacing height={12} />
      <Container>
        <Typography.BreadCrumb list={['요리', '조리']} />
      </Container>
      <Spacing height={11} />
      <Container>
        <Typography.HeadLine>오후 6시에 브런치 만드는 법</Typography.HeadLine>
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Author>Jose A. Bock</Typography.Author>
      </Container>
      <Spacing height={19} />
      <Container>
        <Download url="https://youtu.be/IKXpbjEP-ew" />
      </Container>
      <Spacing height={17} />
      <Container>
        <Typography.Summary>
          오후 6시에 브런치를 만드는 것은 일반적으로 브런치의 시간이 아니지만, 그런 독특한 상황을
          위해서도 브런치를 만들 수 있습니다. 오후 6시는 일몰 직전이므로 이러한 자연광을 활용한
          조명과 분위기를 이용하는 방법도 있으며, 늦은 시각인만큼 일반적인 브런치 메뉴가 아닌
          특별하게 저녁 메뉴도 같이 조합해볼 수 있습니다. 이외에 오후 6시에 브런치를 준비하는 방법과
          그 특이한 점을 고려하는 방법입니다.
        </Typography.Summary>
      </Container>
      <Spacing height={19} />
      <Container>
        <VideoPlayer
          title="Brunch Life의 훌륭한 비주얼라이저!"
          description="하루키드의 Brunch Life가 궁금하다면 유튜브에서 감상하세요.
소소하고 잔잔한 감성을 느끼며, 일상의 여유를 찾으세요!"
          src="https://www.youtube.com/watch?v=CL8dL-hKa38"
          embedSrc="https://www.youtube.com/embed/CL8dL-hKa38?si=x9BDg1UXPDqyEfHc"
        />
      </Container>
      <Spacing height={29} />
      <Container>
        <Track trackNumber={2} trackName="Brunch Life" />
      </Container>
      <Spacing height={12} />
      <TrackImage imgPath={BrunchLifeCover} />
      <Spacing height={31.95} />
      <Container>
        <Divider height={2.221} backgroundColor="#f5f5f5" />
      </Container>
      <Spacing height={14.83} />
      <Container>
        <Lyric
          title="Hook"
          description="아주 멀리 걷지는 않아도 좋아
머리 위로 뚝 떨어지는
빛의 각도는 열한시
여유를 한모금 해
딱 좋은 이 기분
포만감에서 넘어와
뭐든 구워 버터를 가득
커피는 차갑게"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Verse"
          description="몇 시에 잠들었는지 (몰라!)
푹 잔 게 분명하지
눈은 번쩍
머리 속에 꽉 찬 허기
단어 조합이 웃기지만
이게 나의 미라클 모닝
커튼 호쾌하게 swing
창문은 30분쯤 열어둔 채
뭐든 팬 위에 올려둔 뒤에
기다려 좀 더 바삭해질 테니까
해가 잔뜩 뜨거워지기 전에
복잡한 머리를 꺼내놓고
일광건조를 해야겠어
아주 멀리까지 갈 필요도 없지
나는 그저 절반쯤의 소화를 원해
we go hard
치열했던 어제밤을 위로해
배불리 먹고 실컷 웃다
떠들 시간이 필요해 너와 나에겐"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="아주 멀리 걷지는 않아도 좋아
머리 위로 뚝 떨어지는
빛의 각도는 열한시
여유를 한모금 해
딱 좋은 이 기분
포만감에서 넘어와
뭐든 구워 버터를 가득
커피는 차갑게"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Bridge"
          description="너와 나,
늦은 아침식사 같았으면 해
허기 앞에서도
우리 결코 조급하지 않기로 해
레이백이 너와 나의 패시브
조금 타도 괜찮거든 뭐 어때
Oasis 틀어둬 입안엔 얼음
Today is gonna be the day we love"
        />
        <Spacing height={23.45} />
        <Divider height={2.223} />
        <Spacing height={16.83} />
        <Lyric
          title="Hook"
          description="아주 멀리 걷지는 않아도 좋아
머리 위로 뚝 떨어지는
빛의 각도는 열한시
여유를 한모금 해
딱 좋은 이 기분
포만감에서 넘어와
뭐든 구워 버터를 가득
커피는 차갑게"
        />
      </Container>
      <Spacing height={42.5} />
      <AboutTrack
        description={[
          'Lyrics by Haru Kid\nComposed by Haru Kid, qjarn Arranged by qjarn\nMixed by Song Eunsuk\nMastered by (성지훈) Francis Jihoon Seong, (류경민) Allen Ryu at JFS Mastering',
          '저에게 미라클 모닝은 11시에 일어나서 아점을 먹는 것인데요, 한번 따라해보실 생각이 있으실까요.',
        ]}
      />
      <Spacing height={29} />
      <AboutWiki
        artistImagePath={Jose}
        artist="Jose A. Bock"
        sub="푸드파이터"
        description={
          <>
            이 글은 공동 작성자 <span>Jose A. Bock</span> 호세 에이 복은 세계 각국의 브런치
            레스토랑에서 열리는 핫도그 푸드파이팅 대회에 참가하는 전문가입니다. 태평양의 작은 고릴라
            섬에서 태어나 자란 그는 "핫도그 고릴라"라는 별명으로 불리며, 먹을 것에 대한 열정으로
            세계적으로 유명한 푸드파이터입니다. 현재 그는 핫도그 토너먼트에서 가장 유명한 인물로
            알려져 있습니다.
          </>
        }
        category="조리"
      />
      <Spacing height={24} />
      <Container>
        <Recommendation />
      </Container>
      <AudioPlayer src={BrunchLifeAudio} title="2. 하루키드 (Haru Kid) - Brunch Life" />
    </>
  );
};
