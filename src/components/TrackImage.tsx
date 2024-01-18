import styles from './TrackImage.module.css';

type Props = {
  imgPath: string;
};

export const TrackImage = ({ imgPath }: Props) => {
  return (
    <img
      className={styles.container}
      src={imgPath}
      width={800}
      height={650.664}
      alt="album-cover"
    />
  );
};
