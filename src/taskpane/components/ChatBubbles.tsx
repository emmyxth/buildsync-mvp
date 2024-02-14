import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface ChatBubbleProps {
  message: string;
}

export const UserChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <Paper elevation={3} style={{ margin: '10px', padding: '10px', backgroundColor: '#90caf9', maxWidth: '70%', alignSelf: 'flex-end' }}>
      <Typography variant="body1">{message}</Typography>
    </Paper>
  );
};

export const BotChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <Paper elevation={3} style={{ margin: '10px', padding: '10px', backgroundColor: '#eeeeee', maxWidth: '70%', alignSelf: 'flex-start' }}>
      <Typography variant="body1">{message}</Typography>
    </Paper>
  );
};
