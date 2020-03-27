import React from "react";
import Button from "@material-ui/core/Button";

import "./Button.css";

function buttonBlue(props) {
  const { clicked, children } = props;
  return (
    <Button variant="contained" color="primary" onClick={clicked}>
      {children}
    </Button>
  );
}

export default buttonBlue;
