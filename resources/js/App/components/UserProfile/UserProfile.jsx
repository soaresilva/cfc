import React, { useEffect, useState } from "react";
//import "./App.css";
import UserTripHistory from "./UserTripHistory";

export default function UserProfile({ userID }) {
    const [userTrips, setUserTrips] = useState([]);

    const getTripsUrl = "/api/trips/";

    const getTrips = async () => {
        try {
            const response = await fetch(`${getTripsUrl}2`);
            const data = await response.json();
            console.log("data", data);
            setUserTrips(data);
        } catch (err) {
            console.log("fetchTracks error", err);
        }
    };
    useEffect(() => {
        getTrips();
        console.log("user id", userID);
    }, []);

    return (
        <div>
            <UserTripHistory
                setUserTrips={setUserTrips}
                userTrips={userTrips}
            />
        </div>
    );
}
