import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ variant, children }) => {
  return <Alert className = "m-2" variant={variant}>{children}</Alert>;
};

Error.defaultProps = {
  variant: "info",
};

export default Error;
