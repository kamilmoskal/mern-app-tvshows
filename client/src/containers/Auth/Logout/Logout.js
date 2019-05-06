import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authActions";

const Logout = ({ dispatch }) => {
  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);
  return <Redirect to="/" />;
};

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Logout);
