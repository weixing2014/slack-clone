import React from 'react';
import styled from 'styled-components';
import { createRoom } from './firebase';
import { useDispatch } from 'react-redux';
import { selectRoom } from 'app/appSlice';

export const OPTION_TYPE_ADD_CHANNEL = 'ADD_CHANNEL';
export const OPTION_TYPE_CHANNEL = 'CHANNEL';

function SidebarOption({ id, Icon, title, type }) {
  const dispatch = useDispatch();

  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      await createRoom(channelName);
    }
  };
  const selectChannel = () => {
    dispatch(selectRoom({ roomId: id }));
  };

  return (
    <SidebarOptionContainer
      onClick={() => {
        switch (type) {
          case OPTION_TYPE_ADD_CHANNEL:
            addChannel();
            break;
          case OPTION_TYPE_CHANNEL:
            selectChannel();
            break;
          default:
        }
      }}
    >
      {Icon && <Icon fontSize='small' style={{ padding: '0 7px 3px 0' }} />}
      {title}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: smaller;
  padding: 1px 8px;
  cursor: pointer;
`;

export default SidebarOption;
