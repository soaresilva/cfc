import React, { useEffect, useState } from "react";
import "../../../../sass/app.scss";
import OrganizationEventHistory from "./OrganizationEventHistory";
import OrganizationAddEvent from "./OrganizationAddEvent";
import Instructions from "./Instructions";
import { useStyles, StyledTableCell, StyledTableRow } from "../UI/Tables/tables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
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
        <div>"loading"</div>
      ) : (
        <>
          <TableContainer component={Paper}>
            <h3 align="left">Summary</h3>
            <Table className={classes.table} aria-label="customized table">
              <TableHead align="left">
                <StyledTableRow>
                  <StyledTableCell>Total Number of Events</StyledTableCell>
                  <StyledTableCell>Total Distances Traveled</StyledTableCell>
                  <StyledTableCell>Total Carbon Footprint</StyledTableCell>
                  <StyledTableCell>Total Carbon Offset</StyledTableCell>
                </StyledTableRow>
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

          {/* <h3>Event History</h3> */}
          <OrganizationEventHistory setOrgEvents={setOrgEvents} orgEvents={orgEvents} org_id={org_id} />
        </>
      )}
      <br />
      <OrganizationAddEvent org_id={org_id} getEvents={getEvents} />
      <div className="org-help">
        <Instructions />
      </div>
    </div>
  );
}
