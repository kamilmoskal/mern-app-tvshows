import * as types from "./types";
import axios from "axios";

export const getBg = () => dispatch => {
  const API_KEY = "4bba9cc0bb6eb5b67b64c5a5a057e2fc";

  axios
    .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    .then(res => {
      const size = window.innerWidth > 500 ? "original" : "w780";
      const randomTv = Math.floor(Math.random() * 19) + 1;
      const url = res.data.results[randomTv].backdrop_path;
      let bgUrl = null;
      if (url && url.length > 0) {
        bgUrl = `http://image.tmdb.org/t/p/${size}/${url}`;
      } else {
        bgUrl = `http://image.tmdb.org/t/p/${size}/qsD5OHqW7DSnaQ2afwz8Ptht1Xb.jpg`;
      }
      dispatch({ type: types.GETBG_SUCCESS, bgUrl });
    })
    .catch(err => dispatch({ type: types.GETBG_ERROR }));
};
