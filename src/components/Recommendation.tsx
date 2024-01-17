import styles from './Recommendation.module.css';

export const Recommendation = () => {
  return (
    <a
      className={styles['link-button']}
      href="https://www.youtube.com/@harukid1704?sub_confirmation=1"
      target="_blank"
    >
      이 글이 도움이 되었나요?
    </a>
  );
};
