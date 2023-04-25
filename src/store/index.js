import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});


const tabSlice = createSlice({
  name: "tab",
  initialState: { activeTab: "" },
  reducers: {
    home(state) {
      state.activeTab = "Home";
    },
    login(state) {
      state.activeTab = "Login";
    },
    logout(state) {
      state.activeTab = "Logout";
    },
    register(state) {
      state.activeTab = "Register";
    },
    welcome(state) {
      state.activeTab = "Welcom";
    },
  },
});

export const authActions = authSlice.actions;
export const tabActions = tabSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tab: tabSlice.reducer,
  },
});
