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

function CustomizedSnackbar({ opened, clicked, userId, wasAdded}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {userId ? 
        (<Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
          <Alert onClose={clicked} severity="success">
            Successfully added to profile!
          </Alert>
          </Snackbar>
        ) : 
        (<Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
          <Alert onClose={clicked} severity="info">
            Sign in to save the current trip.
          </Alert>
      </Snackbar>
        )}
        
      {/* {wasAdded ? <Snackbar open={opened} autoHideDuration={3500} onClose={clicked}>
          <Alert severity="success">Trip added!</Alert> 
      </Snackbar> : ""}*/}
    </div> 
  );
}

export default CustomizedSnackbar;
