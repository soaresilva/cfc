import React, { useEffect, useState } from "react";

import "./FlightSection.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../../functions/searchFlights";

const FlightSection = (props) => {
  const { submitted, airportFrom, airportTo, direct } = props;
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitted) setLoading(true);
    if (airportFrom && airportTo && submitted) {
      getFlightsHandler();
    }
  }, [props]);

  const getFlightsHandler = async () => {
    const data = await searchFlights(airportFrom, airportTo, direct);
    console.log("flightData", data);
    setFlightData((prevFlightData) => {
      return prevFlightData.concat(data);
    });
    setLoading(false);
  };

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
