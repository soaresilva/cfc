import React, { useEffect, useState } from "react";
import "../../../../sass/app.scss";
import OrganizationTripHistory from "./OrganizationTripHistory";

export default function OrganizationEventHistory({ orgEvents, setOrgEvents, org_id}) {
  const [showOrgTrips, setShowOrgTrips] = useState(new Array(orgEvents.length).fill(false));

  const handleShowOrgTrips = (index) => {
    setShowOrgTrips(showOrgTrips.map((s, i) => (i === index ? !s : s)));
  };


  const events = orgEvents.map((event, index) => {
    return (
      <div className="org-event" key={index}>
        <h4>{event.name}</h4>
        <p>
          <em>{event.date}</em>
        </p>
        <button onClick={() => handleShowOrgTrips(index)} className="showOrgTripsButton">
          See trips
        </button>
        {showOrgTrips[index] ? <OrganizationTripHistory setShowOrgTrips={setShowOrgTrips[index]} org_id={org_id} event_id={event.id} orgEvents={orgEvents} setOrgEvents={setOrgEvents} /> : ""}
      </div>
    );
  });
  return (
    <div>
      {events}
    </div>
  );
}
