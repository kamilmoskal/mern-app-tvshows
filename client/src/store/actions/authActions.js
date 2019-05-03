import * as types from "./types";
import axios from "axios";
import setAuthToken from "../../utills/setAuthToken";

export const registerUser = userData => dispatch => {
  dispatch(authStartLoading());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(userData);

  setTimeout(() => {
    axios
      .post("/api/users/register", body, config)
      .then(res => {
        dispatch({ type: types.REGISTER_SUCCESS, token: res.data.token });
        dispatch(loadUser());
      })
      .catch(err =>
        dispatch({
          type: types.REGISTER_ERRORS,
          errors: err.response.data.errors
        })
      );
  }, 1000);
};

export const loginUser = userData => dispatch => {
  dispatch(authStartLoading());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(userData);

  setTimeout(() => {
    axios
      .post("/api/auth", body, config)
      .then(res => {
        dispatch({ type: types.LOGIN_SUCCESS, token: res.data.token });
        dispatch(loadUser());
      })
      .catch(err =>
        dispatch({
          type: types.LOGIN_ERRORS,
          errors: err.response.data.errors
        })
      );
  }, 1000);
};

export const loadUser = () => dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  axios
    .get("/api/auth")
    .then(res => dispatch({ type: types.LOAD_USER, user: res.data }))
    .catch(err => dispatch({ type: types.LOAD_USER_ERROR }));
};

export const authStartLoading = () => {
  return {
    type: types.AUTH_START_LOADING
  };
};

export const setCurrentUser = (userData, history) => {};

export const logoutUser = (userData, history) => dispatch => {};
