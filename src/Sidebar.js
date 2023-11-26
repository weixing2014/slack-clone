// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';
import SidebarOption, { OPTION_TYPE_CHANNEL } from './SidebarOption';
import { collection, getFirestore, firebaseApp } from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { OPTION_TYPE_ADD_CHANNEL } from './SidebarOption';

function Sidebar({ user }) {
  const [roomsCollection, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), 'rooms'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Xingster Inc.</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <hr />
      <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
      <SidebarOption Icon={DraftsIcon} title='Message' />
      <hr />
      <SidebarOption Icon={AddIcon} title='Add channel' type={OPTION_TYPE_ADD_CHANNEL} />
      {roomsCollection &&
        roomsCollection.docs.map((doc) => (
          <SidebarOption
            key={doc.id}
            id={doc.id}
            Icon={GroupIcon}
            title={doc.data().name}
            type={OPTION_TYPE_CHANNEL}
          />
        ))}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  min-width: 190px;
  color: white;

  > hr {
    margin: 10px 0;
    border: 0.1px solid var(--slack-border-color);
  }
`;

const SidebarHeader = styled.div`
  margin: 60px 0 0 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0 10px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--slack-color);
    background-color: white;
    border-radius: 999px;
    font-size: smaller;
    cursor: pointer;
  }
`;

const SidebarInfo = styled.div`
  > h2 {
    font-size: smaller;
    font-weight: 800;
  }

  > h3 {
    display: flex;
    font-size: small;
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
