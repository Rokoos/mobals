import { FETCH_PHONE, PHONE_LOADING } from "../actions/types";

const initState = {
  phone: null,
  loading: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case PHONE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
