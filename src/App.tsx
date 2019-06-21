import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import ChatListScreen from './components/ChatListScreen';
import ChatRoomScreen from 'components/ChatRoomScreen';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/chats" component={ChatListScreen}/>
      <Route exact path="/chats/:chatId" component={({match}: RouteComponentProps<{chatId: string}>) => (
        <ChatRoomScreen chatId={match.params.chatId} />
      )}/>
    </Switch>
    <Route exact path="/" render={redirectToChats}/>
  </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats"/>

export default App;
