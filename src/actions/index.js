import {
  FETCH_PHONE,
  FETCH_PHONES,
  SET_LOADING,
  PHONE_LOADING,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
} from "./types";
import { db } from "../firebase/firebase";

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
