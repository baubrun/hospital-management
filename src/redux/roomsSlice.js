import axios from "axios";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    domain
} from "../utils";


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


export const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        checkedIn: false,
        error: "",
        loading: false,
        rooms: [],
    },
    reducers: {},
    extraReducers: {
        [checkedIn.pending]: (state) => {
            state.loading = true
        },
        [checkedIn.fulfilled]: (state, action) => {
            state.loading = false
            const {
                error,
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.checkedIn = true;
            }
        },
        [checkedIn.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.error;
        },


        [checkedOut.pending]: (state) => {
            state.loading = true
        },
        [checkedOut.fulfilled]: (state, action) => {
            state.loading = false
            const {
                error
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.checkedIn = false;
            }
        },
        [checkedOut.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.error;
        },
    },
});

export const roomState = (state) => state.rooms;
export default roomsSlice.reducer;