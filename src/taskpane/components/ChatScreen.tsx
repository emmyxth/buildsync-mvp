import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { UserChatMessage, BotChatMessage } from '../types/ChatMessageTypes';
import { UserChatBubble, BotChatBubble } from './ChatBubbles';

const ChatScreen: React.FC = () => {
  const [userChatMessages, setUserChatMessages] = useState<UserChatMessage[]>([]);
  const [botChatMessages, setBotChatMessages] = useState<BotChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newMessage.trim()) {
      setUserChatMessages(prevMessages => [...prevMessages, { message: newMessage, feedback: '', transcription: '' }]);
      setNewMessage('');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2 }}>
        {userChatMessages.map((msg, index) => (
          <UserChatBubble key={`userMsg-${index}`} message={msg.message} />
        ))}
        {botChatMessages.map((msg, index) => (
          <BotChatBubble key={`botMsg-${index}`} message={msg.message} />
        ))}
      </Box>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <TextField
          fullWidth
          variant="outlined"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ChatScreen;
