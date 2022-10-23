import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

export default function CircularDeterminate({prosess}) {


  useEffect(() => {
    const timer = setInterval(() => {
      prosess >= 100 ? 0 : prosess
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [prosess]);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={prosess} />
    </Stack>
  )

}