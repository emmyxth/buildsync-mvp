import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
// Assuming you've updated these types to include a timestamp
import { UserChatMessage, BotChatMessage } from '../types/ChatMessageTypes';
import { UserChatBubble, BotChatBubble } from './ChatBubbles';

const ChatScreen: React.FC = () => {
  const [userChatMessages, setUserChatMessages] = useState<UserChatMessage[]>([]);
  const [botChatMessages, setBotChatMessages] = useState<BotChatMessage[]>([
    { message: "Welcome! How can I help?", timestamp: new Date().getTime() },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newMessage.trim()) {
      const timestamp = new Date().getTime();
      setUserChatMessages(prevMessages => [...prevMessages, { message: newMessage, feedback: '', transcription: '', timestamp }]);
      // Simulate bot response with a delay or immediately with a timestamp
      // Here we just add a new message to userChatMessages for simplicity
      setNewMessage('');
    }
  };

  // Merge and sort messages by timestamp before rendering
  const mergedMessages = [...userChatMessages, ...botChatMessages].sort((a, b) => a.timestamp - b.timestamp);

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2 }}>
        {mergedMessages.map((msg, index) => (
          msg.hasOwnProperty('feedback') // Assuming feedback is unique to user messages
            ? <UserChatBubble key={`userMsg-${index}`} message={msg.message} />
            : <BotChatBubble key={`botMsg-${index}`} message={msg.message} />
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
