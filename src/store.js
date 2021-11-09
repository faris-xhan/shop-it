import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
