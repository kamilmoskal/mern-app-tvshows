import * as types from "./types";
import axios from "axios";

export const getBg = () => dispatch => {
  axios
    .get("/api/moviedb/bg")
    .then(res => {
      const size = window.innerWidth > 500 ? "original" : "w780";
      let bgUrl = "";
      if (res.data && res.data.length > 0) {
        bgUrl = `http://image.tmdb.org/t/p/${size}/${res.data}`;
      }
      dispatch({ type: types.GETBG_SUCCESS, bgUrl });
    })
    .catch(err => dispatch({ type: types.GETBG_ERROR }));
};

export const searchTVShow = query => dispatch => {
  dispatch({ type: types.SEARCH_LOADING });
  axios
    /* .create({
      transformRequest: [
        (data, headers) => {
          delete headers.common["x-auth-token"];
          return data;
        }
      ]
    }) */
    .get(`/api/moviedb/search/${query}`)
    .then(res =>
      dispatch({ type: types.SEARCH_SUCCESS, searchResults: res.data })
    )
    .catch(err => dispatch({ type: types.SEARCH_ERROR }));
};
