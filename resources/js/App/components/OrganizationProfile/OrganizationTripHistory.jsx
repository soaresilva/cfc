import React, { useState, useEffect } from "react";
import { deleteTrip, deleteEventAndTrips} from "../../../Api/trips";
import OrganizationEventSummary from "./OrganizationEventSummary";

export default function OrganizationTripHistory({ event_id, setOrgEvents, orgEvents }) {
    const [orgTrips, setOrgTrips] = useState([]);
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

    const handleDeleteTrip = async id => {
        try {
            await deleteTrip(id);
            const newTrips = orgTrips.filter(trip => trip.id !== id);
            setOrgTrips(newTrips);
        } catch (err) {
            console.log("error", err);
        }
    };

    const handleDeleteEventAndTrips = async id => {
        try {
            await deleteEventAndTrips(id);
            const newEvents = orgEvents.filter(event => event.id !== id);
            setOrgEvents(newEvents);
        } catch (err) {
            console.log("error", err);
        }
    }

    const trips = orgTrips.map((trip, index) => {
        totalDistance = totalDistance + trip.distance;
        totalCarbonFootprint = totalCarbonFootprint + trip.carbon_amount;
        totalCarbonOffset = totalCarbonOffset + trip.offset_amount;
        return (
            <div className="org-trip" key={index}>
                <h4>
                    {trip.airport_from} - {trip.airport_to}
                </h4>
                <p>
                    <em>{trip.flight_date}</em>
                </p>
                <h5>Distance:</h5>
                <p>{trip.distance} KM</p>
                <h5>Carbon Footprint:</h5>
                <p>{trip.carbon_amount}</p>
                <h5>Carbon Offset:</h5>
                <p> {trip.offset_amount}</p>
                <DeleteTripButton
                    trip={trip}
                    handleDeleteTrip={handleDeleteTrip}
                />
            </div>
        );
    });
    return (
    <div>
        <OrganizationEventSummary totalDistance={totalDistance} totalCarbonFootprint={totalCarbonFootprint} totalCarbonOffset={totalCarbonOffset}  />
        {trips}
        <DeleteEventButton handleDeleteEventAndTrips={handleDeleteEventAndTrips} event_id={event_id}/> 
    </div>)
}

function DeleteTripButton({ handleDeleteTrip, trip }) {
    return (
        <button
            className="delete-trip-button"
            onClick={() => handleDeleteTrip(trip.id)}
        >
            delete trip
        </button>
    );
}

function DeleteEventButton({ handleDeleteEventAndTrips, event_id }) {
    return (
        <button
            className="delete-event-button"
            onClick={() => handleDeleteEventAndTrips(event_id)}
        >
            delete event
        </button>
    );
}
