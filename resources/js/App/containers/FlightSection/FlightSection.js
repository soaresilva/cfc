import React, { useEffect, useState } from "react";

import "./FlightSection.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";

const FlightSection = (props) => {
  const { flightData, loading } = props;
  
  let flight = null;
  if (loading) {
    flight = <Spinner />;
  } else if (flightData.length === 0) {
    flight = (
      <h3 className="Warning">
        <i className="fas fa-plane-slash"></i> Warning: Flights might be cancelled due to COVID-19
      </h3>
    );
  } else {
    flight = flightData.map((flight) => {
      return <Flight key={flight.id} {...flight} />;
    });
  }

  return <div className="FlightSection">{flight}</div>;
};

export default FlightSection;
