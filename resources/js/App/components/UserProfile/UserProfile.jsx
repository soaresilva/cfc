import React, { useEffect, useState } from "react";
//import "./App.css";
import UserTripHistory from "./UserTripHistory";
import {spinner} from './../UI/Spinner/Spinner';

// const Spinner = () => {
//     return <h1>spinner</h1>;
// };

export default function UserProfile({ user_id }) {
    const [userTrips, setUserTrips] = useState([]);
    const getUserTripsUrl = "/api/trips/";

    const getUserTrips = async () => {
        try {
            const response = await fetch(`${getUserTripsUrl}${user_id}`);
            const data = await response.json();
            console.log("data", data);
            setUserTrips(data);
        } catch (err) {
            console.log("fetchTracks error", err);
        }
    };
    useEffect(() => {
        getUserTrips();
    }, []);

    return (
        <div>
            {!userTrips ? (
                {spinner}
            ) : (
                <UserTripHistory
                    setUserTrips={setUserTrips}
                    userTrips={userTrips}
                />
            )}
        </div>
    );
}
