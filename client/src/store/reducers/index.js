import { combineReducers } from "redux";
import authReducer from "./authReducer";
import moviedbReducer from "./moviedbReducer";

export default combineReducers({
  auth: authReducer,
  moviedb: moviedbReducer
});
