import { useSelector } from "react-redux";

export const useBasket = () => useSelector((state) => state.market.basket);
export const useMoney = () => useSelector((state) => state.market.money);
export const useLoading = () => useSelector((state) => state.market.loading);
