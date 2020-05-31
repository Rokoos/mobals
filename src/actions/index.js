import { FETCH_PHONE, FETCH_PHONES, SET_LOADING } from "./types";

const fetchPhones = (phones) => ({
  type: FETCH_PHONES,
  phones,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const fetchPhone = (phone) => ({
  type: FETCH_PHONE,
  phone,
});
