import styles from './HomeSearch.module.css';

import SpotifyVisit from '../assets/spotify-visit.png';

export const HomeSearch = () => {
  return (
    <div className={styles.container}>
      <a href="https://open.spotify.com/artist/79Hx3llVFe5RtRJAosF3MW" target="_blank">
        <img src={SpotifyVisit} alt="스포티파이 방문" width={316} height={24} />
      </a>
    </div>
  );
};
