import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../utils";


export const register = createAsyncThunk("/user", async (data) => {
  try {
    const res = await axios.post(domain + "/register", data);
    return res.data;
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});

export const logIn = createAsyncThunk("/login", async (data) => {
  try {
    const res = await axios.post(domain + "/login", data);
    return res.data;
  } catch (error) {
    return {
      error: error.response.data.error
    };
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    error: "",
    user: {},
  },
  reducers: {
    logOut: (state) => {
      state.loggedIn = false;
      state.user = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      const { error, user } = action.payload;
      if (error) {
        state.error = error;
      } else {
        state.loggedIn = true;
        state.user = user;
        state.error = "";
      }
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload.error;
    },

    [logIn.rejected]: (state, action) => {
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
