import React from "react";
import Button from "@material-ui/core/Button";

import "./Button.css";

function button(props) {
  const { clicked, children } = props;
  return (
    <Button variant="contained" color="secondary" onClick={clicked}>
      {children}
    </Button>
  );
}

export default button;
