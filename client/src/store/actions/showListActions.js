import * as types from "./types";
import axios from "axios";

export const addTVShowToList = data => {
  return (dispatch, getState) => {
    if (getState().tvshows.shows.some(show => show.id === data.id)) {
      dispatch({
        type: types.ADD_TO_LIST_ERROR
      });
    } else {
      dispatch({
        type: types.ADD_TO_LIST_SUCCESS,
        data
      });
    }
  };
};

export const saveTVShowListToDB = data => dispatch => {
  const tvShowData = {
    shows: [],
    towatch: [],
    inprogress: [],
    watched: []
  };

  tvShowData.shows = [...Object.values(data.tasks)];
  Object.keys(data.columns).forEach(
    key => (tvShowData[data.columns[key].id] = [...data.columns[key].taskIds])
  );

  axios
    .put("/api/users/tv-shows/update", tvShowData)
    .then(res =>
      dispatch({
        type: types.UPDATE_LIST_SUCCESS,
        data: tvShowData,
        messages: res.data.messages
      })
    )
    .catch(err =>
      dispatch({
        type: types.UPDATE_LIST_ERROR,
        errors: err.response.data.errors
      })
    );
};
