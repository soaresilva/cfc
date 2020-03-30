import React, { useEffect, useState } from "react";
import "../../../../sass/app.scss";
import OrganizationEventHistory from "./OrganizationEventHistory";
import OrganizationAddEvent from "./OrganizationAddEvent";
import { Spinner } from "./../UI/Spinner/Spinner";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OrganizationProfile({ org_id }) {
  const [orgEvents, setOrgEvents] = useState([]);
  const getOrgEventsWithTripsUrl = "/api/org/trips/";
  let totalCarbonFootprint = 0;
  let totalDistance = 0;
  let totalCarbonOffset = 0;
  const classes = useStyles();

  const getEvents = async () => {
    try {
      const response = await fetch(`${getOrgEventsWithTripsUrl}${org_id}`);
      const data = await response.json();
      setOrgEvents(data);
    } catch (err) {
      console.log("getEvents error", err);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  const events = orgEvents.map((event, index) => {
    const trips = event.trips.map((trip) => {
      totalCarbonFootprint = totalCarbonFootprint + trip.carbon_amount;
      totalCarbonOffset = totalCarbonOffset + trip.offset_amount;
      totalDistance = totalDistance + trip.distance;
    });
  });

  console.log("org id", org_id);
  return (
    <div className="org-profile">
      {orgEvents.length === 0 ? (
        <div>{Spinner}</div>
      ) : (
        <>
          <TableContainer component={Paper}>
          <h3 align="left">Summary</h3>
            <Table className={classes.table} aria-label="customized table">
              <TableHead align="left">
                <TableRow>
                  <StyledTableCell>Total Number of Events</StyledTableCell>
                  <StyledTableCell>Total Distances Traveled</StyledTableCell>
                  <StyledTableCell>Total Carbon Footprint</StyledTableCell>
                  <StyledTableCell>Total Carbon Offset</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="center" component="th" scope="row">
                    {orgEvents.length}
                  </StyledTableCell>
                  <StyledTableCell align="center">{totalDistance}</StyledTableCell>
                  <StyledTableCell align="center">{totalCarbonFootprint}</StyledTableCell>
                  <StyledTableCell align="center">{totalCarbonOffset}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <h3>Event History</h3>
          <OrganizationEventHistory setOrgEvents={setOrgEvents} orgEvents={orgEvents} org_id={org_id} />
        </>
      )}
      <OrganizationAddEvent org_id={org_id} getEvents={getEvents} />
    </div>
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
