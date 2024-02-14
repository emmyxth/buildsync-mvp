import React from 'react';
// import './ChatBubbles.css'; // Importing CSS for styling

interface ChatBubbleProps {
  message: string;
}

export const UserChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return <div className="userChatBubble">{message}</div>;
};

export const BotChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return <div className="botChatBubble">{message}</div>;
};
