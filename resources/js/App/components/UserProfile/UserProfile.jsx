import React, { useEffect, useState } from "react";
//import "./App.css";
import UserTripHistory from "./UserTripHistory";

const Spinner = () => {
    return <h1>spinner</h1>;
};

export default function UserProfile({ user_id }) {
    const [userTrips, setUserTrips] = useState([]);
    const getTripsUrl = "/api/trips/";

    const getTrips = async () => {
        try {
            const response = await fetch(`${getTripsUrl}${user_id}`);
            const data = await response.json();
            console.log("data", data);
            setUserTrips(data);
        } catch (err) {
            console.log("fetchTracks error", err);
        }
    };
    useEffect(() => {
        getTrips();
    }, []);

    return (
        <div>
            {!userTrips ? (
                <Spinner />
            ) : (
                <UserTripHistory
                    setUserTrips={setUserTrips}
                    userTrips={userTrips}
                />
            )}
        </div>
    );
}
