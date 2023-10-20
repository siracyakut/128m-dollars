import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basket: [],
  money: 128000000000,
  USD: -1,
};

export const _getUSD = createAsyncThunk("market/getUSD", async () => {
  return await axios.get("https://hasanadiguzel.com.tr/api/kurgetir", {
    headers: {
      "Content-Type": "application/json",
    },
  });
});

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
      state.money -= action.payload.tl_price / state.USD;
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
      state.money += action.payload.tl_price / state.USD;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(_getUSD.fulfilled, (state, action) => {
        state.USD =
          action.payload.data.TCMB_AnlikKurBilgileri[0].BanknoteSelling;
      })
      .addCase(_getUSD.rejected, (state) => {
        state.USD = 28;
      });
  },
});

export const { _addBasket, _removeBasket } = market.actions;
export default market.reducer;
