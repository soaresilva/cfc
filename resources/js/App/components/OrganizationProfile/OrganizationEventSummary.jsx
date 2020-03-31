import React from "react";
import "../../../../sass/app.scss";
import {useStyles, StyledTableCell, StyledTableRow} from '../UI/Tables/tables';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OrganizationEventSummary({ totalDistance, totalCarbonFootprint, totalCarbonOffset }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
    <h3 align="left">Event Summary</h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead align="left">            
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

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700
//   }
// });

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white
//   },
//   body: {
//     fontSize: 14
//   }
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.background.default
//     }
//   }
// }))(TableRow);
