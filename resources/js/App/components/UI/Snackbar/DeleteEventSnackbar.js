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

function DeleteEventSnackbar({ opened, clicked}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
          <Alert severity="success">Event deleted!</Alert> 
      </Snackbar> 
    </div>
  );
}

export default DeleteEventSnackbar;
