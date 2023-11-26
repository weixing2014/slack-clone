import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({ user }) {
  return (
    <HeaderContainer>
      {/* Left */}
      <HeaderLeft>
        <HeaderAvatar src={user.photoURL} />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search' />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
  border-bottom: 0.5px solid var(--slack-border-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  margin-left: 20px;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  border-radius: 6px;
  background-color: #421f44;
  padding: 5px 5px;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
