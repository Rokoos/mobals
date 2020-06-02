import {
  FETCH_PHONES,
  SET_LOADING,
  SET_PRICES,
  SET_FILTERS,
} from "../actions/types";

const initState = {
  phones: [],
  brand: "All",
  storage: "All",
  memory: "All",
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  loading: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_PHONES:
      return { ...state, phones: action.phones };

    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_PRICES:
      return {
        ...state,
        price: action.maxPrice,
        maxPrice: action.maxPrice,
        minPrice: action.minPrice,
      };
    case SET_FILTERS:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};
