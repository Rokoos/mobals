import { FETCH_PHONES, SET_LOADING } from "../actions/types";

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

    default:
      return state;
  }
};
