import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./FlightSearch.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../components/UI/Button/Button";
import FlightSection from "../FlightSection/FlightSection";
import SearchBarTo from "../../components/Searchbars/SearchbarTo";
import SearchBarFrom from "../../components/SearchBars/SearchBarFrom";
import OffsetSection from "../OffsetSection/OffsetSection";

import searchFlights from "../../functions/searchFlights";

const FlightSearch = (props) => {
  const { airportFrom, airportTo } = props;
  const [numberOfLayovers, setNumberOfLayovers] = useState(2);
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);

  const directFlightsClickHandler = (event) => {
    if (event.target.checked) {
      setNumberOfLayovers(0);
    } else {
      setNumberOfLayovers(2);
    }
  };

  const searchFlightHandler = () => {
    setLoading(!loading);
    if (airportFrom && airportTo) {
      getFlightsHandler();
    }
  };

  const getFlightsHandler = async () => {
    const data = await searchFlights(airportFrom, airportTo, numberOfLayovers);
    setFlightData(data);
    setLoading(false);
  };

  return (
    // Selecting a flight
    <div className="FlightSearch">
      <div className="SearchSection">
        <div className="FlightSearchTitle">
          <h1>Calculate and offset your Emissions!</h1>
          <h1 className="Blue">Flight Explorer</h1>
          <div className="Dropdown">
            <SearchBarFrom></SearchBarFrom>
            <SearchBarTo />
            <div className="DF">
              <div className="CheckboxOption">
                <label>Direct flights only:</label>
                <Checkbox onChange={directFlightsClickHandler} inputProps={{ "aria-label": "secondary checkbox" }} />
              </div>
              <div className="CheckboxOption">
                <label>Flights with layover:</label>
                <Checkbox color="primary" inputProps={{ "aria-label": "primary checkbox" }} />
              </div>
            </div>
            <Button clicked={searchFlightHandler}>Search</Button>
          </div>
        </div>
        <FlightSection flightData={flightData} loading={loading} />
      </div>
      {/* Offset options */}
      <OffsetSection />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    airportTo: state.airportTo,
    airportFrom: state.airportFrom
  };
};

export default connect(mapStateToProps)(FlightSearch);
