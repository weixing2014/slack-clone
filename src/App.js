import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Homepage() {
  return <h1>Hi</h1>;
}
export default App;
