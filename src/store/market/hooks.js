import { useSelector } from "react-redux";

export const useBasket = () => useSelector((state) => state.market.basket);
export const useMoney = () => useSelector((state) => state.market.money);
export const useUSD = () => useSelector((state) => state.market.USD);
