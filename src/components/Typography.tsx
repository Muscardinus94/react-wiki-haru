import { Fragment, PropsWithChildren } from 'react';

import styles from './Typography.module.css';

const Typography = ({ children }: PropsWithChildren) => {
  return <p>{children}</p>;
};

type BreadCrumbProps = {
  list: string[];
};

const BreadCrumb = ({ list }: BreadCrumbProps) => {
  return (
    <div className={styles['bread-crumb-container']}>
      {list.map((text, index) => (
        <Fragment key={index}>
          <span>{text}</span>
          {list.length !== index + 1 && <span>{'>'}</span>}
        </Fragment>
      ))}
    </div>
  );
};

const HeadLine = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.headline}>{children}</h1>;
};

const Author = ({ children }: PropsWithChildren) => {
  return (
    <h5 className={styles.author}>
      공동 작성자 <span>{children}</span>
    </h5>
  );
};

const Summary = ({ children }: PropsWithChildren) => {
  return <p className={styles.summary}>{children}</p>;
};

const HomeTitle = ({ children }: PropsWithChildren) => {
  return <h1 className={styles['home-title']}>{children}</h1>;
};

const HomeSubTitle = ({ children }: PropsWithChildren) => {
  return <h4 className={styles['home-sub-title']}>{children}</h4>;
};

const ThumbnailTitle = ({ children }: PropsWithChildren) => {
  return <h3 className={styles['thumbnail-title']}>{children}</h3>;
};

export default Object.assign({}, Typography, {
  BreadCrumb,
  HeadLine,
  Author,
  Summary,
  HomeTitle,
  HomeSubTitle,
  ThumbnailTitle,
});
