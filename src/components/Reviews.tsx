import styles from './Reviews.module.css';
import { Review } from './Review.tsx';

import BoiB from '../assets/boi_b.png';
import Ebada from '../assets/ebada.png';

export const Reviews = () => {
  return (
    <div className={styles.container}>
      <h3>유용하고 쉬운 설명을 통해 독자들이 보다 쉽게 배울 수 있도록 돕습니다.</h3>
      <Review
        image={BoiB}
        date="2024년 01월 8일"
        description="“델피에로부터 시작된 슈퍼조커의 유구한 역사는 피레스 카예혼 후안마타를 거쳐 하루키드로 이어진다. ”"
        name="Boi B"
        job="한국 힙합 그룹 리듬파워의 리더, 래퍼"
      />
      <Review
        image={Ebada}
        date="2024년 01월 10일"
        description="“레트로 한 감성에 리듬감이 돋보이며, 하루키드만의 키치한 매력 또한 느껴지는 앨범이라고 생각합니다.”"
        name="이바다"
        job="한국 R&B 싱어송라이터"
      />
    </div>
  );
};
