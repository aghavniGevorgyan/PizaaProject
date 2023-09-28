import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    pageCount: 1,
    sortId:{
        name: "популярности (DESC)",
        sortproperty: "rating",
    },
    inputValue:''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state,action){
            state.categoryId = action.payload
        },
        setSortId(state,action){
            state.sortId=action.payload
        },
        setPageCount(state, action){
            state.pageCount=action.payload
        },
        setFilters(state, action){
            state.categoryId = Number(action.payload.categoryId)
            state.pageCount = Number(action.payload.pageCount)
            state.sortId = action.payload.sort
        },
        setInputValue(state,action){
            state.inputValue=action.payload
        }
    }
})

export const {setCategoryId,setSortId, setPageCount,setFilters,setInputValue}=filterSlice.actions
export default filterSlice.reducer;