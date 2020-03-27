import React from "react";
import { connect } from "react-redux";

import "./OffsetSection.css";
import CardItem from "./../../components/UI/CardItem/CardItem";
import AddTripToDB from "../../components/AddTrip/AddTripToDB";

function OffsetSection(props) {
  const { fetched, cityFrom, cityTo, distance, duration, totalCO2amount } = props;

  const farmers = {
    title: "Reforestation in Nicaragua",
    farmersDescription: "Offset your emissions by helping small farmers in Nicaragua with reforestation.",
    moreInfoFarmers:
      "Support the reforestation project in Nicaragua, the second-poorest country in the western hemisphere. Small-scale farming families are reforesting unused sections of their land with native species. The programme combines practical nature conservation with the creation of new income sources for local families."
  };
  const kenya = {
    title: "Kenya",
    stovesForKenya: "Use your offsetting to provide more efficient cook stoves for women in Kenya.",
    moreInfoKenya:
      "In rural communities in western Kenya, food is traditionally cooked over an open fire. Thanks to the efficient cook stoves, 40 to 50 per cent less firewood is used, saving households a lot of time and money. The women finance their subsidised cook stoves in local saving and loaning groups. In addition, these saving groups finance medical health care, school fees or high-quality seed."
  };
  const forest = {
    title: "Swiss projects",
    swissForest: "Offset half of your emissions in Swiss carbon offset projects. ",
    moreInfoForest:
      "At least half of your emissions will be reduced in Swiss carbon offset projects, the remaining portion in carbon offset projects in developing and newly industrialising countries."
  };

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
              <CardItem
                fetched={fetched}
                totalCO2amount={totalCO2amount}
                photo="/images/stovesKenya.jpg"
                description={kenya.stovesForKenya}
                moreInfo={kenya.moreInfoKenya}
                title={kenya.title}
                cityFrom={cityFrom}
                cityTo={cityTo}
                distace={distance}
                totalCO2amount={totalCO2amount}
              />
            </div>
            <div className="CardItem-Project">
              <CardItem
                fetched={fetched}
                totalCO2amount={totalCO2amount}
                photo="/images/farmers.jpg"
                description={farmers.farmersDescription}
                moreInfo={farmers.moreInfoFarmers}
                title={farmers.title}
              />
            </div>
            <div className="CardItem-Project">
              <CardItem
                fetched={fetched}
                totalCO2amount={totalCO2amount}
                photo="/images/swissOffset.jpg"
                description={forest.swissForest}
                moreInfo={forest.moreInfoForest}
                title={forest.title}
              />
            </div>
          </div>
          <AddTripToDB cityFrom={cityFrom} cityTo={cityTo} distance={distance} />
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
    duration: state.duration,
    totalCO2amount: state.totalCO2amount,
  };
};

export default connect(mapStateToProps, null)(OffsetSection);
