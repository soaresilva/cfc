import React, { useEffect, useState } from "react";
//import "./App.css";
import { deleteTrip } from "../../../Api/trips";
import UserTripSummary from "./UserTripSummary";

export default function UserTripHistory({ setUserTrips, userTrips }) {
    let totalDistance = 0;
    let totalCarbonFootprint = 0;
    let totalCarbonOffset = 0;

    const handleDeleteTrip = async id => {
        try {
            await deleteTrip(id);
            const newTrips = userTrips.filter(trip => trip.id !== id);
            setUserTrips(newTrips);
        } catch (err) {
            console.log("error", err);
        }
    };

    const trips = userTrips.map((trip, index) => {
        totalDistance = totalDistance + trip.distance;
        totalCarbonFootprint = totalCarbonFootprint + trip.carbon_amount;
        totalCarbonOffset = totalCarbonOffset + trip.offset_amount;
        return (
            <div className="user-trip" key={index}>
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
            <UserTripSummary
                totalDistance={totalDistance}
                totalCarbonFootprint={totalCarbonFootprint}
                totalCarbonOffset={totalCarbonOffset}
            />
            <div className="user-history">
                <h3>Trip History</h3>
                {trips}
            </div>
        </div>
    );
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
