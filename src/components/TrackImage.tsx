import styles from './TrackImage.module.css';

type Props = {
  imgPath: string;
};

export const TrackImage = ({ imgPath }: Props) => {
  return <img className={styles.container} src={imgPath} width="100%" alt="album-cover" />;
};
