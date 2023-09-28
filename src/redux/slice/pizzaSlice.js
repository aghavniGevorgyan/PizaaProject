import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizzas/fetchStatus', async (params, thunkApi)=> {
const {url} = params
  const {data} = await axios.get(url)
  if(data.length === 0){
    return thunkApi.rejectWithValue('chkan tvyalner')
  }
  return thunkApi.fulfillWithValue(data)
})

const initialState = {
  products: [],
  status: 'loading', // loading | succes | error
};
const productSlice = createSlice({
  name: "fillProducts",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setLoadingProducts(state, action) {
      state.loading = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state, action) => {
  //     state.status = 'loading'
  //     state.products = []
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.status = 'succes'
  //     state.products = action.payload
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = 'error'
  //     state.products =[]
  //   },
  // }

  extraReducers: (builder)=> {
    builder
    .addCase(fetchPizzas.pending, (state, action)=>{
        state.status = 'loading'
          state.products = []  
    } )
    .addCase(fetchPizzas.fulfilled, (state, action)=>{
      // console.log(action);
      state.status = 'succes'
      state.products = action.payload 
  } )
  .addCase(fetchPizzas.rejected, (state, action)=>{
    console.log(action);
    state.status = 'error'
      state.products = []  
    } )
  }

})
export const {
  setProducts,
  setLoadingProducts,
} = productSlice.actions
export default productSlice.reducer
