import * as types from "../actions/types";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: false,
  loading: false,
  user: null,
  errors: {
    signUpErrors: null,
    signInErrors: null
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.user
      };
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      localStorage.setItem("token", action.token);
      return {
        ...state,
        token: action.token,
        isAuth: true,
        loading: false,
        errors: {
          signUpErrors: null,
          signInErrors: null
        }
      };
    case types.REGISTER_ERRORS:
    case types.LOGIN_ERRORS:
    case types.LOAD_USER_ERROR:
    case types.LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        loading: false,
        errors: {
          ...state.errors,
          ...action.errors
        }
      };
    case types.AUTH_START_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.CLEAR_AUTH_ERRORS:
      return {
        ...state,
        errors: {
          signUpErrors: null,
          signInErrors: null
        }
      };
    default:
      return state;
  }
};
