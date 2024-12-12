import { createSlice } from "@reduxjs/toolkit";

// Retrieve persisted auth state from localStorage
const persistedAuthState = JSON.parse(localStorage.getItem("auth")) || {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: persistedAuthState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user; 
      state.token = action.payload.token; 
      
   
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;

      
      localStorage.removeItem("auth");
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }; 

      
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;