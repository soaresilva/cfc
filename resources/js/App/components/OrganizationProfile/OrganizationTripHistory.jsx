import React, { useState, useEffect } from "react";
import "../../../../sass/app.scss";
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
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteEventSnackbar from "../UI/Snackbar/DeleteEventSnackbar";
import DeleteTripSnackbar from "../UI/Snackbar/DeleteTripSnackbar";




export default function OrganizationTripHistory({ event_id, setOrgEvents, orgEvents, org_id, setShowOrgTrips }) {
  const [orgTrips, setOrgTrips] = useState([]);

  const [openSnackbarDeleteEvent, setOpenSnackbarDeleteEvent] = useState(false);
  const [openSnackbarDeleteTrip, setOpenSnackbarDeleteTrip] = useState(false);


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


  const handleOpenSnackbarDeleteEvent = () => {
    setOpenSnackbarDeleteEvent(true);
  };

  const handleCloseSnackbarDeleteEvent = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarDeleteEvent(false);
  };

  const handleOpenSnackbarDeleteTrip = () => {
    setOpenSnackbarDeleteTrip(true);
  };

  const handleCloseSnackbarDeleteTrip = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarDeleteTrip(false);
  };


  const trips = orgTrips.map((trip, index) => {
    totalDistance = totalDistance + trip.distance;
    totalCarbonFootprint = Number((totalCarbonFootprint + trip.carbon_amount).toFixed(3));
    totalCarbonOffset = Number((totalCarbonOffset + trip.offset_amount).toFixed(3));
    return (
      <TableRow key={index}>
        <StyledTableCell className="org_trips_cells" component="th" scope="row">
          {trip.airport_from} - {trip.airport_to}
        </StyledTableCell>
        <StyledTableCell className="org_trips_cells">{trip.distance}</StyledTableCell>
        <StyledTableCell className="org_trips_cells">{trip.carbon_amount}</StyledTableCell>
        <StyledTableCell className="org_trips_cells">{trip.offset_amount}</StyledTableCell>
        <StyledTableCell className="org_trips_cells">{trip.flight_date}</StyledTableCell>
        <StyledTableCell className="org_trips_cells"> <DeleteTripButton trip={trip} handleDeleteTrip={handleDeleteTrip} handleOpenSnackbarDeleteTrip={handleOpenSnackbarDeleteTrip} /></StyledTableCell>
      </TableRow>
    );
  });

  return (
    <div className="org_trips_table">
      {orgTrips.length === 0 ? (
        <p>No trips found</p>
      ) : (
        <div className="org_events_and_trips">
          <OrganizationEventSummary
            totalDistance={totalDistance}
            totalCarbonFootprint={totalCarbonFootprint}
            totalCarbonOffset={totalCarbonOffset}
          />
          <br />
          <TableContainer component={Paper} className="trip_history_table">
            <h5 align="left">Trips</h5>
            <Table className={classes.table} aria-label="customized table">
              <TableHead className="trip_headings" align="left">
                <StyledTableRow>
                  <StyledTableCell className="trip_headings">Trip Route</StyledTableCell>
                  <StyledTableCell className="trip_headings">Distance <p>(km)</p> </StyledTableCell>
                  <StyledTableCell className="trip_headings">Carbon Footprint <p>(tons)</p></StyledTableCell>
                  <StyledTableCell className="trip_headings">Carbon Offset <p>(tons)</p></StyledTableCell>
                  <StyledTableCell className="trip_headings">Date</StyledTableCell>
                  <StyledTableCell className="trip_headings"></StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>{trips}</TableBody>
            </Table>
          </TableContainer>
          <br />
        </div>
      )}
      {event_id ? <AddTripsToEvent event_id={event_id} org_id={org_id} getOrgTrips={getOrgTrips} /> : ""}
      <DeleteEventButton handleDeleteEventAndTrips={handleDeleteEventAndTrips} event_id={event_id} handleOpenSnackbarDeleteEvent={handleOpenSnackbarDeleteEvent}/>
      <DeleteEventSnackbar opened={openSnackbarDeleteEvent} clicked={handleCloseSnackbarDeleteEvent}/>
      <DeleteTripSnackbar opened={openSnackbarDeleteTrip} clicked={handleCloseSnackbarDeleteTrip}/>

    </div>
  );
}

function DeleteTripButton({ handleDeleteTrip, trip, handleOpenSnackbarDeleteTrip }) {
  return (
    <DeleteIcon onClick={() => {handleDeleteTrip(trip.id), handleOpenSnackbarDeleteTrip()}} /> 
  );
}

function DeleteEventButton({ handleDeleteEventAndTrips, event_id, handleOpenSnackbarDeleteEvent }) {
  return (
    <div className="delete_event" onClick={() => {handleDeleteEventAndTrips(event_id), handleOpenSnackbarDeleteEvent() }}>
    <DeleteIcon  /> 
    delete event
    </div>
  );
}



