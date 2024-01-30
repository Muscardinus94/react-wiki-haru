import { ReactNode } from 'react';
import { Track } from './components/Track.tsx';

import Soccer from './assets/soccer.png';
import Brunch from './assets/brunch.png';
import BathHouse from './assets/bathhouse.png';
import Student from './assets/student.png';

import TimeKiller from './assets/time-killer.png';
import MintCondition from './assets/mint-condition.png';
import MartInvader from './assets/mart-invader.png';
import ThreeTwoOne from './assets/three-two-one.png';

import More from './assets/more.png';
import MartInvaderTrack from './assets/mart-invader-track.png';

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

export type Video = Omit<Track, 'path'> & {
  url: string;
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
    trackNameKr: '오후 6시에 브런치 만드는 법',
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

export const MUSIC_VIDEO_INFORMATION: Video[] = [
  {
    url: 'https://youtu.be/JnTCcq5XgCM?si=FqYTHDJsOzzHWlP-',
    trackNumber: 1,
    trackNameKr: '나른한 하루를 완벽하게 보내는 법',
    trackNameEn: 'time killer',
    imgPath: TimeKiller,
  },
  {
    url: 'https://youtu.be/ucl8cQD7Ckw?si=jiV6sjxPu8-G6UEx',
    trackNumber: 2,
    trackNameKr: '기분 ‘완전 민트’로 유지하는 법',
    trackNameEn: '민트컨디션',
    imgPath: MintCondition,
  },
  {
    url: 'https://youtu.be/rXv3soRlOa4?si=Jc7nT5LyOFEUamxy',
    trackNumber: 3,
    trackNameKr: '마트를 무자비하게 침략하는 법',
    trackNameEn: 'Mart Invader',
    imgPath: MartInvader,
  },
  {
    url: 'https://youtu.be/lNPjXQWfGMo?si=IAlcLEq3LN7bw7xG',
    trackNumber: 4,
    trackNameKr: '자유로운 기분을 내기위한 달리기 방법',
    trackNameEn: '3, 2, 1',
    imgPath: ThreeTwoOne,
  },
];

export const RECOMMEND_TRACK_INFROMATION: Video[] = [
  {
    url: 'https://open.spotify.com/album/78KZXAcHeNDIAmuZcbzUy7?si=l4cj270AQRCW-dlc2yLN2A',
    trackNumber: 1,
    trackNameKr: '평범한 일상을 더욱 즐기는 법',
    trackNameEn: 'more!',
    imgPath: More,
  },
  {
    url: 'https://open.spotify.com/album/3Bs21byZJkNJvn1JgTsuKB?si=GiUbWa0dSgq-GzKQ7A_UEQ',
    trackNumber: 2,
    trackNameKr: '일상 속 소소한 재미로 최대의 재미를 뽑는 법',
    trackNameEn: 'Mart Invader',
    imgPath: MartInvaderTrack,
  },
];

export const DETAIL_DATA: Record<TrackPath, ReactNode> = {
  'bench-warmer': <BenchWarmer />,
  'brunch-life': <BrunchLife />,
  '39-degrees': <ThirtyNineDegrees />,
  'let-the-camera-roll': <LetTheCameraRoll />,
};
