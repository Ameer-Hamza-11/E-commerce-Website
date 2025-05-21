// src/Features/SignUpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice = createSlice({
  name: "signup",
  initialState: {
    users: [],  // yahan sab users ka array store hoga
  },
  reducers: {
    addSignUp: (state, action) => {
      state.users.push(action.payload); // new user add karo
    },
  },
});

export const { addSignUp } = SignUpSlice.actions;
export default SignUpSlice.reducer;
