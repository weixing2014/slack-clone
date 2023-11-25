import React from 'react';
import styled from 'styled-components';
import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'Header';
import Sidebar from 'Sidebar';
import ChatRoom from 'ChatRoom';
import { selectRoomId } from 'app/appSlice';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path='/' element={<ChatRoomContainer />} />
          </Routes>
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function ChatRoomContainer() {
  const roomId = useSelector(selectRoomId);

  return roomId ? <ChatRoom /> : null;
}

export default App;
