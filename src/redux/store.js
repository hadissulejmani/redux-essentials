import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorChanger";
import { changeByColor } from "./colorChanger";

export default configureStore({
  reducer: {
    defaultColor: colorReducer,
    changeByColor: changeByColor,
  },
});
