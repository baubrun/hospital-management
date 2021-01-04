import axios from "axios";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    domain
} from "../utils";
import _ from "lodash"


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


export const admission = createAsyncThunk(
    "api/rooms/room_id/admission",
    async (data) => {
        try {
            const res = await axios.post(
                `${domain}/api/rooms/${data.room_number}/admission`, data);
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
        occupant_id: null,
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
                room
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                const found = state.rooms.findIndex(r => r.room_number === room.room_number)
                const updatedRooms = _.cloneDeep(state.rooms)
                updatedRooms[found] = room
                state.rooms = updatedRooms;
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
                error,
                occupant_id
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.occupant_id = occupant_id;
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
                state.rooms = rooms.sort((a,b) => {return a.room_number - b.room_number});
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