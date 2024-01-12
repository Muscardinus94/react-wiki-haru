import styles from './AboutWiki.module.css';
import { Spacing } from './Spacing.tsx';
import Badge from '../assets/badge.svg';
import { Container } from './Container.tsx';

type Props = {
  artist: string;
  sub: string;
  category: string;
};

export const AboutWiki = ({ artist, sub, category }: Props) => {
  return (
    <div>
      <div className={styles.title}>이 위키하루에 대하여</div>
      <Spacing height={17} />
      <Container>
        <div className={styles['artist-container']}>
          <div className={styles.avatar}>
            <img src={Badge} alt="badge" className={styles.badge} width={15} height={15} />
          </div>
          <div>
            <p className={styles['artist-title']}>공동 작성자:</p>
            <p className={styles['artist-name']}>{artist}</p>
            <p className={styles['artist-sub']}>{sub}</p>
          </div>
        </div>
      </Container>
      <Spacing height={30} />
      <Container>
        <p className={styles.description}>
          이 글은 공동 작성자 Delbert E. Mclnnis 델버트 이 멕클니스는 전 세계적으로 유명한 심리
          전문의입니다. 10년 동안 한 인도 사원에서 수도승 생활을 하며 명상과 철학에 대한 깊은 이해를
          얻었습니다. 그리고 어느 날 갑자기 축구에 대한 열정을 불태우게 되었고, 축구장 벤치 심리
          전문가로서의 진로를 결정하였고 The Warm Bench라는 벤치 심리 전문 컨설팅 회사를
          설립하였습니다.
        </p>
      </Container>
      <Spacing height={36} />
      <Container>
        <p className={styles.description}>글 카테고리: {category}</p>
      </Container>
    </div>
  );
};
