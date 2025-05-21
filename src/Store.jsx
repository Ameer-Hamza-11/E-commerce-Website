// 🔁 store.js
import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "./Features/SignUpSlice";
import SignInReducer from './Features/SignInSlice';
import cartReducer from './Features/cartSlice';



export const store = configureStore({
  reducer: {
    signUp: SignUpReducer,
    signIn: SignInReducer,
    cart: cartReducer
  },
});