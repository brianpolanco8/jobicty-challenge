import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  pinCode: null,
  pinCodeSet: false,
};

const reducers = {
  setAuth: (state, action) => {
    state.isAuth = action.payload;
  },
  setPinCode: (state, action) => {
    state.pinCode = action.payload;
  },
  setPinCodeSet: (state, action) => {
    state.pinCodeSet = action.payload;
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

// export state data
export const selectState = (state) => state.app;

export const { setAuth, setPinCode, setPinCodeSet } = appSlice.actions;

export default appSlice.reducer;
