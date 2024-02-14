import React from 'react';
import { Paper, Typography } from '@mui/material';

const BuildingCodeExtract: React.FC<{ title: string, index: number}> = ({ title, index}) => {
  return (
    <Paper style={{ flex: '0 0 auto', margin: '5px', maxWidth: '40vw', height: '45vh', overflowY: 'auto' }} data-index={index}>
      <Typography variant="h5">{title}</Typography>
    </Paper>
  );
};

export default BuildingCodeExtract;
