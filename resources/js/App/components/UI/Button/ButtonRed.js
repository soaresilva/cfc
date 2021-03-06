import React from "react";
import Button from "@material-ui/core/Button";

import "./Button.css";

function button(props) {
  const { clicked, children, sendOrgTripsToDB, openSnackbar } = props;
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          clicked ? clicked() : (openSnackbar(), sendOrgTripsToDB());
        }}
      >
        {children}
      </Button>
    </div>
  );
}

export default button;
