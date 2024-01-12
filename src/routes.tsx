import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { TrackDetail } from './pages/TrackDetail.tsx';

export const router = createBrowserRouter([
  {
    path: '/react-wiki-haru/',
    element: <Layout />,
    children: [
      {
        path: '/react-wiki-haru/',
        element: <Home />,
      },
      {
        path: '/react-wiki-haru//track/:id',
        element: <TrackDetail />,
      },
    ],
  },
]);
