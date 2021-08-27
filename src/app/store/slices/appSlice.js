import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const reducers = {
  setAuth: (state, action) => {
    state.isAuth = action.payload;
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const { setAuth } = appSlice.actions;

export default appSlice.reducer;
