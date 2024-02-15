import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BuildingCodeExtract from './BuildingCodeExtract';
import { BuildingCode } from "../types/BuildingCodeTypes"

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BuildingCodeScreen = () => {
  const dummyBuildingCodes: BuildingCode[] = [
    {
      title: "Building Code 1",
      description: "Description of Building Code 1",
      refs: [{ "Section 1": "Details of Section 1" }],
      index: 0
    },
    {
      title: "Building Code 2",
      description: "Description of Building Code 2",
      refs: [{ "Section 2": "Details of Section 2" }],
      index: 1
    },
    {
      title: "Building Code 3",
      description: "Description of Building Code 3",
      refs: [{ "Section 3": "Details of Section 3" }],
      index: 2
    }
  ];

  return (
    <div style={{ display: 'flex', overflowX: 'scroll', padding: "5%" }}>
      {dummyBuildingCodes.map((code, index) => (
        <BuildingCodeExtract key={index} title={code.title} index={code.index} description={code.description} refs={code.refs} />
      ))}
    </div>
  );
};

export default BuildingCodeScreen;