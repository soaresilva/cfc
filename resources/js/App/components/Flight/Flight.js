import React from "react";
import { connect } from "react-redux";

import "./Flight.css";
import Button from "../UI/Button/ButtonRed";
import { selectFlightDetails } from "../../store/actions/index";
import haversineDistance from "../../functions/haversine";

const flight = (props) => {
  const { cityFrom, cityTo, fly_duration, dTime, price, aTime, route, onSelectFlightDetails } = props;
  const dateDepart = new Date(dTime * 1000).toLocaleDateString('en-GB');
  const timeDepart = new Date(dTime * 1000).toTimeString().slice(0, 18);
  const dateArrival = new Date(aTime * 1000).toLocaleDateString('en-GB').slice(0, 18);
  const timeArrival = new Date(aTime * 1000).toTimeString().slice(0, 18);

  let arrayWithDistances = [];
  let totalDistance = null;
  let stopovers = null;
  let latFrom, latTo, lngFrom, lngTo;
  if (route.length >= 0) {
    stopovers = route.slice(0, route.length - 1).map((stopover) => {
      const randomNum = Math.random();
      return (
        <div key={`${stopover.cityTo}-${randomNum}`}>
          <h3 className="FlightInfo">Stopover:</h3>
          <h6 className="FlightTime">{stopover.cityTo}</h6>
        </div>
      );
    });
    for (const index in route) {
      latFrom = route[index].latFrom;
      latTo = route[index].latTo;
      lngTo = route[index].lngTo;
      lngFrom = route[index].lngFrom;
      totalDistance = haversineDistance(latFrom, latTo, lngFrom, lngTo, arrayWithDistances, totalDistance);
    }
  }


  return (
    <div className="Flight">
      <div>
        <h1 className="FlightTitle">{cityFrom}</h1>
        <h3 className="FlightInfo">Departure:</h3>
        <h4 className="FlightTime">{dateDepart}</h4>
        <h4 className="FlightTime">{timeDepart}</h4>
      </div>
      <div>
        <h1 className="FlightTitle">{cityTo}</h1>
        <h3 className="FlightInfo">Arrival:</h3>
        <h4 className="FlightTime">{dateArrival}</h4>
        <h4 className="FlightTime">{timeArrival}</h4>
      </div>
      <div>
        <h3 className="FlightInfo">Duration:</h3>
        <h4 className="FlightTime">{fly_duration}</h4>
      </div>
      <div>
        <h3 className="FlightInfo">Distance:</h3>
        <h4 className="FlightTime">{totalDistance}km</h4>
      </div>
      <div>
        <h3 className="FlightInfo">Price:</h3>
        <h4 className="FlightTime">€{price}</h4>
      </div>
      <div className="FlightStopovers">{stopovers}</div>
      <Button clicked={(() => onSelectFlightDetails(cityFrom, cityTo, totalDistance, fly_duration, dateDepart))}>Select</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectFlightDetails: (cityFrom, cityTo, distance, fly_duration, dateDepart) =>
      dispatch(selectFlightDetails(cityFrom, cityTo, distance, fly_duration, dateDepart))
  };
};

export default connect(null, mapDispatchToProps)(flight);
