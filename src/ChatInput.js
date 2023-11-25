import { Button } from '@material-ui/core';
import { createMessage } from './firebase';
import React, { useRef } from 'react';
import styled from 'styled-components';

function ChatInput({ roomId, roomName }) {
  const inputRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value && roomId) {
      const message = inputRef.current.value;

      await createMessage(roomId, message);
    }
  };

  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #${roomName}`} />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  width: 100%;
  height: 100%;
  > form {
    height: 90%;
  }
  > form > input {
    height: 100%;
    width: 99.5%;
    outline: none;
    border: 1px solid lightgrey;
    border-right: 0;
    border-left: 0;
    border-bottom: 0;
  }
  > form > button {
    display: none !important;
  }
`;

export default ChatInput;
