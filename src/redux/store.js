import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice"
import roomsReducer from "./roomSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
  },
});
