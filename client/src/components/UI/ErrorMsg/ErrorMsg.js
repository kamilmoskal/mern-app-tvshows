import React from "react";
import { ErrorItem, ErrorWrapper } from "./styled";
import PropTypes from "prop-types";
import posed from "react-pose";

const AniErrorMsg = posed(ErrorWrapper)({
  closed: { x: "200px", opacity: 0 },
  open: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 200,
      duration: 500
    }
  }
});

const ErrorMsg = ({ errors }) => {
  errors = errors.map((error, index) => (
    <ErrorItem key={error.param || index}>- {error.msg}</ErrorItem>
  ));
  return (
    <AniErrorMsg initialPose="closed" pose="open">
      {errors}
    </AniErrorMsg>
  );
};

export default ErrorMsg;

ErrorMsg.propTypes = {
  errors: PropTypes.array.isRequired
};
