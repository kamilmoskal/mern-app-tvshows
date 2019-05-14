import * as types from "../actions/types";

const initState = {
  bgUrl: "",
  searchResults: [],
  isLoading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.GETBG_SUCCESS:
      return {
        ...state,
        bgUrl: action.bgUrl
      };
    case types.SEARCH_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults,
        isLoading: false
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        searchResults: [],
        isLoading: false
      };
    default:
      return state;
  }
};
