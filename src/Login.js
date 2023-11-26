import { Button } from '@material-ui/core';
import { auth, googleProvider, signInWithPopup } from './firebase';
import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <h1>Sign in to the Xingster's Chat</h1>
        <Button
          onClick={(e) => {
            e.preventDefault();
            signInWithPopup(auth, googleProvider).catch((e) => alert(e.Message));
          }}
        >
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInnerContainer = styled.div`
  background-color: white;
  padding: 100px;
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: column;

  > button {
    color: white;
    background-color: #0a8d48 !important;
    margin-top: 50px;
  }
`;

export default Login;
