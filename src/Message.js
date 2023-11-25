import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

function Message({ image, name, createdAt, content }) {
  return (
    <MessageContainer>
      <img src='https://lh3.googleusercontent.com/ogw/AKPQZvwjApUKqtwhLkq9Ct34VIzCOmbPgIOkyl9VGBpz=s32-c-mo' />
      <MessageInfo>
        <h4>
          {name}
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
