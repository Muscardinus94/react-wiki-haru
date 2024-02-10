import ReactDom from 'react-dom';
import clsx from 'clsx';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

import styles from './AudioPlayer.module.css';
import audioClose from '../assets/audio-close.svg';
import Playing from '../assets/playing.svg';
import Paused from '../assets/paused.svg';
import { Spacing } from './Spacing.tsx';
import Typography from './Typography.tsx';
import { useAudio } from '../useAudio.tsx';

type Props = {
  src: string;
  title: string;
};

const Audio = ({ src, title }: Props) => {
  const [open, setOpen] = useState(true);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const { load, togglePlayPause, playing, progressPercent, seek, duration, cleanup } = useAudio();

  const close = () => {
    setOpen(false);
    cleanup();
  };

  const toggle = () => {
    togglePlayPause();
  };

  const onProgressBarClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const progressX = progressBarRef?.current?.getBoundingClientRect().x ?? 0;
    const progressWidth = progressBarRef?.current?.getBoundingClientRect().width ?? 0;
    const mouseX = e.clientX;
    const gap = mouseX - progressX;

    seek(duration * (gap / progressWidth));
  };

  useEffect(() => {
    if (open) {
      load(src, {
        html5: true,
      });
    }
  }, [open, load, src]);

  return (
    <aside className={clsx([styles.container, !open && styles['slide-down']])}>
      <div className={styles['top-border']} />
      <Spacing height={6} />
      <div className={styles.close}>
        <img
          src={audioClose}
          alt="닫기"
          width={26}
          height={26}
          className={styles['close-icon']}
          onClick={() => {
            close();
          }}
        />
      </div>
      <Spacing height={3} />
      <div className={styles['title-container']}>
        <Typography.Summary className={clsx([styles['title'], playing && styles['animate-title']])}>
          {title}
        </Typography.Summary>
        <Typography.Summary className={clsx([styles['title'], playing && styles['animate-title']])}>
          {playing && title}
        </Typography.Summary>
      </div>
      <Spacing height={11} />
      <div ref={progressBarRef} className={styles['progress-bar']} onClick={onProgressBarClick}>
        <div className={clsx([styles.progress])} style={{ width: `${progressPercent}%` }}>
          <span className={styles.scroller} />
        </div>
      </div>
      <Spacing height={13} />
      <div className={styles.status}>
        <img
          src={playing ? Playing : Paused}
          alt="재생 상태"
          width={34}
          height={34}
          onClick={toggle}
        />
      </div>
      <Spacing height={12} />
    </aside>
  );
};

export const AudioPlayer = ({ title, src }: Props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Audio title={title} src={src} />,
        document.getElementById('audio-player')!
      )}
    </>
  );
};
