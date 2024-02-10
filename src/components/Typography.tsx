import { ComponentProps, Fragment, PropsWithChildren } from 'react';

import styles from './Typography.module.css';

type TypographyProps = PropsWithChildren<ComponentProps<'p'>>;

const Typography = ({ children, ...props }: TypographyProps) => {
  return <p {...props}>{children}</p>;
};

type BreadCrumbProps = {
  list: string[];
} & TypographyProps;

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

const HeadLine = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 className={styles.headline} {...props}>
      {children}
    </h1>
  );
};

const Author = ({ children, ...props }: TypographyProps) => {
  return (
    <h5 className={styles.author} {...props}>
      공동 작성자 <span>{children}</span>
    </h5>
  );
};

const Summary = ({ children, ...props }: TypographyProps) => {
  return (
    <p className={styles.summary} {...props}>
      {children}
    </p>
  );
};

const HomeTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 className={styles['home-title']} {...props}>
      {children}
    </h1>
  );
};

const HomeSubTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <h4 className={styles['home-sub-title']} {...props}>
      {children}
    </h4>
  );
};

const ThumbnailTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <h3 className={styles['thumbnail-title']} {...props}>
      {children}
    </h3>
  );
};

const VideoText = ({ children, ...props }: TypographyProps) => {
  return (
    <p className={styles['video-text']} {...props}>
      {children}
    </p>
  );
};

export default Object.assign({}, Typography, {
  BreadCrumb,
  HeadLine,
  Author,
  Summary,
  HomeTitle,
  HomeSubTitle,
  ThumbnailTitle,
  VideoText,
});
