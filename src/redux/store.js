import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorChanger";
import { red, blue, green, yellow } from "./colorChanger";

export default configureStore({
  reducer: {
    defaultColor: colorReducer,
    red: red,
    blue: blue,
    green: green,
    yellow: yellow,
  },
});
