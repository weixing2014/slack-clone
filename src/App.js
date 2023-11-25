import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes></Routes>
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
