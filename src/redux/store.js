import { configureStore } from "@reduxjs/toolkit";
import menuToggle from "./menuToggle"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"

const store = configureStore({
  reducer: {
    sidebarToggle: menuToggle,
    search : searchSlice,
    chat  : chatSlice
  },
});

export default store