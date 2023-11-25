// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    selectedRoomId: null,
  },
  reducers: {
    selectRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { selectRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
