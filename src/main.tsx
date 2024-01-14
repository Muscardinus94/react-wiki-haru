import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);
