import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function CustomizedSnackbar({ opened, clicked, userId }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
        {userId ? (
          <Alert onClose={clicked} severity="success">
            Successfully added to profile!
          </Alert>
        ) : (
          <Alert onClose={clicked} severity="info">
            Sign in to save the current trip.
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export default CustomizedSnackbar;
