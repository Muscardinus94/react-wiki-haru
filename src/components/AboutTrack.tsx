import styles from './AboutTrack.module.css';
import { Spacing } from './Spacing.tsx';
import { Container } from './Container.tsx';
import { HighLight } from './HighLight.tsx';

type Props = {
  description: string[];
  tip?: string;
};

export const AboutTrack = ({ description, tip }: Props) => {
  return (
    <div>
      <div className={styles.title}>이 트랙에 대하여</div>
      <Spacing height={20} />
      <ul>
        {description.map((v, index) => (
          <li key={index}>{v}</li>
        ))}
      </ul>
      {tip && (
        <Container>
          <HighLight title="팁">{tip}</HighLight>
        </Container>
      )}
    </div>
  );
};
