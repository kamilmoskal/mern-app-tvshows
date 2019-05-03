import * as types from "../actions/types";

const initState = {
  bgUrl: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.GETBG_SUCCESS:
      return {
        ...state,
        bgUrl: action.bgUrl
      };
    default:
      return state;
  }
};
