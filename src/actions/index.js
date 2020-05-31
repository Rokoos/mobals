import { FETCH_PHONE, FETCH_PHONES, SET_LOADING } from "./types";
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

const fetchPhone = (phone) => ({
  type: FETCH_PHONE,
  phone,
});
