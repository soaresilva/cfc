import React, { useEffect, useState } from "react";
import UserTripHistory from "./UserTripHistory/UserTripHistory";
import Spinner from "./../UI/Spinner/Spinner.js";

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
    <div style={{ marginTop: "2rem" }}>
      {!userTrips ? <Spinner /> : <UserTripHistory setUserTrips={setUserTrips} userTrips={userTrips} />}
    </div>
  );
}
