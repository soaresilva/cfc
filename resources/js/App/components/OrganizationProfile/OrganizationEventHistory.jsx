import React, { useEffect, useState } from 'react';
import '../../../../sass/app.scss';
//import './App.css';
import OrganizationTripHistory from './OrganizationTripHistory';

export default function OrganizationEventHistory({orgEvents, setOrgEvents}) {
  const [showOrgTrips, setShowOrgTrips] = useState((new Array(orgEvents.length)).fill(false) );


  const handleShowOrgTrips = (index) => {
    setShowOrgTrips(showOrgTrips.map((s, i) => i === index ? !s : s));
    console.log('working');
    //do we want the rest of the trips to go away when showing the trips?
  }

  console.log('show', orgEvents);

  const events = orgEvents.map((event, index) => {
    return (
      <div className="org-event" key={index}>
      <h4>
          {event.name}
      </h4>
      <p>
          <em>{event.date}</em>
      </p>
      <button onClick={()=>handleShowOrgTrips(index)} className="showOrgTripsButton">See trips</button>
      {showOrgTrips[index] ? <OrganizationTripHistory event_id={event.id} orgEvents={orgEvents} setOrgEvents={setOrgEvents} /> : ""}
      
  </div>
    )
  })
  return (
    <div >
      {events}
    </div>
  )
}