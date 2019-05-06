import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authActions";

const Logout = ({ logoutUser }) => {
  useEffect(() => {
    logoutUser();
  }, []);
  return <Redirect to="/" />;
};

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { logoutUser }
)(Logout);
