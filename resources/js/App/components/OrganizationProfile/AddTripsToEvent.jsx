import React, {useState, useEffect} from 'react';

export default function AddTripsToEvent({event_id, org_id }) {
  const [showEventlessTrips, setShowEventlessTrips] = useState(false);
  const [eventlessTrips, setEventlessTrips]= useState([]);
  const showEventlessTripsUrl = '/api/org/trips/find/';
  const addTripToEventUrl = '/api/org/trips/add/';


  const addTripToEvent = async (trip_id) => {
    try {
      const response =  fetch(`${addTripToEventUrl}/${trip_id}/${event_id}`);
     // const data = await response.json();
      //setOrgEvents(data);
    } catch (err) {
      console.log("getEvents error", err);
    } 
  
  }

  const showTrips = async () => {
    console.log('adding working')
    try {
      const response = await fetch(`${showEventlessTripsUrl}${org_id}`);
      const data = await response.json();
      setEventlessTrips(data);
      setShowEventlessTrips(!showEventlessTrips);

    } catch (err) {
      console.log("getEvents error", err);
    } 
  }

  // useEffect(()=> {
  //   showTrips();
  // },[]);

  console.log('eventless trips', eventlessTrips);


  // const showEventlessTripList= () => {
  //   console.log('working')
  //   setShowEventlessTrips(!showEventlessTrips);
  // }

  const trips = eventlessTrips.map((trip, index) => {
    return (
      <div key={index}>
        <p>{trip.airport_from}- {trip.airport_to}</p>
        <em>{trip.flight_date}</em>
        <button onClick={(trip_id)=> addTripToEvent(trip.id)}>add trip</button>
      </div>
    )
  })


  return (
    <div>
      <button onClick={showTrips}>Add trip to this event</button>
      {showEventlessTrips ? trips : ""}
    </div>
  )
}