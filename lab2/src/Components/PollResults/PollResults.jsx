import React from 'react';
import { Box, LinearProgress, Typography, Rating } from '@mui/material';

const PollResults = () => {
  return (
    <Box sx={{ width: '400px', padding: '16px' }}>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating name="read-only" value={5} readOnly />
        <Box sx={{ width: '100%', mx: 1 }}>
          <LinearProgress variant="determinate" value={22.3} />
        </Box>
        <Typography variant="body2">22.3%</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating name="read-only" value={4} readOnly />
        <Box sx={{ width: '100%', mx: 1 }}>
          <LinearProgress variant="determinate" value={61.2} />
        </Box>
        <Typography variant="body2">61.2%</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating name="read-only" value={3} readOnly />
        <Box sx={{ width: '100%', mx: 1 }}>
          <LinearProgress variant="determinate" value={12.4} />
        </Box>
        <Typography variant="body2">12.4%</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
      <Rating name="read-only" value={2} readOnly />
        <Box sx={{ width: '100%', mx: 1 }}>
          <LinearProgress  variant="determinate" value={4.1} />
        </Box>
        <Typography variant="body2">4.1%</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
      <Rating name="read-only" value={1} readOnly />
        <Box sx={{ width: '100%', mx: 1 }}>
          <LinearProgress  variant="determinate" value={0.1} />
        </Box>
        <Typography variant="body2">0.1%</Typography>
      </Box>
    </Box>
  );
};

export default PollResults;
