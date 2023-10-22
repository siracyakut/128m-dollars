import store from "store";
import { _addBasket, _removeBasket, _setLoading } from "store/market";

export const addBasket = (data) => store.dispatch(_addBasket(data));
export const removeBasket = (data) => store.dispatch(_removeBasket(data));
export const setLoading = (data) => store.dispatch(_setLoading(data));
