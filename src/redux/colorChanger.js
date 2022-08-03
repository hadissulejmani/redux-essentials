import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colorChanger",
  initialState: {
    value: " #33ff74",
  },
  reducers: {
    changeByColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeByColor } = colorSlice.actions;

export default colorSlice.reducer;
