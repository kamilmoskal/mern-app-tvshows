import * as types from "./types";
import axios from "axios";

const API_KEY = "4bba9cc0bb6eb5b67b64c5a5a057e2fc";

export const getBg = () => dispatch => {
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

export const searchTVShow = query => dispatch => {
  axios
    .create({
      transformRequest: [
        (data, headers) => {
          delete headers.common["x-auth-token"];
          return data;
        }
      ]
    })
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
    )
    .then(res => {
      const searchResults = res.data.results.slice(0, 4).map(result => ({
        id: result.id,
        name: result.name,
        date: result.first_air_date.substring(0, 4),
        overview: result.overview,
        poster: `http://image.tmdb.org/t/p/w92/${result.poster_path}`,
        vote: result.vote_average
      }));
      dispatch({ type: types.SEARCH_SUCCESS, searchResults });
    })
    .catch(err => dispatch({ type: types.SEARCH_ERROR }));
};
