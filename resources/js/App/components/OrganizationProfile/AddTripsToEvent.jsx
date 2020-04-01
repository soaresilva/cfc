import React, { useState, useEffect } from "react";
import "../../../../sass/app.scss";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';




export default function AddTripsToEvent({ event_id, org_id, getOrgTrips }) {
  const [showEventlessTrips, setShowEventlessTrips] = useState(false);
  const [eventlessTrips, setEventlessTrips] = useState([]);
  const [wasAdded, setWasAdded] = useState(false);
  const [wasDeleted, setWasDeleted] = useState(false);

  const showEventlessTripsUrl = "/api/org/trips/find/";
  const addTripToEventUrl = "/api/org/trips/add/";
  const deleteEventlessTripUrl= "/api/org/trips/delete/";


  const addTripToEvent = async (trip_id) => {
    try {
      await fetch(`${addTripToEventUrl}/${trip_id}/${event_id}`);
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
  }

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


  const deleteEventlessTrip = async (trip_id) =>  {
    try {
      await fetch(`${deleteEventlessTripUrl}${trip_id}`);
      showTrips();
      setWasDeleted(true);
      alert('trip deleted');
    } catch (err) {
      console.log("deleteEventlessTrip error", err);
    }

   }

  

  const trips = eventlessTrips.map((trip, index) => {
    return (
      <div className="add_trips_to_events" key={index}>
        <div className="add_trips_to_events__airport_info">
          <p>
            {trip.airport_from}-{trip.airport_to}</p> 
            <em>{trip.flight_date}</em>
        </div>
        <AddIcon onClick={(trip_id) => addTripToEvent(trip.id)}/>
        <DeleteIcon onClick={(trip_id) => deleteEventlessTrip(trip.id)}/>
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
      {wasDeleted ?
      <Snackbar autoHideDuration={1000}  >
      <Alert severity="success">Trip deleted!</Alert>
      {/* {wasAdded ? <Alert severity="success">Trip added!</Alert> : ""} */}
      </Snackbar>
       : ""
      }
      {wasAdded ?
      <Snackbar autoHideDuration={3500}  >
      {/* <Alert severity="success">Trip deleted!</Alert> */}
      <Alert severity="success">Trip added!</Alert> 
      </Snackbar>
       : ""
      }
      </div>
    </div>
  );
}
