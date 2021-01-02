import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice"
import roomsReducer from "./roomsSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
  },
});
