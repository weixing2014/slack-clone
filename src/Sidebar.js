import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Xingster Inc.</h2>
          <h3>
            <FiberManualRecordIcon />
            Xing Wei
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  min-width: 190px;
  color: white;
  padding: 10px;
`;

const SidebarHeader = styled.div`
  margin: 60px 0 0 0;
  display: flex;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--slack-color);
    background-color: white;
    border-radius: 999px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const SidebarInfo = styled.div`
  > h2 {
    font-size: 15px;
    font-weight: 800;
  }

  > h3 {
    display: flex;
    font-size: 12px;
    font-weight: 400;
    align-items: center;
    margin: 5px 0 0 0;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin: 0 2px 2px 0;
    color: green;
  }
`;

export default Sidebar;
