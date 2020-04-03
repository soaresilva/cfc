import React, { useState, useEffect } from "react";
import "../../../../sass/app.scss";
import { useStyles, StyledTableCell, StyledTableRow } from "../UI/Tables/tables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function TotalSummary({ orgEvents, org_id }) {
  const [allOrgTrips, setAllOrgTrips] = useState([]);
  const getAllOrgTripsUrl = "/api/org/trips/all/";
  const classes = useStyles();
  let totalCarbonFootprint = 0;
  let totalDistance = 0;
  let totalCarbonOffset = 0;

  const getAllOrgTrips = async () => {
    try {
      const response = await fetch(`${getAllOrgTripsUrl}${org_id}`);
      const data = await response.json();
      setAllOrgTrips(data);
    } catch (err) {
      console.log("getAllOrgTrips error", err);
    }
  };
  useEffect(() => {
    getAllOrgTrips();
  }, []);

  let eventNum = 0;
  const events = orgEvents.map((event) => {
    eventNum = eventNum + 1;
  });

  const trips = allOrgTrips.map((trip) => {
    totalCarbonFootprint = Number((totalCarbonFootprint + trip.carbon_amount).toFixed(3));
    totalCarbonOffset = Number((totalCarbonOffset + trip.offset_amount).toFixed(3));
    totalDistance = totalDistance + trip.distance;
  });

  return (
    <div>
      {allOrgTrips !== 0 ? (
        <div>
          <div className="totalSummary">
            <h3 align="left">Summary</h3>
            <RefreshIcon onClick={getAllOrgTrips} />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell className="headings">Total Number of Events</StyledTableCell>
                  <StyledTableCell className="headings">Total Distance Traveled (km) </StyledTableCell>
                  <StyledTableCell className="headings">Total Carbon Footprint (tons)</StyledTableCell>
                  <StyledTableCell className="headings">Total Carbon Offset (tons)</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="center" component="th" scope="row">
                    {eventNum}
                  </StyledTableCell>
                  <StyledTableCell align="center">{totalDistance}</StyledTableCell>
                  <StyledTableCell align="center">{totalCarbonFootprint}</StyledTableCell>
                  <StyledTableCell align="center">{totalCarbonOffset}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
