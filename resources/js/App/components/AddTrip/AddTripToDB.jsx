import React from "react";
import { connect } from "react-redux";
import ButtonBlue from "./../UI/Button/ButtonBlue";

export function AddTripToDB({ totalDistance, airportFrom, airportTo, userId, isUserOrg, totalCO2amount, children, offset }) {
  const sendOrgTripsUrl = "/api/org/trips/";
  const sendUserTripsUrl = "/api/trips/";

  const sendUserTripsToDB = async () => {
    console.log("adding trip working");
    console.log("user-id", userId);
    const response = await fetch(`${sendUserTripsUrl}${userId}/${airportFrom}/${airportTo}/${totalDistance}/${totalCO2amount}/${offset}`);
    await response.json();
    console.log("send user info", response);
  };

  const sendOrgTripsToDB = async () => {
    console.log("adding trip working");
    console.log("user-id", userId);
    const response = await fetch(`${sendOrgTripsUrl}${userId}/${airportFrom}/${airportTo}/${totalDistance}/${totalCO2amount}/${offset}`);
    await response.json();
    console.log("send user info", response);
  };

  return (
    <div>
      {isUserOrg ? (
        <ButtonBlue clicked={sendOrgTripsToDB}>{children}</ButtonBlue>
      ) : (
        <ButtonBlue clicked={sendUserTripsToDB}>{children}</ButtonBlue>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalDistance: state.distance,
    airportFrom: state.airportFrom,
    airportTo: state.airportTo
  };
};

export default connect(mapStateToProps)(AddTripToDB);
