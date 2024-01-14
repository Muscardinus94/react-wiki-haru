import styles from './HighLight.module.css';
import { PropsWithChildren } from 'react';

type Props = {
  title: string;
};

export const HighLight = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.tip}>
      <span>{title}: </span>
      {children}
    </div>
  );
};
