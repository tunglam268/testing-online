import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CandidateService from "../services/servicecandidate";


const initialState = [];

export const createCandidate = createAsyncThunk(
    "staff/addcandidate",
    async ({ name, level, room, phone, email }) => {
        const res = await CandidateService.addCandidate({ name, level, room, phone, email });
        return res.data;
    }
)

export const getListCandidate = createAsyncThunk(
    "staff/listcandidate",
    async () => {
        const res = await CandidateService.getListCandidate();
        return res.data
    }
)

export const deleteCandidate = createAsyncThunk(
    "staff/deletecandidate",
    async ({ id }) => {
        await CandidateService.deleteCandidate(id);
        return { id }
    }

)

const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    extraReducers: {
        [createCandidate.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [deleteCandidate.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index, 1)
        },
        [getListCandidate.fulfilled]: (state, action) => {
            return [...action.payload];
        },

    }
})

const { reducer } = candidateSlice;
export default reducer;