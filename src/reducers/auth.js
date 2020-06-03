import { SET_CURRENT_USER } from "../actions/types";
const initState = {
  currentUser: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };
    default:
      return state;
  }
};
