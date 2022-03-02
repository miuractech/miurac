import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface TState {
  user?: User | null;
  userLoading: boolean;
  error: string;
  signOutMessage: string;
}

const state: TState = {
  user: null,
  userLoading: true,
  error: "",
  signOutMessage: "",
};

export const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: state,
  reducers: {
    setAdminUserState: (state: TState, action: PayloadAction<TState>) => {
      state = action.payload;
      return state;
    },
    userSignoutError: (state: TState, action: PayloadAction<TState>) => {
      state.error = action.payload.error;
      state.signOutMessage = action.payload.signOutMessage;
      state.userLoading = action.payload.userLoading;
      return state;
    },
  },
});

export const { setAdminUserState, userSignoutError } = adminUserSlice.actions;
export const Slice =  adminUserSlice.reducer;
