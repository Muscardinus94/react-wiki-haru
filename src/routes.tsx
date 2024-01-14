import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { TrackDetail } from './pages/TrackDetail.tsx';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
