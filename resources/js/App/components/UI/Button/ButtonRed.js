import React from "react";
import Button from "@material-ui/core/Button";

import "./Button.css";

function button(props) {
  const { clicked, children, sendOrgTripsToDB, openSnackbar, isUserOrg } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        clicked ? clicked() : (openSnackbar(), sendOrgTripsToDB());
      }}
    >
      <a
        href={isUserOrg && (children === "Offset" || children === "Add to profile without offsetting") ? "/organization" : null}
        className="ButtonLink"
      >
        {children}
      </a>
    </Button>
  );
}

export default button;
