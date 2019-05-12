import * as types from "../actions/types";

const initState = {
  shows: [],
  towatch: [],
  inprogress: [],
  watched: [],
  messages: [],
  errors: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TO_LIST_SUCCESS:
      return {
        ...state,
        shows: [action.data, ...state.shows],
        towatch: [action.data.id, ...state.towatch],
        messages: [{ msg: "TV-Show added to list locally" }],
        errors: []
      };
    case types.ADD_TO_LIST_ERROR:
      return {
        ...state,
        messages: [],
        errors: [{ msg: "This TV-Show is already in your list" }]
      };
    case types.UPDATE_LIST_ERROR:
      return {
        ...state,
        messages: [],
        errors: action.errors
      };
    case types.UPDATE_LIST_SUCCESS:
    case types.LOAD_TVSHOWS:
      return {
        ...state,
        ...action.data,
        messages: action.messages,
        errors: []
      };
    default:
      return state;
  }
};
