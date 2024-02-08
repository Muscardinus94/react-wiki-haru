import styles from './VideoPlayer.module.css';
import Typography from './Typography.tsx';
import { Spacing } from './Spacing.tsx';

type Props = {
  title: string;
  description: string;
  src: string;
  embedSrc: string;
};

export const VideoPlayer = ({ title, description, src, embedSrc }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['padding-container']}>
        <Typography.Summary>{title}</Typography.Summary>
      </div>
      <div className={styles.divider} />
      <Spacing height={9} />
      <div className={styles['padding-container']}>
        <Typography.VideoText>{description}</Typography.VideoText>
      </div>
      <Spacing height={12} />
      <div className={styles['iframe-container']}>
        <iframe
          width="80%"
          src={embedSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <Spacing height={16} />
      <div className={styles['link-container']}>
        <Typography.VideoText>Presented by SEL</Typography.VideoText>
        <a href={src} className={styles.link} target="_blank">
          <span>열기</span>
          <span>{'>'}</span>
        </a>
      </div>
    </div>
  );
};
