import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../utils";


export const checkIn = createAsyncThunk(
  "/room/checkIn", 
async (data) => {
  try {
    const res = await axios.post(`${domain}/room/{roomId}/checkin`, data);
    return res.data;
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});


export const checkOut = createAsyncThunk(
  "/room/checkOut", 
async (data) => {
  try {
    const res = await axios.post(`${domain}/room/{roomId}/checkout`, data);
    return res.data;
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});


export const roomSlice = createSlice({
  name: "room",
  initialState: {
    checkedIn: false,
    error: "",
    room: {},
    rooms: [],
  },
  reducers: {
    logOut: (state) => {
      state.loggedIn = false;
      state.user = {};
    },
  },
  extraReducers: {
    [checkIn.fulfilled]: (state, action) => {
      const { error, room } = action.payload;
      if (error) {
        state.error = error;
      } else {
        state.loggedIn = true;
        state.room = room;
        state.error = "";
      }
    },
    [checkIn.rejected]: (state, action) => {
      state.error = action.payload.error;
    },

    [checkIn.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
    [logIn.fulfilled]: (state, action) => {
      const { error } = action.payload;
      if (error) {
        state.error = error;
      } else {
        state.loggedIn = true;
        state.error = "";
      }
    },
  },
});

export const { logOut } = userSlice.actions;

export const userState = (state) => state.user;
export default userSlice.reducer;
