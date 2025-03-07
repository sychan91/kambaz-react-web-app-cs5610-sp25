import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    modules: modulesReducer,
    accountReducer,
  },
});
export default store;
