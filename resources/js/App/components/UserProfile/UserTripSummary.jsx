import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//import "./App.css";

export default function UserTripSummary({ totalDistance, totalCarbonFootprint, totalCarbonOffset }) {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      overflowX: "unset",
      fontFamily: "Nunito, sans-serif",
      fontSize: "1rem",
      fontWeight: "600"
    },
    body: {
      fontSize: 16,
      fontFamily: "Nunito, sans-serif"
    }
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  }))(TableRow);

  function createData(name, amount) {
    return { name, amount };
  }

  const rows = [
    createData("Total Distances Traveled", totalDistance + " km"),
    createData("Total Carbon Footprint", totalCarbonFootprint + " CO2/t"),
    createData("Total Carbon Offset", totalCarbonOffset + " CO2/t")
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 550
    }
  });

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Trips summary</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <span>{row.name}</span>
              </StyledTableCell>
              <StyledTableCell align="right">
                <span>{row.amount}</span>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
