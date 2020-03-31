import React, { useState, useEffect } from "react";
import { deleteTrip, deleteEventAndTrips } from "../../../Api/trips";
import OrganizationEventSummary from "./OrganizationEventSummary";
import AddTripsToEvent from "./AddTripsToEvent";
import { useStyles, StyledTableCell, StyledTableRow } from "../UI/Tables/tables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OrganizationTripHistory({ event_id, setOrgEvents, orgEvents, org_id, setShowOrgTrips }) {
  const [orgTrips, setOrgTrips] = useState([]);
  const classes = useStyles();
  let totalDistance = 0;
  let totalCarbonFootprint = 0;
  let totalCarbonOffset = 0;
  const getOrgTripsUrl = "/api/events/trips/";

  const getOrgTrips = async () => {
    try {
      const response = await fetch(`${getOrgTripsUrl}${event_id}`);
      const data = await response.json();
      setOrgTrips(data);
    } catch (err) {
      console.log("getOrgTrips error", err);
    }
  };
  useEffect(() => {
    getOrgTrips();
  }, []);

  const handleDeleteTrip = async (id) => {
    try {
      await deleteTrip(id);
      const newTrips = orgTrips.filter((trip) => trip.id !== id);
      setOrgTrips(newTrips);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleDeleteEventAndTrips = async (id) => {
    try {
      await deleteEventAndTrips(id);
      const newEvents = orgEvents.filter((event) => event.id !== id);
      setOrgEvents(newEvents);
      setShowOrgTrips(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  const trips = orgTrips.map((trip, index) => {
    totalDistance = totalDistance + trip.distance;
    totalCarbonFootprint = Number((totalCarbonFootprint + trip.carbon_amount).toFixed(3));
    totalCarbonOffset = Number((totalCarbonOffset + trip.offset_amount).toFixed(3));
    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row">
          {trip.airport_from} - {trip.airport_to}
        </TableCell>
        <TableCell align="right">{trip.distance}</TableCell>
        <TableCell align="right">{trip.carbon_amount}</TableCell>
        <TableCell align="right">{trip.offset_amount}</TableCell>
        <TableCell align="right">{trip.flight_date} </TableCell>
        <TableCell align="right">
          <DeleteTripButton trip={trip} handleDeleteTrip={handleDeleteTrip} />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      {orgTrips.length === 0 ? (
        <p>No trips found</p>
      ) : (
        <div>
          <OrganizationEventSummary
            totalDistance={totalDistance}
            totalCarbonFootprint={totalCarbonFootprint}
            totalCarbonOffset={totalCarbonOffset}
          />
          <br />
          <TableContainer component={Paper}>
            <h4 align="left">Trips</h4>
            <Table className={classes.table} aria-label="simple table">
              <TableHead align="left">
                <StyledTableRow>
                  <StyledTableCell>Trip Route</StyledTableCell>
                  <StyledTableCell align="right">Distance (km) </StyledTableCell>
                  <StyledTableCell align="right">Carbon Footprint (tons)</StyledTableCell>
                  <StyledTableCell align="right">Carbon Offset (tons)</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>{trips}</TableBody>
            </Table>
          </TableContainer>
          <br />
        </div>
      )}
      <DeleteEventButton handleDeleteEventAndTrips={handleDeleteEventAndTrips} event_id={event_id} />


      {event_id ? <AddTripsToEvent event_id={event_id} org_id={org_id} getOrgTrips={getOrgTrips} /> : ""}
    </div>
  );
}

function DeleteTripButton({ handleDeleteTrip, trip }) {
  return (
    <button className="delete-trip-button" onClick={() => handleDeleteTrip(trip.id)}>
      delete trip
    </button>
  );
}

function DeleteEventButton({ handleDeleteEventAndTrips, event_id }) {
  return (
    <button className="delete-event-button" onClick={() => handleDeleteEventAndTrips(event_id)}>
      delete event
    </button>
  );
}
