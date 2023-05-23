import { configureStore } from "@reduxjs/toolkit";
import  products from "./products.slice";
import cart from "./cartSlice";

 const store = configureStore({
     reducer:{
      products,
      cart,
     }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
