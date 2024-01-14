import { useNavigate, useParams } from 'react-router-dom';

import { DETAIL_DATA, TrackPath } from '../constants.tsx';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: TrackPath }>();

  if (!DETAIL_DATA[id ?? 'bench-warmer']) {
    navigate('/');
  }

  return <div>{DETAIL_DATA[id ?? 'bench-warmer'] ?? null}</div>;
};
