import { combineReducers } from "redux";
import authReducer from "./authReducer";
import moviedbReducer from "./moviedbReducer";
import showListReducer from "./showListReducer";

export default combineReducers({
  auth: authReducer,
  moviedb: moviedbReducer,
  tvshows: showListReducer
});
