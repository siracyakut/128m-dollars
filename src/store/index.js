import { configureStore } from "@reduxjs/toolkit";
import market from "store/market";

const store = configureStore({
  reducer: {
    market,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: false,
});

export default store;
