import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../reducers/userSlice";
import messageSlice from "./../reducers/messageSlice";
import listSlice from "./../reducers/listSlice";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
    list: listSlice,
  },
});

export default store;
