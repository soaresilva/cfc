import React from "react";

import "./App.css";
import FlightSearch from "../containers/FlightSearch/FlightSearch";
import CardsInfoSection from "./../containers/CardsInfoSection/CardsInfoSection";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <video playsInline autoPlay muted loop className="Video">
          <source src="/videos/coverr-wood-1568650087945.mp4" type="video/mp4" />
        </video>
        <div className="WelcomeText">
          <h1 className="WelcomeTitle">Carbon Footprint Calculator</h1>
          <h1 className="WelcomeDescription">
            Shape our future<br></br> myclimate is your partner for effective climate protection – both locally and globally
          </h1>
        </div>
        <div>
          <CardsInfoSection />
        </div>

        <FlightSearch />

        <div className="WelcomeText">
          <h1>"footcha"</h1>
        </div>
      </div>
    );
  }
}
