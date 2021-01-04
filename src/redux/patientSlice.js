import axios from "axios";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    domain
} from "../utils";


export const createPatient = createAsyncThunk(
    "/createPatient",
    async (data) => {
        try {
            const res = await axios.post(`${domain}/api/patients`, data);
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error
            };
        }
    });


export const listPatients = createAsyncThunk(
    "/listPatients",
    async () => {
        try {
            const res = await axios.get(`${domain}/api/patients`);
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error
            };
        }
    });


export const patientSlice = createSlice({
    name: "patients",
    initialState: {
        loading: false,
        error: "",
        patients: [],
        waitingPatients: []
    },
    reducers: {
        assignPatientToRoom: (state, action) => {
            state.waitingPatients = state.waitingPatients.filter(p => p.patient_id !== action.id)
        }
    },
    extraReducers: {
        [createPatient.pending]: (state) => {
            state.loading = true;
        },
        [createPatient.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                patient
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.waitingPatients = [...state.waitingPatients, patient];
            }
        },
        [createPatient.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },


        [listPatients.pending]: (state) => {
            state.loading = true;
        },
        [listPatients.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                patients
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.patients = patients;
            }
        },
        [listPatients.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },

    },
});


export const patientState = (state) => state.patients;
export default patientSlice.reducer;