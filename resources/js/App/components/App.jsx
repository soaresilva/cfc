import React from "react";

import "./App.css";
import FlightSearch from "../containers/FlightSearch/FlightSearch.js";
import CardsInfoSection from "./../containers/CardsInfoSection/CardsInfoSection";
import Footer from "../Components/Footer/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <video playsInline autoPlay muted loop className="Video">
          <source src="/videos/coverr-wood-1568650087945.mp4" type="video/mp4" />
        </video>
        <div className="WelcomeText">
          <h1 className="WelcomeTitle">Carbon Voyage</h1>
          <h1 className="WelcomeDescription">
            Carbon Voyage reveals the true ecological impact of your flights – and lets you offset it accordingly
          </h1>
        </div>
        <CardsInfoSection />
        <FlightSearch />
        <Footer />
      </div>
    );
  }
}
