import React, { useState } from "react";
import { connect } from "react-redux";

import "./FlightSearch.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../Components/UI/Button/ButtonRed";
import FlightSection from "../FlightSection/FlightSection";
import SelectAirportDestination from "../../Components/SelectAirports/SelectAirportDestination";
import SelectAirportOrigin from "../../Components/SelectAirports/SelectAirportOrigin";
import OffsetSection from "../OffsetSection/OffsetSection";
import DatePickerTo from "./../../Components/DatePicker/DatePickerTo";
import DatePickerFrom from "./../../Components/DatePicker/DatePickerFrom";
import Select from "../../Components/UI/Select/Select";
import searchFlights from "../../functions/searchFlights";

const FlightSearch = (props) => {
  const { airportFrom, airportTo, dateFrom, dateTo, quantity } = props;
  const [numberOfLayovers, setNumberOfLayovers] = useState(2);
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [economyClass, setEconomyClass] = useState(true);
  const [businessClass, setBusinessClas] = useState(false);

  const directFlightsClickHandler = (event) => {
    if (event.target.checked) {
      setNumberOfLayovers(0);
    } else {
      setNumberOfLayovers(2);
    }
  };

  const economyClassClickHandler = (event) => {
    if (event.target.checked) {
      setEconomyClass(true);
    } else {
      setEconomyClass(false);
    }
  };
  const businessClassClickHandler = (event) => {
    if (event.target.checked) {
      setBusinessClas(true);
    } else {
      setBusinessClas(false);
    }
  };

  const searchFlightHandler = () => {
    setSubmitted(false);
    if (airportFrom.trim() && airportTo.trim()) {
      setLoading(!loading);
      if (airportFrom && airportTo) {
        getFlightsHandler();
      }
    }
  };

  const getFlightsHandler = async () => {
    try {
      const data = await searchFlights(airportFrom, airportTo, numberOfLayovers, dateFrom, dateTo);
      setFlightData(data.data);
      setLoading(false);
      setSubmitted(true);
    } catch {
      throw new Error("Could not find flights");
    }
  };

  return (
    // Selecting a flight
    <div className="FlightSearch">
      <div className="SearchSection">
        <div className="FlightSearchTitle">
          <h1>Calculate and offset your Emissions!</h1>
          <h1 className="Blue">Flight Explorer</h1>
          <div className="Dropdown">
            <SelectAirportOrigin />
            <SelectAirportDestination />
            <DatePickerFrom />
            <DatePickerTo />
            <Select />
            <Button clicked={searchFlightHandler}>Search</Button>
          </div>
          <div className="CheckboxOption">
            <label>Direct flights only:</label>
            <Checkbox onChange={directFlightsClickHandler} inputProps={{ "aria-label": "secondary checkbox" }} />
            <label>Economy class:</label>
            <Checkbox onChange={economyClassClickHandler} color="primary" inputProps={{ "aria-label": "primary checkbox" }} />
            <label>Business class:</label>
            <Checkbox onChange={businessClassClickHandler} color="primary" inputProps={{ "aria-label": "primary checkbox" }} />
          </div>
        </div>
        <FlightSection
          flightData={flightData}
          loading={loading}
          submitted={submitted}
          economyClass={economyClass}
          businessClass={businessClass}
        />
      </div>
      {/* Offset options */}
      <div id="flightsID"></div>
      <OffsetSection tripQuantity={quantity} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    airportTo: state.airportTo,
    airportFrom: state.airportFrom,
    dateFrom: state.dateFrom,
    dateTo: state.dateTo,
    quantity: state.quantity
  };
};

export default connect(mapStateToProps)(FlightSearch);
