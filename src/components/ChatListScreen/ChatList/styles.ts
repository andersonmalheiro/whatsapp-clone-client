import styled from 'styled-components';
import { List, ListItem } from '@material-ui/core';

export const Container = styled.div`
  height: calc(100% - 56px);
  overflow-y: overlay;
`;

export const StyledList = styled(List)`
  padding: 0 !important;
` as typeof List;

export const StyledListItem = styled(ListItem)`
  height: 76px;
  padding: 0 15px;
  display: flex;
` as typeof ListItem;

export const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ChatInfo = styled.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;

export const ChatName = styled.div`
  margin-top: 5px;
`;

export const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;