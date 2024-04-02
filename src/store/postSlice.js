import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const postSlice = createSlice({
  name: "userData", // Corrected the name to match initialState
  initialState,
  reducers: {
    submit: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
    remove: (state, action) => {
      const value = JSON.parse(JSON.stringify(state.userData));
      state.userData = value.filter((user) => user.userId !== action.payload);
      console.log(state.userData, "name");
    },
    update: (state, action) => {
      const value = JSON.parse(JSON.stringify(state.userData));
      const updateData = value.filter((value) => value.userId !== action.payload.userId)
      state.userData = [action.payload, ...updateData]
      console.log(state.userData, 'finalData')
    },
  },
});

export const { submit, update, remove } = postSlice.actions;

export default postSlice.reducer;
