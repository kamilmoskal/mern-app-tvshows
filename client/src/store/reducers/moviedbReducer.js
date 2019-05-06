import * as types from "../actions/types";

const initState = {
  bgUrl: "",
  searchResults: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.GETBG_SUCCESS:
      return {
        ...state,
        bgUrl: action.bgUrl
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        searchResults: []
      };
    default:
      return state;
  }
};
