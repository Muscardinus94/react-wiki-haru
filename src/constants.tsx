import { ReactNode } from 'react';
import { Track } from './components/Track.tsx';

import Soccer from './assets/soccer.png';
import Brunch from './assets/brunch.png';
import BathHouse from './assets/bathhouse.png';
import Student from './assets/student.png';
import { BenchWarmer } from './components/BenchWarmer.tsx';
import { BrunchLife } from './components/BrunchLife.tsx';
import { ThirtyNineDegrees } from './components/ThirtyNineDegrees.tsx';
import { LetTheCameraRoll } from './components/LetTheCameraRoll.tsx';

export type TrackPath = 'bench-warmer' | 'brunch-life' | '39-degrees' | 'let-the-camera-roll';

export type Track = {
  path: TrackPath;
  trackNumber: number;
  trackNameKr: string;
  trackNameEn: string;
  imgPath: string;
};

export const TRACK_INFORMATION: Track[] = [
  {
    path: 'bench-warmer',
    trackNumber: 1,
    trackNameKr: '축구장 벤치에서 감독과 기싸움 하는 법',
    trackNameEn: 'Bench Warmer',
    imgPath: Soccer,
  },
  {
    path: 'brunch-life',
    trackNumber: 2,
    trackNameKr: '축구장 벤치에서 감독과 기싸움 하는 법',
    trackNameEn: 'Brunch Life',
    imgPath: Brunch,
  },
  {
    path: '39-degrees',
    trackNumber: 3,
    trackNameKr: '목욕탕 온탕에서 옆사람보다 오래 버티는 법',
    trackNameEn: '39 degrees',
    imgPath: BathHouse,
  },
  {
    path: 'let-the-camera-roll',
    trackNumber: 4,
    trackNameKr: '영화 안 보고 본 척 하는 법',
    trackNameEn: 'Let The Camera Roll',
    imgPath: Student,
  },
];

export const DETAIL_DATA: Record<TrackPath, ReactNode> = {
  'bench-warmer': <BenchWarmer />,
  'brunch-life': <BrunchLife />,
  '39-degrees': <ThirtyNineDegrees />,
  'let-the-camera-roll': <LetTheCameraRoll />,
};
