import React, { useEffect, useState } from "react";
import "../../../../sass/app.scss";
import OrganizationEventHistory from "./OrganizationEventHistory";
import OrganizationAddEvent from "./OrganizationAddEvent";
import Instructions from "./Instructions";
import TotalSummary from './TotalSummary';


export default function OrganizationProfile({ org_id }) {
  const [orgEvents, setOrgEvents] = useState([]);
  const getOrgEventsWithTripsUrl = "/api/org/trips/";

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

  return (
    <div className="org-profile">
      {orgEvents.length === 0 ? (
        <div>"loading"</div>
      ) : (
        <>
        <TotalSummary orgEvents={orgEvents} org_id={org_id}/>
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
