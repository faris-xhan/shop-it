import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: "",
};

const { reducer: shoppingCartReducer, actions } = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    productAdded: (state, action) => {
      state.data.push(action.payload);
    },

    productRemoved: (state, action) => {
      const id = state.data.findIndex((d) => d.id === action.payload);
      state.data.splice(id);
    },
  },
});

export const { productAdded, productRemoved } = actions;
export const selectAllShoppingCartProducts = (state) => state.shoppingCart.data;
export default shoppingCartReducer;
