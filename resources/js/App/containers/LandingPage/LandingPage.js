import React from "react";

import "./LandingPage.css";
import Button from "../../components/UI/Button/Button";
import FlightSection from "../FlightSection/FlightSection";
import SearchBarTo from "../../components/Searchbars/SearchbarTo";
import SearchBarFrom from "../../components/SearchBars/SearchBarFrom";
import OffsetSection from "./../OffsetSection/OffsetSection";
import { flightsFrom, flightsTo } from "../../destinations/destinations";

class LandingPage extends React.Component {
  state = {
    dropdownToOpen: false,
    dropdownFromOpen: false,
    flightsFrom: "",
    flightsTo: "",
    destination: "",
    originFrom: "",
    submitted: false,
    direct: 2,
    flightFrom: "From*",
    flightTo: "To*"
  };

  componentDidMount() {
    this.setState((prevState) => {
      return {
        flightsFrom: flightsFrom,
        flightsTo: flightsTo
      };
    });
  }

  dropDownToClickHandler = () => {
    this.setState((prevState) => {
      return {
        dropdownToOpen: !prevState.dropdownToOpen
      };
    });
  };

  dropDownFromClickHandler = () => {
    this.setState((prevState) => {
      return {
        dropdownFromOpen: !prevState.dropdownFromOpen
      };
    });
  };

  itemSelectFromHandler = (event) => {
    const destArray = Object.entries(this.state.flightsFrom);
    const originFrom = destArray.filter((item) => item[1] === event.target.innerText);
    this.setState({
      originFrom: originFrom[0][0],
      flightFrom: originFrom[0][1]
    });
  };

  itemSelectToHandler = (event) => {
    const destArray = Object.entries(this.state.flightsTo);
    const destination = destArray.filter((item) => item[1] === event.target.innerText);
    this.setState({
      destination: destination[0][0],
      flightTo: destination[0][1]
    });
  };

  directFlightsClickHandler = (event) => {
    if (event.target.checked) {
      this.setState({ direct: 0 });
    } else {
      this.setState({ direct: 2 });
    }
  };

  submitDataHandler = () => {
    if (this.state.flightFrom === "From*" || this.state.flightTo === "To*") return;
    this.setState({ submitted: !this.state.submitted });
  };

  render() {
    let destinationTo = Object.values(this.state.flightsTo);
    let destinationFrom = Object.values(this.state.flightsFrom);

    return (
      <div className="LandingPage">
        <div className="SearchSection">
          <div className="LandingPageTitle">
            <h1>Calculate and offset your Emissions!</h1>
            <h1 className="Blue">Flight Explorer</h1>
            <div className="Dropdown">
              <SearchBarFrom>{this.state.flightFrom}</SearchBarFrom>
              <SearchBarTo>{this.state.flightTo}</SearchBarTo>
              <div className="DF">
                <div className="CheckboxOption">
                  <label>Direct flights only:</label>
                  <input type="checkbox" onChange={this.directFlightsClickHandler} />
                </div>
                <div className="CheckboxOption">
                  <label>Flights with layover:</label>
                  <input type="checkbox" />
                </div>
              </div>
              <Button clicked={this.submitDataHandler}>Search</Button>
            </div>
          </div>
          <FlightSection
            origin={this.state.originFrom}
            destination={this.state.destination}
            submitted={this.state.submitted}
            direct={this.state.direct}
          />
        </div>
        <OffsetSection />
      </div>
    );
  }
}

export default LandingPage;
