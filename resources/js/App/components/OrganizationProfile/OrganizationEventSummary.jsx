import React from "react";
import "../../../../sass/app.scss";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OrganizationEventSummary({ totalDistance, totalCarbonFootprint, totalCarbonOffset }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead align="left">
            <h3>Event Summary</h3>
          <TableRow>
            <StyledTableCell>Total Distances Traveled</StyledTableCell>
            <StyledTableCell align="right">Total Carbon Footprint (tons)</StyledTableCell>
            <StyledTableCell align="right">Total Carbon Offset (tons)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {totalDistance}
            </StyledTableCell>
            <StyledTableCell align="right">{totalCarbonFootprint}</StyledTableCell>
            <StyledTableCell align="right">{totalCarbonOffset}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
