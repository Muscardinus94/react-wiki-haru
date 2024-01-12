import styles from './Lyric.module.css';

type Props = {
  title: string;
  description: string;
};

export const Lyric = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <span className={styles.square} />
        <span className={styles.title}>{title}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
