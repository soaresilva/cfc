import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./OffsetSection.css";
import CardItem from "./../../components/UI/CardItem/CardItem";
import AddTripToDB from "../../components/AddTrip/AddTripToDB";

function OffsetSection(props) {
  const [userId, setUserId] = useState(null);
  const [isUserOrg, setIsUserOrg] = useState(null);

  const { fetched, cityFrom, cityTo, distance, duration, totalCO2amount } = props;

  const makeUserId = () => {
    let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    $.ajax({
      url: "/indexAjax",
      type: "POST",
      data: { _token: token, message: "bravo" },
      dataType: "JSON",
      success: (response) => {
        setUserId(response.id), console.log("response id", response.id);
        setIsUserOrg(false);
      },
      error: (response) => {
        console.log("error");
        console.log(response);
      }
    });
  };

  const makeOrgId = () => {
    let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    $.ajax({
      url: "/orgIndexAjax",
      type: "POST",
      data: { _token: token, message: "bravo" },
      dataType: "JSON",
      success: (response) => {
        console.log("success");
        console.log(response);
        setUserId(response.id), console.log("response id", response.id);
        setIsUserOrg(true);
      },
      error: (response) => {
        console.log("error");
        console.log(response);
      }
    });
  };

  useEffect(() => {
    makeUserId();
    if (!userId) {
      makeOrgId();
    }
  }, []);

  return (
    <div className="OffsetSection">
      {fetched ? (
        <>
          <h1>Offset options</h1>
          <div className="SelectedFlight">
            <h6>
              <b>Your flight:</b> From {cityFrom} to {cityTo} with duration {duration} and distance {distance}km.
            </h6>
            <h6>CO2 amount &asymp; {totalCO2amount}t</h6>
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

      <AddTripToDB cityFrom={cityFrom} cityTo={cityTo} distance={distance} userId={userId} isUserOrg={isUserOrg} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetched: state.fetched,
    cityFrom: state.cityFrom,
    cityTo: state.cityTo,
    distance: state.distance,
    duration: state.duration,
    totalCO2amount: state.totalCO2amount
  };
};

export default connect(mapStateToProps, null)(OffsetSection);
