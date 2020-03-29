import React, { useEffect, useState } from "react";
//import "./App.css";
import "../../../../sass/app.scss";
import OrganizationEventHistory from "./OrganizationEventHistory";
import OrganizationAddEvent from "./OrganizationAddEvent";
import { Spinner } from "./../UI/Spinner/Spinner";

export default function OrganizationProfile({ org_id }) {
  const [orgEvents, setOrgEvents] = useState([]);
  const getOrgEventsWithTripsUrl = "/api/org/trips/";
  let totalCarbonFootprint = 0;
  let totalDistance = 0;
  let totalCarbonOffset = 0;

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

  const events = orgEvents.map((event, index) => {
    const trips = event.trips.map((trip) => {
      totalCarbonFootprint = totalCarbonFootprint + trip.carbon_amount;
      totalCarbonOffset = totalCarbonOffset + trip.offset_amount;
      totalDistance = totalDistance + trip.distance;
    });
  });

  console.log("org id", org_id);
  return (
    <div className="org-profile">
      {orgEvents.length === 0 ? (
        <div>{Spinner}</div>
      ) : (
        <>
          <div className="org-summary">
            <h3>Summary: </h3>
            <p>Total Number of Events: {orgEvents.length}</p>
            <h5>Total Distance:</h5>
            <p>{totalDistance} KM</p>
            <h5>Total Carbon Footprint:</h5>
            <p>{totalCarbonFootprint}</p>
            <h5>Total Carbon Offset:</h5>
            <p> {totalCarbonOffset}</p>
          </div>

          <h3>Event History</h3>
          <OrganizationEventHistory setOrgEvents={setOrgEvents} orgEvents={orgEvents} org_id={org_id} />
        </>
      )}
      <OrganizationAddEvent org_id={org_id} />
    </div>
  );
}
