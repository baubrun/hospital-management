import axios from "axios";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    domain
} from "../utils";


export const listRooms = createAsyncThunk(
    "/rooms",
    async () => {
        try {
            const res = await axios.get(
                `${domain}/api/rooms`);
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error
            };
        }
    });


export const admission = createAsyncThunk(
    "/rooms/room_id/admission",
    async (data) => {
        try {
            const res = await axios.post(
                `${domain}/api/rooms/${data.room_id}/admission`, data);
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error
            };
        }
    });


export const discharge = createAsyncThunk(
    "/rooms/room_id/discharge",
    async (room_id) => {
        try {
            const res = await axios.post(
                `${domain}/api/rooms/${room_id}/discharge`);
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error
            };
        }
    });


export const roomSlice = createSlice({
    name: "rooms",
    initialState: {
        admission: false,
        error: "",
        loading: false,
        rooms: [],
    },
    reducers: {},
    extraReducers: {
        [admission.pending]: (state) => {
            state.loading = true
        },
        [admission.fulfilled]: (state, action) => {
            state.loading = false
            const {
                error,
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.admission = true;
            }
        },
        [admission.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.error;
        },


        [discharge.pending]: (state) => {
            state.loading = true
        },
        [discharge.fulfilled]: (state, action) => {
            state.loading = false
            const {
                error
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.admission = false;
            }
        },
        [discharge.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.error;
        },


        [listRooms.pending]: (state) => {
            state.loading = true
        },
        [listRooms.fulfilled]: (state, action) => {
            state.loading = false
            const {
                error, rooms
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.rooms = rooms;
            }
        },
        [listRooms.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.error;
        },
    },
});

export const roomState = (state) => state.rooms;
export default roomSlice.reducer;