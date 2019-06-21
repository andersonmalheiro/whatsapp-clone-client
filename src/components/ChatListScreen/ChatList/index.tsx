import moment from 'moment';
import styled from 'styled-components';
import React, { useState, useMemo } from 'react';
import {
  Container,
  StyledList,
  StyledListItem,
  ChatPicture,
  ChatInfo,
  ChatName,
  MessageContent,
  MessageDate,
} from './styles';

const getChatsQuery = `
  query {
    chats {
      id,
      name,
      picture,
      lastMessage {
        id,
        content,
        createdAt
      }
    }
  }`;

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<any[]>([]);

  useMemo(async () => {
    // Faz a request dea listagem de chats
    const body = await fetch(`${process.env.REACT_APP_SERVER_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: getChatsQuery }),
    });

    // Salva os dados da request
    const {
      data: { chats },
    } = await body.json();
    
    // Atualiza state
    setChats(chats);
  }, []);

  return (
    <Container>
      <StyledList>
        {chats.map(chat => (
          <StyledListItem key={chat.id} button>
            <ChatPicture src={chat.picture} alt="Profile" />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              {chat.lastMessage && (
                <React.Fragment>
                  <MessageContent>{chat.lastMessage.content}</MessageContent>
                  <MessageDate>
                    {moment(chat.lastMessage.createdAt).format('HH:mm')}
                  </MessageDate>
                </React.Fragment>
              )}
            </ChatInfo>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default ChatList;
