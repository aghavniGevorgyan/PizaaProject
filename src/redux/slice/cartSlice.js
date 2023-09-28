import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalPrice: 0,
  opinion: false,
};
const cartSlice = createSlice({
  name: "addcart",
  initialState,
  reducers: {
    addProductCart(state, action) {
      const findPizza = state.cartProducts.find(
        (obj) => obj.id === action.payload.id
      )
      if (findPizza) {
        findPizza.count++;
        const typeProductFind = findPizza.typeofProsuct.find(
          (obj) =>
            obj.sizeName === action.payload.size &&
            obj.typeName === action.payload.type
        );
        if (typeProductFind) {
          typeProductFind.count++;
        } else {
          findPizza.typeofProsuct.push({
            sizeName: action.payload.size,
            typeName: action.payload.type,
            count: 1,
          });
        }
      } else {
        state.cartProducts.push({
          ...action.payload,
          count: 1,
          typeofProsuct: [
            {
              sizeName: action.payload.size,
              typeName: action.payload.type,
              count: 1,
            },
          ],
        })
      }

      state.totalPrice = state.cartProducts.reduce(
        (total, obj) => total + obj.price * obj.count,
        0
      )
    },
    minusItemCount(state, action) {
      const findPizza = state.cartProducts.find(
        (obj) => obj.id === action.payload.productId
      )
      if (findPizza) {
        findPizza.count--
        const findtypeofProsuct = findPizza.typeofProsuct.find(
          (obj) =>
            obj.sizeName === action.payload.sizeName &&
            obj.typeName === action.payload.typeName
        )
        if (findtypeofProsuct) {
          findtypeofProsuct.count--
        }
      }
      state.totalPrice = state.cartProducts.reduce(
        (total, obj) => total + obj.price * obj.count,
        0
      );
    },
    delEachProduct(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (obj) => obj.id !== action.payload
      )
      state.totalPrice = state.cartProducts.reduce(
        (total, obj) => total + obj.price * obj.count,
        0
      )
    },


    deleteSizeAndType(state, action) {
      const findPizza = state.cartProducts.find(
        (obj) => obj.id === action.payload.id
      )
      if (findPizza) {
        findPizza.count--
        const filterSize = findPizza.typeofProsuct.filter(
          (obj) =>
            obj.sizeName !== action.payload.size ||
            obj.typeName !== action.payload.type
        )
        if (filterSize) {
          
          findPizza.typeofProsuct = filterSize;
          // if (filterSize.length === 0) {
          //   state.cartProducts=state.cartProducts.filter((obj)=>obj.id!==findPizza) 
          // }
        }
      }
    },
    deleteAll(state, action) {
      state.opinion = action.payload;
      if (state.opinion) {
        state.cartProducts.length = 0
        state.totalPrice = 0
      }
    },
  },
});

export const {
  addProductCart,
  minusItemCount,
  delEachProduct,
  deleteAll,
  deleteSizeAndType,
} = cartSlice.actions;
export default cartSlice.reducer;
