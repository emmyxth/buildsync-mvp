import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { BuildingCode } from "../types/BuildingCodeTypes"

// Adjust the props to include description and refs
const BuildingCodeExtract: React.FC<BuildingCode> = ({ title, description, refs, index }) => {
  return (
    <Paper style={{ flex: '0 0 auto', margin: '5px', maxWidth: '44vw', height: '45vh', overflowY: 'auto' }} data-index={index}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>{description}</Typography>
      <Box style={{ marginTop: '10px' }}>
        {refs.map((ref, idx) => (
          // Assuming each ref is an object with a single key-value pair
          <Typography key={idx} variant="body2">{Object.keys(ref)[0]}: {ref[Object.keys(ref)[0]]}</Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default BuildingCodeExtract;