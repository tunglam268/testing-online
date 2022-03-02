import { configureStore } from '@reduxjs/toolkit'
import candidateReducer from './slices/slicecandidate'


const reducer = {
    reducers: candidateReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;