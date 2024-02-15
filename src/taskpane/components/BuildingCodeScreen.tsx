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
const dummyBuildingCodes = [{
    title: "ASCE 7",
    description: `
<h3>2.3.1 Basic Combinations</h3>
<p>Structures, components, and foundations shall be designed so that their design strength equals or exceeds the effects of the factored loads in the following combinations. Effects of one or more loads not acting shall be considered. Seismic load effects shall be combined loads, in accordance with Section 2.3.6. The most unfavorable effects from wind loads, tornado loads, and earthquake loads shall be considered, where appropriate, but they need not be assumed to act simultaneously. Refer to Sections 1.4, 2.3.6, 12.4, and 12.4.3 for the specific definition of the earthquake load effect, E. Each relevant strength limit state shall be investigated.</p>

<ol>
  <li>1a. 1.4D</li>
  <li>2a. 1.2D + 1.6L + (0.5Lr or 0.3S or 0.5R)</li>
  <li>3a. 1.2D + (1.6Lr or 1.0S or 1.6R) + (L or 0.5W)</li>
  <li>4a. 1.2D + 1.0W (or W<sub>r</sub>) + L + (0.5L<sub>r</sub> or 0.3S or 0.5R)</li>
  <li>5a. 0.9D + 1.0W (or W<sub>r</sub>)</li>
</ol>

<h3>EXCEPTIONS:</h3>
<ol>
  <li>The load factor on L in combinations 3a and 4a is permitted to equal 0.5 for all occupancies in which L<sub>0</sub>, in Chapter 4, Table 4.3-1, is less than or equal to 100 psf (4.78 kN/m<sup>2</sup>), with the exception of garages or areas occupied as places of public assembly.</li>
  <li>In combinations 2a and 4a, the companion load, S, shall be taken as either the flat roof snow load (p<sub>f</sub>) or the sloped roof snow load (p<sub>s</sub>).</li>
  <li>Where using W<sub>r</sub> in combination 4a, (0.5L<sub>r</sub> or 0.3S or 0.5R) is permitted to be replaced with 0.5 (L<sub>r</sub> or R).</li>
</ol>

<p>Where fluid loads, F, are present, they shall be included with the same load factor as dead load, D, in combinations 1a through 4a. Where loads, H, are present, they shall be included as follows:</p>
<ol>
  <li>Where the effect of H adds to the principal load effect, include H with a load factor of 1.6;</li>
  <li>Where the effect of H resists the principal load effect, include H with a load factor of 0.9, where the load H is permanent, or a load factor of 0 for all other conditions.</li>
</ol>

<p>Each relevant strength limit state shall be investigated.</p>
    `,
    refs: [
      { "Sections 1.4,": "Definition of Earthquake Load Effect" },
      { "2.3.6,": "Combining Load Effects" },
      { "12.4,": "Wind Loads" },
    ],
    index: 1
  }, 
  {
    title: "ASCE 7",
    description: `
    <h3>2.3.2 Load Combinations Including Flood Load</h3>
    <p>When a structure is located in a flood zone (Section 5.3.1), the following load combinations shall be considered in addition to the basic combinations in Section 2.3.1:</p>
    <p>In V-Zones or Coastal A-Zones:</p>
    <ol>
      <li>4b. 1.2D + 1.0W + 2.0F<sub>a</sub> + L + (0.5L<sub>r</sub> or 0.3S or 0.5R)</li>
      <li>5b. 0.9D + 1.0W + 2.0F<sub>a</sub></li>
    </ol>
    <p>In noncoastal A-Zones:</p>
    <ol>
      <li>4b. 1.2D + 0.5W + 1.0F<sub>a</sub> + L + (0.5L<sub>r</sub> or 0.3S or 0.5R)</li>
      <li>5b. 0.9D + 0.5W + 1.0F<sub>a</sub></li>
    </ol>    
    `,
    refs: [
    ],
    index: 1
  }];

  return (
    <div style={{ display: 'flex', overflowX: 'scroll', padding: "5%" }}>
      {dummyBuildingCodes.map((code, index) => (
        <BuildingCodeExtract key={index} title={code.title} index={code.index} description={code.description} refs={code.refs} />
      ))}
    </div>
  );
};

export default BuildingCodeScreen;