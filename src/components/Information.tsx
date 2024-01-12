import styles from './Information.module.css';

import Expert from '../assets/expert.png';
import Trust from '../assets/trust.png';

export const Information = () => {
  return (
    <div className={styles.container}>
      <h2>위키하루는 신뢰도 높은 자료와 전문가 의견이 종합된 정보를 제공합니다.</h2>
      <p>
        위키하루는 2005년부터 전세계 수억명의 사 람들에게 크고 작은 문제 해결을 위한 지식 가 이드를
        제공하고 있습니다. 신뢰할 수 있는 자 료와 재미있는 콘텐츠 작성을 위해 자격을 갖 춘 전문가,
        검증된 조사원, 커뮤니티가 협업하 고 있습니다.
      </p>
      <div className={styles.footer}>
        <div>
          <img src={Expert} alt="expert" width={66.534} height={66.534} />
          <div className={styles['footer-description-container']}>
            <div>
              <h6>검증된</h6>
              <p>학술적으로 검증된 90,000 개의 글</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Trust} alt="expert" width={66.534} height={66.534} />
          <div className={styles['footer-description-container']}>
            <div>
              <h6>신뢰성있는</h6>
              <p>500명의 전문가가 참여한 30,000개의 글</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
