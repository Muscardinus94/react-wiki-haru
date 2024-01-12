import { PropsWithChildren } from 'react';

import styles from './Container.module.css';

type Props = {
  fullWidth?: boolean;
};

export const Container = ({ fullWidth = false, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={styles.container}
      style={{
        padding: fullWidth ? '0' : undefined,
      }}
    >
      {children}
    </div>
  );
};
