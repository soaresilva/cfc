import React from "react";
import Button from "@material-ui/core/Button";

import "./Button.css";

function buttonBlue(props) {
  const { clicked, children, sendUserTripsToDB, openSnackbar, isUserOrg } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      type="button"
      onClick={() => {
        clicked ? clicked() : (sendUserTripsToDB(), openSnackbar());
      }}
    >
      <a
        href={!isUserOrg && (children === "Offset" || children === "Add to profile without offsetting") ? "/home" : null}
        className="ButtonLink"
      >
        {children}
      </a>
    </Button>
  );
}

export default buttonBlue;
