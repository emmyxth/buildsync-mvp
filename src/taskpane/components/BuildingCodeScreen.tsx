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
      title: "ASCE/SEI 7",
      description: "12.7.3 Structural Modeling A mathematical model of the structure shall be constructed for the purpose of determining member forces and structure displacements resulting from applied loads and any imposed displacements or P-delta effects. The model shall include the stiffness and strength of elements that are significant to the distribution of forces and deformations in the structure and represent the spatial distribution of mass and stiffness throughout the structure. In addition, the model shall comply with the following: a. Stiffness properties of concrete and masonry elements shall consider the effects of cracked sections. b. For steel moment frame systems, the contribution of panel zone deformations to overall story drift shall be included. Structures that have horizontal structural irregularity Type 1a, 1b, 4, or 5 of Table 12.3-1 shall be analyzed using a 3-D representation. Where a 3-D model is used, a minimum of three dynamic degrees of freedom consisting of translation in two orthogonal plan directions and rotation about the vertical axis shall be included at each level of the structure. Where the diaphragms have not been classified as rigid or flexible in accordance with Section 12.3.1, the model shall include representation of the diaphragm’s stiffness characteristics and such additional dynamic degrees of freedom as are required to account for the participation of the diaphragm in the structure’s dynamic response.",
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