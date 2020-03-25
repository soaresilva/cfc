import React, { useEffect, useState } from 'react';
import '../../../../sass/app.scss';
//import './App.css';
import OrganizationTripHistory from './OrganizationTripHistory';

export default function OrganizationEventHistory({orgEvents, setOrgEvents}) {
  const [showOrgTrips, setShowOrgTrips] = useState(false);


  const handleShowOrgTrips = () => {
    setShowOrgTrips(!showOrgTrips);
    //do we want the rest of the trips to go away when showing the trips?
  }

  const events = orgEvents.map((event, index) => {
    return (
      <div className="org-event" key={index}>
      <h4>
          {event.name}
      </h4>
      <p>
          <em>{event.date}</em>
      </p>
      <button onClick={handleShowOrgTrips} className="showOrgTripsButton">See trips</button>
      {showOrgTrips ? <OrganizationTripHistory event_id={event.id} /> : ""}
      
  </div>
    )
  })
  return (
    <div >
      {events}
    </div>
  )
}