import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './components/Layout.tsx';

const Intro = lazy(() => import('./pages/Intro.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const TrackDetail = lazy(() => import('./pages/TrackDetail.tsx'));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Intro />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/track/:id',
        element: <TrackDetail />,
      },
    ],
  },
]);
