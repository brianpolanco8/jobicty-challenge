import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isAuth: false,
  pinCode: null,
  pinCodeSet: false,
  favShows: [],
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
  setFavShows: (state, action) => {
    console.log("action", action.payload);
    state.favShows = [...state.favShows, { ...action.payload }];
  },
  removeFromFavShows: (state, action) => {
    state.favShows = [
      ...state.favShows.filter((show) => show.id !== action.payload.id),
    ];
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

// export state data
export const selectState = (state) => state.app;

export const {
  setAuth,
  setPinCode,
  setPinCodeSet,
  setFavShows,
  removeFromFavShows,
} = appSlice.actions;

const persistConfig = {
  key: "app",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appSlice.reducer);

export default persistedReducer;
