import axios from "axios";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    domain
} from "../utils";


export const listRooms = createAsyncThunk(
    "api/rooms/list",
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


export const roomAdmission = createAsyncThunk(
    "api/rooms/room_id/admission",
    async (data) => {
        try {
            const res = await axios.post(
                `${domain}/api/rooms/${data.room_id}/admission`, data.occupant_id);
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error
            };
        }
    });


export const discharge = createAsyncThunk(
    "api/rooms/room_id/discharge",
    async (room_id) => {
        try {
            const res = await axios.post(
                `${domain}/api/rooms/${room_id}/discharge`, null);
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
        [roomAdmission.pending]: (state) => {
            state.loading = true
        },
        [roomAdmission.fulfilled]: (state, action) => {
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
        [roomAdmission.rejected]: (state, action) => {
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