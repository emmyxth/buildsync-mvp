import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BuildingCodeExtract from './BuildingCodeExtract';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BuildingCodeScreen = () => {
  const cards = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  ];
  return (
    <div style={{ display: 'flex', overflowX: 'scroll', padding: "5%" }}>
      {cards.map((title, index) => (
        <BuildingCodeExtract title={title} index={index} />
      ))}
    </div>
  );
};

export default BuildingCodeScreen;