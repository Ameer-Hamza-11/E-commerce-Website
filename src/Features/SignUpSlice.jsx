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
    setUsers: (state, action) => {
      state.users = [action.payload];
    }
  },
});

export const { addSignUp,setUsers } = SignUpSlice.actions;
export default SignUpSlice.reducer;
