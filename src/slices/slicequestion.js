import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import QuestionService from "../services/servicequestion";


const initialState = [];

export const createQuestion = createAsyncThunk(
    "staff/addquestion",
    async ({ type, content, level, subject , img}) => {
        const res = await QuestionService.addQuestion({ type, content, level, subject , img });
        return res.data;
    }
)

export const getListQuestion = createAsyncThunk(
    "staff/listcandidate",
    async () => {
        const res = await QuestionService.getListQuestion();
        return res.data
    }
)

export const deleteQuestion = createAsyncThunk(
    "staff/deletecandidate",
    async ({ id }) => {
        await QuestionService.deleteQuestion(id);
        return { id }
    }

)

const questionSlice = createSlice({
    name: "question",
    initialState,
    extraReducers: {
        [createQuestion.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [deleteQuestion.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index, 1)
        },
        [getListQuestion.fulfilled]: (state, action) => {
            return [...action.payload];
        },

    }
})

const { reducer } = questionSlice;
export default reducer;