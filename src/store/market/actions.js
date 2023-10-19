import store from "store";
import { _addBasket, _removeBasket, _getUSD } from "store/market";

export const addBasket = (data) => store.dispatch(_addBasket(data));
export const removeBasket = (data) => store.dispatch(_removeBasket(data));

export const getUSD = () => store.dispatch(_getUSD());
