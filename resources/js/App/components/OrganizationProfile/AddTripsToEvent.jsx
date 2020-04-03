import React, { useState, useEffect } from "react";
import "../../../../sass/app.scss";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import OrgAddTripSnackbar from "../UI/Snackbar/OrgAddTripSnackbar";
import DeleteTripSnackbar from "../UI/Snackbar/DeleteTripSnackbar";

export default function AddTripsToEvent({ event_id, org_id, getOrgTrips }) {
  const [showEventlessTrips, setShowEventlessTrips] = useState(false);
  const [eventlessTrips, setEventlessTrips] = useState([]);
  const [wasAdded, setWasAdded] = useState(false);
  const [wasDeleted, setWasDeleted] = useState(false);
  const [openSnackbarAdd, setOpenSnackbarAdd] = useState(false);
  const [openSnackbarDeleteTrip, setOpenSnackbarDeleteTrip] = useState(false);

  const showEventlessTripsUrl = "/api/org/trips/find/";
  const addTripToEventUrl = "/api/org/trips/add/";
  const deleteEventlessTripUrl = "/api/org/trips/delete/";

  const addTripToEvent = async (trip_id) => {
    try {
      await fetch(`${addTripToEventUrl}${trip_id}/${event_id}`);
      getOrgTrips();
      showTrips();
      setWasAdded(true);
    } catch (err) {
      console.log("addTripToEvent error", err);
    }
  };

  const handleShowTripsClick = async () => {
    setShowEventlessTrips(!showEventlessTrips);
    showTrips();
  };

  const showTrips = async () => {
    const response = await fetch(`${showEventlessTripsUrl}${org_id}`);
    const data = await response.json();
    setEventlessTrips(data);
  };

  useEffect(() => {
    fetch(`${showEventlessTripsUrl}${org_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEventlessTrips(data);
      });
  }, []);

  const deleteEventlessTrip = async (trip_id) => {
    try {
      await fetch(`${deleteEventlessTripUrl}${trip_id}`);
      showTrips();
      setWasDeleted(true);
    } catch (err) {
      console.log("deleteEventlessTrip error", err);
    }
  };

  const handleOpenSnackbarAdd = () => {
    setOpenSnackbarAdd(true);
  };

  const handleCloseSnackbarAdd = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarAdd(false);
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

  const trips = eventlessTrips.map((trip, index) => {
    return (
      <div className="add_trips_to_events" key={index}>
        <div className="add_trips_to_events__airport_info">
          <p>
            {trip.airport_from}-{trip.airport_to}
          </p>
          <em>{trip.flight_date}</em>
        </div>
        <AddIcon
          onClick={(trip_id) => {
            addTripToEvent(trip.id), handleOpenSnackbarAdd();
          }}
        />
        <DeleteIcon
          onClick={(trip_id) => {
            deleteEventlessTrip(trip.id), handleOpenSnackbarDeleteTrip();
          }}
        />
        <br />
        <hr />
      </div>
    );
  });

  return (
    <div>
      {eventlessTrips.length !== 0 ? <button onClick={handleShowTripsClick}>Add trip to this event</button> : ""}
      {showEventlessTrips ? trips : ""}
      <div>
        <OrgAddTripSnackbar opened={openSnackbarAdd} clicked={handleCloseSnackbarAdd} wasAdded={wasAdded} />
        <DeleteTripSnackbar opened={openSnackbarDeleteTrip} clicked={handleCloseSnackbarDeleteTrip} wasDeleted={wasDeleted} />
      </div>
    </div>
  );
}
