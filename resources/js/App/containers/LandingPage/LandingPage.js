import React, { useState } from "react";
import { connect } from "react-redux";

import "./LandingPage.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../components/UI/Button/Button";
import FlightSection from "../FlightSection/FlightSection";
import SearchBarTo from "../../components/Searchbars/SearchbarTo";
import SearchBarFrom from "../../components/SearchBars/SearchBarFrom";
import OffsetSection from "./../OffsetSection/OffsetSection";

const LandingPage = (props) => {
  const { airportFrom, airportTo } = props;
  const [submitted, setSubmitted] = useState(false);
  const [direct, setDirect] = useState(2);

  const directFlightsClickHandler = (event) => {
    if (event.target.checked) {
      setDirect(0);
    } else {
      setDirect(2);
    }
  };

  const submitDataHandler = () => {
    if (!airportFrom || !airportTo) return;
    setSubmitted(true);
  };

  return (
    // Selecting a flight
    <div className="LandingPage">
      <div className="SearchSection">
        <div className="LandingPageTitle">
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
            <Button clicked={submitDataHandler}>Search</Button>
          </div>
        </div>
        <FlightSection airportTo={airportTo} airportFrom={airportFrom} submitted={submitted} direct={direct} />
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

export default connect(mapStateToProps)(LandingPage);
