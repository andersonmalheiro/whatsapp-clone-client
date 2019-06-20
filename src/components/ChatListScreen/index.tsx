import React from 'react';
import ChatNavbar from './ChatNavbar';
import ChatList from './ChatList';

const ChatListScreen: React.FC = () => (
  <div>
    <ChatNavbar />
    <ChatList />
  </div>
);

export default ChatListScreen;
