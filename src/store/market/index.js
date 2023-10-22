import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  money: 128000000000,
  loading: true,
};

const market = createSlice({
  name: "market",
  initialState,
  reducers: {
    _addBasket: (state, action) => {
      const item = state.basket.find((i) => i.id === action.payload.id);
      if (item) {
        state.basket.map((b) => {
          if (b.id === action.payload.id) {
            b.count++;
          }
          return b;
        });
      } else {
        state.basket.push({
          id: action.payload.id,
          count: 1,
        });
      }
      state.money -= action.payload.price;
    },
    _removeBasket: (state, action) => {
      const item = state.basket.find((i) => i.id === action.payload.id);
      if (item.count > 1) {
        state.basket.map((b) => {
          if (b.id === action.payload.id) {
            b.count--;
          }
          return b;
        });
      } else {
        state.basket = state.basket.filter((b) => b.id !== action.payload.id);
      }
      state.money += action.payload.price;
    },
    _setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { _addBasket, _removeBasket, _setLoading } = market.actions;
export default market.reducer;
