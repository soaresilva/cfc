import React from "react";
import { connect } from "react-redux";

import "./OffsetSection.css";
import CardItem from "./../../components/UI/CardItem/CardItem";

function OffsetSection(props) {
  const { fetched, cityFrom, cityTo, distance, duration } = props;
  return (
    <div className="OffsetSection">
      {fetched ? (
        <>
          <h1>Offset options</h1>
          <div className="SelectedFlight">
            <h6>
              <b>Your flight:</b> From {cityFrom} to {cityTo} with duration {duration} and distance {distance}km.
            </h6>
            <h6>CO2 amount: </h6>
          </div>
          <div className="CardItems">
            <div className="CardItem-Project">
              <CardItem fetched={fetched} />
            </div>
            <div className="CardItem-Project">
              <CardItem fetched={fetched} />
            </div>
            <div className="CardItem-Project">
              <CardItem fetched={fetched} />
            </div>
          </div>
        </>
      ) : (
        <h1>Select a flight to see offset options</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetched: state.fetched,
    cityFrom: state.cityFrom,
    cityTo: state.cityTo,
    distance: state.distance,
    duration: state.duration
  };
};

export default connect(mapStateToProps)(OffsetSection);
