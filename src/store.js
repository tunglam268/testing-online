import { configureStore } from '@reduxjs/toolkit'
import candidateReducer from './slices/slicecandidate'
import questionReducer from './slices/slicequestion'


const reducer = {
    reducers: candidateReducer,
    reducers: questionReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;