import styles from './Review.module.css';

type Props = {
  image: string;
  date: string;
  description: string;
  name: string;
  job: string;
};

export const Review = ({ image, date, description, name, job }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="boi_b" width={90} height={90} className={styles.avatar} />
        <span className={styles.date}>{date}</span>
        <p className={styles.description}>{description}</p>
        <p className={styles.footer}>
          -{name}
          <br />
          {job}
        </p>
      </div>
    </div>
  );
};
