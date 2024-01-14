import styles from './AboutWiki.module.css';
import { Spacing } from './Spacing.tsx';
import Badge from '../assets/badge.svg';
import { Container } from './Container.tsx';

type Props = {
  artist: string;
  sub: string;
  description: string;
  category: string;
  artistImagePath: string;
};

export const AboutWiki = ({ artist, sub, description, category, artistImagePath }: Props) => {
  return (
    <div>
      <div className={styles.title}>이 위키하루에 대하여</div>
      <Spacing height={17} />
      <Container>
        <div className={styles['artist-container']}>
          <a className={styles.avatar} href="https://www.instagram.com/haru.kid/" target="_blank">
            <img src={artistImagePath} alt="artist" width={55} height={55} />
            <img src={Badge} alt="badge" className={styles.badge} width={15} height={15} />
          </a>
          <div>
            <p className={styles['artist-title']}>공동 작성자:</p>
            <p className={styles['artist-name']}>{artist}</p>
            <p className={styles['artist-sub']}>{sub}</p>
          </div>
        </div>
      </Container>
      <Spacing height={30} />
      <Container>
        <p className={styles.description}>{description}</p>
      </Container>
      <Spacing height={36} />
      <Container>
        <p className={styles.description}>글 카테고리: {category}</p>
      </Container>
    </div>
  );
};
