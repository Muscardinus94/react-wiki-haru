import { useRef, useState, useEffect } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

export const useAudio = () => {
  const frameRef = useRef<number>();
  const [pos, setPos] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const { getPosition, load, togglePlayPause, playing, duration, seek, stop, cleanup } =
    useAudioPlayer();

  useEffect(() => {
    const animate = () => {
      const position = getPosition();
      setPos(() => position);
      frameRef.current = requestAnimationFrame(animate);
      if (position === 0 || duration === 0) {
        setProgressPercent(0);
      } else {
        setProgressPercent((position * 100) / duration);
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition, duration, setProgressPercent]);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return { pos, load, togglePlayPause, playing, duration, progressPercent, seek, stop, cleanup };
};
