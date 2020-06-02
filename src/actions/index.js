import {
  FETCH_PHONE,
  FETCH_PHONES,
  SET_LOADING,
  PHONE_LOADING,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
  SET_FILTERS,
  SET_PRICES,
} from "./types";
import { getMaxPrice, getMinPrice } from "../utils";
import { db } from "../firebase/firebase";

export const setFilters = (name, value) => ({
  type: SET_FILTERS,
  name,
  value,
});

export const setPrices = (data) => {
  const maxPrice = getMaxPrice(data);
  const minPrice = getMinPrice(data);

  return {
    type: SET_PRICES,
    maxPrice,
    minPrice,
  };
};
const fetchPhones = (phones) => ({
  type: FETCH_PHONES,
  phones,
});

const setLoading = () => ({
  type: SET_LOADING,
});

export const startFetchPhones = () => {
  return (dispatch) => {
    return db
      .collection("phones")
      .get()
      .then((snapshot) => {
        const phones = [];
        snapshot.docs.forEach((doc) => {
          phones.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch(fetchPhones(phones));
        dispatch(setLoading());
      });
  };
};
export const phoneLoading = () => ({
  type: PHONE_LOADING,
});
const fetchPhone = (phone) => ({
  type: FETCH_PHONE,
  phone,
});

export const startFetchPhone = (id) => {
  return (dispatch) => {
    return db
      .collection("phones")
      .doc(`${id}`)
      .get()
      .then((doc) => {
        const phone = [];
        phone.push({ id: doc.id, ...doc.data() });
        dispatch(fetchPhone(phone[0]));
        dispatch(phoneLoading());
      });
  };
};
export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
