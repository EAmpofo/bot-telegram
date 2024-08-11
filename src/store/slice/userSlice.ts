import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../../utils/interfaces/interface";

const initialState: userState = {
  currentUsername: null,
  userCountry: null,
  tutorialFinished: false,
  reward: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUserName: (state, action) => {
      state.currentUsername = action.payload;
    },
    setUserrCountry: (state, action) => {
      state.userCountry = action.payload;
    },
    setTutorialFinished: (state, action) => {
      state.tutorialFinished = action.payload;
    },
    setRewardValue: (state, action) => {
      state.reward = action.payload;
    },
  },
});

export const {
  setCurrentUserName,
  setUserrCountry,
  setTutorialFinished,
  setRewardValue,
} = userSlice.actions;

export const selectCurrentUser = (state: { user: userState }) => state.user;

export default userSlice.reducer;
