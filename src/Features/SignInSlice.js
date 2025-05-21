// src/Features/SignInSlice.js
import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
  name: "signin",
  initialState: {
    currentUser: null,  // logged-in user info
    error: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.currentUser = action.payload; // user info set karo
      state.error = null; // error reset karo
    },
    signOut: (state) => {
      state.currentUser = null;
    },
    setError: (state, action) => {
      state.error = action.payload; // error message set karo
    },
  },
});

export const { signIn, signOut, setError } = SignInSlice.actions;
export default SignInSlice.reducer;
