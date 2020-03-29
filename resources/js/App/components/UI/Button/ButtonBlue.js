import React from "react";
import Button from "@material-ui/core/Button";

import "./Button.css";

function buttonBlue(props) {
  const { clicked, children, sendUserTripsToDB, openSnackbar } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      type="button"
      onClick={() => {
        clicked ? clicked() : (sendUserTripsToDB(), openSnackbar());
      }}
    >
      {children}
    </Button>
  );
}

export default buttonBlue;
