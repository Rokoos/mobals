import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import items from "./items";
import phone from "./phone";
import cart from "./cart";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  items,
  cart,
  phone,
});

export default persistReducer(persistConfig, rootReducer);
