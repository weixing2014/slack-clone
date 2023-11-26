import React from 'react';
import styled from 'styled-components';
import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'Header';
import Sidebar from 'Sidebar';
import ChatRoom from 'ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from 'Login';

function App() {
  const [user, loadingUser] = useAuthState(auth);

  return (
    <div className='App'>
      <BrowserRouter>
        {user ? (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path='/' element={<ChatRoom />} />
              </Routes>
            </AppBody>
          </>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
