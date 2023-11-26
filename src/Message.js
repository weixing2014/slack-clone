import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

function Message({ image, name, createdAt, content }) {
  return (
    <MessageContainer>
      <img
        src={
          image ||
          'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?w=136&h=136'
        }
        alt='avatar'
      />
      <MessageInfo>
        <h4>
          {name || 'Unknown'}
          <span>{moment(new Date(createdAt?.toDate())).format('YYYY-MM-DD HH:mm:ss')}</span>
        </h4>
        <p>{content}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  padding: 10px 20px;

  > img {
    border-radius: 3px;
    width: 30px;
    object-fit: cover;
  }
`;

const MessageInfo = styled.div`
  display: flex;
  margin-left: 5px;
  flex-direction: column;

  > h4 {
    font-size: smaller;
  }

  > p {
    font-size: medium;
    font-weight: 300;
    padding-top: 3px;
  }

  > h4 > span {
    font-size: small;
    font-weight: 300;
    color: grey;
    margin-left: 3px;
  }
`;

export default Message;
