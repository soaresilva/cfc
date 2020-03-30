import React, { useState, useEffect } from "react";

export default function AddTripsToEvent({ event_id, org_id, getOrgTrips }) {
  const [showEventlessTrips, setShowEventlessTrips] = useState(false);
  const [eventlessTrips, setEventlessTrips] = useState([]);
  const showEventlessTripsUrl = "/api/org/trips/find/";
  const addTripToEventUrl = "/api/org/trips/add/";

  const addTripToEvent = async (trip_id) => {
    try {
      await fetch(`${addTripToEventUrl}/${trip_id}/${event_id}`);
      getOrgTrips();
      showTrips();
    } catch (err) {
      console.log("addTripToEvent error", err);
    }
  };

  const showTrips = async () => {
    setShowEventlessTrips(!showEventlessTrips);
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

  const trips = eventlessTrips.map((trip, index) => {
    return (
      <div key={index}>
        <p>
          {trip.airport_from}-{trip.airport_to}
        </p>
        <em>{trip.flight_date}</em>
        <button onClick={(trip_id) => addTripToEvent(trip.id)}>add trip</button>
      </div>
    );
  });

  return (
    <div>
      {eventlessTrips.length !== 0 ? <button onClick={showTrips}>Add trip to this event</button> : ""}
      {/* <button onClick={showTrips}>Add trip to this event</button> */}

      {showEventlessTrips ? trips : ""}
    </div>
  );
}
