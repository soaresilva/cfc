import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//import "./App.css";
import UserTripHistory from "./UserTripHistory";
import { spinner } from "./../UI/Spinner/Spinner";

// const Spinner = () => {
//     return <h1>spinner</h1>;
// };

export function UserProfile({ user_id, totalDistance, airportFrom, airportTo }) {
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

  return <div>{!userTrips ? { spinner } : <UserTripHistory setUserTrips={setUserTrips} userTrips={userTrips} />}</div>;
}

const mapStateToProps = (state) => {
  return {
    totalDistance: state.distance,
    airportFrom: state.airportFrom,
    airportTo: state.airportTo
  };
};

export default connect(mapStateToProps)(UserProfile);
