import styles from './Divider.module.css';

type Props = {
  height?: number;
  backgroundColor?: string;
};

export const Divider = ({ height = 1, backgroundColor = '#f5f5f5' }: Props) => {
  return <div className={styles.container} style={{ height, backgroundColor }} />;
};
