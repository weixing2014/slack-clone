import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSelector } from 'react-redux';
import { selectRoomId } from 'app/appSlice';
import { collection, getFirestore, firebaseApp } from './firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import ChatInput from 'ChatInput';
import { doc, orderBy, query } from 'firebase/firestore';

function ChatRoom() {
  const roomId = useSelector(selectRoomId);

  const [roomsDocument, loadinRoomsDocument, roomsDocumentError] = useDocument(
    roomId && doc(getFirestore(firebaseApp), 'rooms', roomId)
  );

  const [messagesCollection, loadingMessagesCollection, messagesCollectionError] = useCollection(
    roomId &&
      query(
        collection(getFirestore(firebaseApp), 'rooms', roomId, 'messages'),
        orderBy('timestamp', 'asc')
      ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log('roomsDocument :>> ', roomsDocument);
  console.log('messagesCollection :>> ', messagesCollection);

  return (
    <ChatRoomContainer>
      <Header>
        <HeaderLeft>
          <strong>#RoomId</strong>
          <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>Details</HeaderRight>
      </Header>
      <Messages>
        {messagesCollection &&
          messagesCollection.docs.map((doc) => <div>{JSON.stringify(doc.data())}</div>)}
      </Messages>
      <ChatInputContainer>
        <ChatInput roomId={roomId} roomName={roomsDocument?.data().name}></ChatInput>
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
