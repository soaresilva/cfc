import React, { useState, useEffect } from "react";
import { deleteTrip } from "../../../Api/trips";

export default function OrganizationTripHistory({ event_id }) {
    const [orgTrips, setOrgTrips] = useState([]);
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

    console.log("org trips", orgTrips);
    const trips = orgTrips.map((trip, index) => {
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
    return <div>{trips}</div>;
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
