import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import parse, { domToReact, Element } from 'html-react-parser';
import { BuildingCode } from "../types/BuildingCodeTypes";


// Function to replace specific words with links
// const replaceWordsWithLinks = (node, refs) => {
//     if (node.type === 'text') {
//       const text = node.data;
//       let wordsToLinks = {
//         'Seismic': '/seismic',
//         'Wind': '/wind',
//         'Earthquake': '/earthquake',
//       };
  
//       // Add refs to the wordsToLinks mapping
//       refs.forEach(ref => {
//         const key = Object.keys(ref)[0]; // Assuming each ref has only one key
//         const value = ref[key];
//         wordsToLinks[key] = value; // Assuming the value is the URL or path you want to link to
//       });
  
//       const replacedText = Object.keys(wordsToLinks).reduce((acc, word) => {
//         const regex = new RegExp(`\\b${word}\\b`, 'gi');
//         const replacement = `<a href="${wordsToLinks[word]}">${word}</a>`;
//         return acc.replace(regex, replacement);
//       }, text);
//       return parse(replacedText);
//     }
//     return node;
//   };

const BuildingCodeExtract: React.FC<BuildingCode> = ({ title, description, index }) => {
  // Parse the description and replace words with links
//   const parsedDescription = parse(description, {
//     replace: (domNode) => {
//       if (domNode.type === 'text') {
//         return replaceWordsWithLinks(domNode, refs);
//       }
//       return domNode;
//     },
//   });
// const customParseOptions = {
//     replace: domNode => {
//       if (domNode.type === 'tag') {
//         switch (domNode.name) {
//           case 'p':
//             return <p style={{ fontSize: '16px', fontFamily: 'Arial' }}>{domToReact(domNode.children)}</p>;
//           case 'h2':
//             return <h2 style={{ fontSize: '24px', fontFamily: 'Georgia' }}>{domToReact(domNode.children)}</h2>;
//           case 'h3':
//             return <h3 style={{ fontSize: '20px', fontFamily: 'Times New Roman' }}>{domToReact(domNode.children)}</h3>;
//           default:
//             return domToReact(domNode.children);
//         }
//       }
//       return domToReact(domNode.children);
//     },
//   };
    const parsedDescription = parse(description);


  return (
    <Paper style={{ flex: '0 0 auto', margin: '5px', maxWidth: '70vw', height: '45vh', overflowY: 'auto' }} data-index={index}>
      <div style={{padding: "5%"}}>
        <Typography variant="h3" style={{ fontSize: 20, color: 'blue', fontStyle: 'bold' }}>{title}</Typography>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
            {parsedDescription}
        </Typography>
      </div>
      
        {/* <Box style={{ marginTop: '10px' }}>
        {refs.map((ref, idx) => (
          <Typography key={idx} variant="caption">{Object.keys(ref)[0]}: {ref[Object.keys(ref)[0]]}</Typography>
        ))}
      </Box> */}
    </Paper>
  );
};

export default BuildingCodeExtract;