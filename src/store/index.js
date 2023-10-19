import { configureStore } from "@reduxjs/toolkit";
import market from "store/market";

const store = configureStore({
  reducer: {
    market,
  },
  devTools: false,
});

export default store;
