import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./OffsetSection.css";
import CardItem from "./../../Components/UI/CardItem/CardItem";
import AddTripToDB from "../../Components/AddTrip/AddTripToDB";
import CustomizedSnackbar from "../../Components/UI/Snackbar/Snackbar";

function OffsetSection(props) {
  const [userId, setUserId] = useState(null);
  const [isUserOrg, setIsUserOrg] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { fetched, cityFrom, cityTo, distance, duration, totalCO2amount, dateDepart, tripQuantity } = props;

  const farmers = {
    title: "Reforestation in Nicaragua",
    farmersDescription: "Offset your emissions by helping small farmers in Nicaragua with reforestation.",
    moreInfoFarmers:
      "Support the reforestation project in Nicaragua, the second-poorest country in the western hemisphere. Small-scale farming families are reforesting unused sections of their land with native species. The programme combines practical nature conservation with the creation of new income sources for local families.",
    link: "https://tree-nation.com/projects/limay/about"
  };
  const kenya = {
    title: "Kenya",
    stovesForKenya: "Use your offset to provide more efficient stoves for women in Kenya.",
    moreInfoKenya: `In rural communities in western Kenya, food is traditionally cooked over an open fire. Thanks to the efficient cook stoves, 40 to 50 per cent less firewood is used, saving households a lot of time and money. The women finance their subsidised cook stoves in local saving and loaning groups. In addition, these saving groups finance medical health care, school fees or high-quality seed.`,
    link: "https://www.goldstandard.org/projects/energy-efficient-cook-stoves-siaya-communities-kenya"
  };
  const forest = {
    title: "Welsh community energy",
    welshForest: "Offset your emissions in a Welsh community energy project. ",
    moreInfoForest:
      "Offset your emissions by investing in Egni Co-op. Egni is a community energy project based in Cwmllynfell, Swansea, South Wales that develops rooftop solar energy, bringing clean energy to thousands of Welsh households.",
    link: "https://egni.coop/"
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

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
  console.log(dateDepart);

  return (
    <div className="OffsetSection">
      {fetched ? (
        <>
          <h1>Offset options</h1>
          <div className="SelectedFlight">
            <h6>
              <b>Your flight:</b> From {cityFrom} to {cityTo} in {duration}, flying a total distance of {distance}km.
            </h6>
            <h6>Your CO2 emissions: &asymp; {totalCO2amount}t</h6>
          </div>
          <div className="CardItems">
            <div className="CardItem-Project">
              <CardItem
                fetched={fetched}
                photo="/images/stovesKenya.jpg"
                description={kenya.stovesForKenya}
                moreInfo={kenya.moreInfoKenya}
                title={kenya.title}
                link={kenya.link}
                cityFrom={cityFrom}
                cityTo={cityTo}
                distance={distance}
                totalCO2amount={totalCO2amount}
                price={(25 * totalCO2amount * tripQuantity).toFixed(2)}
                userId={userId}
                isUserOrg={isUserOrg}
                offset={totalCO2amount}
                dateDepart={dateDepart}
                tripQuantity={tripQuantity}
              />
            </div>
            <div className="CardItem-Project">
              <CardItem
                fetched={fetched}
                photo="/images/farmers.jpg"
                description={farmers.farmersDescription}
                moreInfo={farmers.moreInfoFarmers}
                title={farmers.title}
                link={farmers.link}
                cityFrom={cityFrom}
                cityTo={cityTo}
                distance={distance}
                totalCO2amount={totalCO2amount}
                price={(30 * totalCO2amount * tripQuantity).toFixed(2)}
                userId={userId}
                isUserOrg={isUserOrg}
                offset={totalCO2amount}
                dateDepart={dateDepart}
                tripQuantity={tripQuantity}
              />
            </div>
            <div className="CardItem-Project">
              <CardItem
                fetched={fetched}
                photo="/images/welshOffset.jpg"
                description={forest.welshForest}
                moreInfo={forest.moreInfoForest}
                title={forest.title}
                link={forest.link}
                cityFrom={cityFrom}
                cityTo={cityTo}
                distance={distance}
                totalCO2amount={totalCO2amount}
                price={(35 * totalCO2amount * tripQuantity).toFixed(2)}
                userId={userId}
                isUserOrg={isUserOrg}
                offset={totalCO2amount}
                dateDepart={dateDepart}
                tripQuantity={tripQuantity}
              />
            </div>
          </div>
          <div className="AddTripToDB">
            <AddTripToDB
              cityFrom={cityFrom}
              cityTo={cityTo}
              distance={distance}
              totalCO2amount={totalCO2amount}
              userId={userId}
              isUserOrg={isUserOrg}
              offset={0}
              clicked={handleOpenSnackbar}
              dateDepart={dateDepart}
              tripQuantity={tripQuantity}
            >
              Add to profile without offsetting
            </AddTripToDB>
          </div>
          <CustomizedSnackbar opened={openSnackbar} clicked={handleCloseSnackbar} userId={userId} />
        </>
      ) : (
        <>
          <h1>Select a flight to see offset options</h1>
          <img className="FlightGif" src="/images/flightGIF.gif" alt="flightGif" />
          <div id="cardsID"></div>
        </>
      )}
      <div id="cardItems"></div>
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
    dateDepart: state.dateDepart
  };
};

export default connect(mapStateToProps, null)(OffsetSection);
