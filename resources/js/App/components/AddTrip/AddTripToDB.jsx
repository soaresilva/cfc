import React from "react";
import { connect } from "react-redux";
import ButtonBlue from "./../UI/Button/ButtonBlue";
import ButtonRed from "./../UI/Button/ButtonRed";

export function AddTripToDB({
  totalDistance,
  dateDepart,
  airportFrom,
  airportTo,
  userId,
  isUserOrg,
  totalCO2amount,
  children,
  offset,
  clicked
}) {
  const sendOrgTripsUrl = "/api/org/trips/";
  const sendUserTripsUrl = "/api/trips/";

  const sendUserTripsToDB = async () => {
    console.log("adding trip working");
    console.log("user-id", userId);
    const response = await fetch(
      `${sendUserTripsUrl}${userId}/${dateDepart}/${airportFrom}/${airportTo}/${totalDistance}/${totalCO2amount}/${offset}`
    );
    await response.json();
    console.log("send user info", response);
  };

  const sendOrgTripsToDB = async () => {
    console.log("adding trip working");
    console.log("user-id", userId);
    const response = await fetch(
      `${sendOrgTripsUrl}${userId}/${dateDepart}/${airportFrom}/${airportTo}/${totalDistance}/${totalCO2amount}/${offset}`
    );
    await response.json();
    console.log("send user info", response);
  };

  return (
    <div>
      {isUserOrg ? (
        <ButtonRed sendOrgTripsToDB={sendOrgTripsToDB} openSnackbar={clicked}>
          {children}
        </ButtonRed>
      ) : (
        <ButtonBlue sendUserTripsToDB={sendUserTripsToDB} openSnackbar={clicked}>
          {children}
        </ButtonBlue>
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
