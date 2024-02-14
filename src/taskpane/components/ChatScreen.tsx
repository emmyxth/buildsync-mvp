import React, { Component } from 'react';
import { UserChatMessage, BotChatMessage } from '../types/ChatMessageTypes';
import { UserChatBubble, BotChatBubble } from './ChatBubbles';

type State = {
  userChatMessages: UserChatMessage[];
  botChatMessages: BotChatMessage[];
  newMessage: string; // Added to handle the text input for new messages
};

export class ChatScreen extends Component<{}, State> {
  state: State = {
    userChatMessages: [
      // Initial user messages if any
    ],
    botChatMessages: [
      // Initial bot messages if any
    ],
    newMessage: '', // Initial state for the text input
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newMessage: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle message submission
    // For simplicity, adding the message to userChatMessages
    if (this.state.newMessage.trim()) {
      this.setState(prevState => ({
        userChatMessages: [...prevState.userChatMessages, {
          message: prevState.newMessage,
          feedback: '',
          transcription: '',
        }],
        newMessage: '', // Clear input field after submission
      }));
    }
  };

  render() {
    return (
      <div>
        <div className="chatWindow">
          {this.state.userChatMessages.map((msg, index) => (
            <UserChatBubble key={`userMsg-${index}`} message={msg.message} />
          ))}
          {this.state.botChatMessages.map((msg, index) => (
            <BotChatBubble key={`botMsg-${index}`} message={msg.message} />
          ))}
        </div>
        <form onSubmit={this.handleSubmit} className="messageForm">
          <input
            type="text"
            value={this.state.newMessage}
            onChange={this.handleInputChange}
            placeholder="Type a message..."
            className="messageInput"
          />
          <button type="submit" className="sendButton">Send</button>
        </form>
      </div>
    );
  }
}
