import React from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const useStyles = makeStyles({
  table: {
    //minWidth: "75vw",
    padding:0,
    fontFamily: "Nunito, sans-serif"

  }

});

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: "1em",
    fontFamily: "Nunito, sans-serif"
  }
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    fontFamily: "Nunito, sans-serif",
    "&:nth-of-type(odd)": {
       backgroundColor: theme.palette.background.default
      //backgroundColor: "#62684d"
    }
  },
  body : {
    fontFamily: "Nunito, sans-serif"
  },
  heading : {
    fontFamily: "Nunito, sans-serif"
  }
}))(TableRow);


export const expansionStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   fontWeight: theme.typography.fontWeightRegular
  // }
  heading: {
    // fontSize: theme.typography.pxToRem(14),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontFamily: "Nunito, sans-serif"
  },
  secondaryHeading: {
    // fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    padding: "0 16px 0 16px",
    fontFamily: "Nunito, sans-serif"

  }
}));
