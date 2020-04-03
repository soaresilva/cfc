import React from "react";
import "../../../../sass/app.scss";
import { useStyles, StyledTableCell, StyledTableRow } from "../UI/Tables/tables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OrganizationEventSummary({ totalDistance, totalCarbonFootprint, totalCarbonOffset }) {
  const classes = useStyles();


  return (
    <div className="event_summary">
    <TableContainer component={Paper}>
      <h4 align="left">Event Summary</h4>
      <Table className={classes.table} aria-label="customized table" className="event_summary_table">
        <TableHead align="left">
          <TableRow >
            <StyledTableCell className="headings">Total Distance Traveled (km)</StyledTableCell>
            <StyledTableCell className="headings" align="right">Total Carbon Footprint (tons)</StyledTableCell>
            <StyledTableCell className="headings" align="right">Total Carbon Offset (tons)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell className="event_summary__content" component="th" scope="row">
              {totalDistance}
            </StyledTableCell>
            <StyledTableCell className="event_summary__content" align="right">{totalCarbonFootprint}</StyledTableCell>
            <StyledTableCell className="event_summary__content" align="right">{totalCarbonOffset}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
