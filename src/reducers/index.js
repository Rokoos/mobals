import { combineReducers } from "redux";
import items from "./items";
import phone from "./phone";
import cart from "./cart";

export default combineReducers({
  items,
  phone,
  cart,
});
