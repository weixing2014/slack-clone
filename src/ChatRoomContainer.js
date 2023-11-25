import React from 'react';
import { selectRoomId } from 'app/appSlice';

export function ChatRoomContainer() {
  const roomId = useSelector(selectRoomId);
  return <div></div>;
}
