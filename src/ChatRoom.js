import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSelector } from 'react-redux';
import { selectRoomId } from 'app/appSlice';
import { collection, getFirestore, firebaseApp } from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ChatInput from 'ChatInput';

function ChatRoom() {
  const roomId = useSelector(selectRoomId);

  //   const [messages, loading, error] = useCollection(
  //     collection(getFirestore(firebaseApp), 'rooms', roomId, 'messages'),
  //     {
  //       snapshotListenOptions: { includeMetadataChanges: true },
  //     }
  //   );

  return (
    <ChatRoomContainer>
      <Header>
        <HeaderLeft>
          <strong>#RoomId</strong>
          <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>Details</HeaderRight>
      </Header>
      <Messages></Messages>
      <ChatInputContainer>
        <ChatInput roomId={roomId}></ChatInput>
      </ChatInputContainer>
    </ChatRoomContainer>
  );
}

const ChatRoomContainer = styled.div`
  margin-top: 60px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: medium;

  > .MuiSvgIcon-root {
    font-size: medium;
    margin: -3px 0 0 2px;
  }
`;

const HeaderRight = styled.div``;

const Messages = styled.div`
  overflow-y: auto;
  height: calc(100% - 117px);
`;

const ChatInputContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export default ChatRoom;
