import React, {useState} from "react";
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

function OrgAddTripSnackbar({ opened, clicked, wasAdded}) {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      {wasAdded ? <Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
          <Alert severity="success">Trip added!</Alert> 
      </Snackbar> : ""}


      {/* {wasDeleted ? <Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
          <Alert severity="success">Trip deleted!</Alert> 
      </Snackbar> : ""} */}
    </div>
  );
}

export default OrgAddTripSnackbar;


