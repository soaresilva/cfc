import React, { useState } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import "./CardItem.css";
import InfoIcon from "@material-ui/icons/Info";
import CustomizedSnackbar from "../Snackbar/Snackbar";
import CustomizedModal from "./../Modal/Modal";
import AddTripToDB from "./../../AddTrip/AddTripToDB";

function CardItem(props) {
  const {
    children,
    fetched,
    totalCO2amount,
    photo,
    description,
    moreInfo,
    title,
    cityFrom,
    cityTo,
    distance,
    userId,
    isUserOrg,
    price,
    dateDepart,
    tripQuantity
  } = props;
  const [openInfo, setOpenInfo] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
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

  const scrollToFlightsSection = () => {
    const flightsSection = document.getElementById("flightsID");
    if (flightsSection) flightsSection.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    // Carditems for the Offset section ( the projects ) ********************************************
    <div className="CardItem">
      {fetched ? (
        <div className="CardItemsInfo">
          <img src={photo} className="CardItemsPicture" alt={photo} />
          <div className="CardItemsDescription">
            <p>{description}</p>
            <div className="CardItemsDetails">
              <p>{price}EUR</p>
              <InfoIcon onClick={handleOpenInfo} />
            </div>
            <CustomizedModal closed={handleCloseInfo} opened={openInfo} moreInfo={moreInfo} title={title} />
            <AddTripToDB
              userId={userId}
              isUserOrg={isUserOrg}
              cityFrom={cityFrom}
              cityTo={cityTo}
              distance={distance}
              totalCO2amount={totalCO2amount}
              offset={totalCO2amount}
              clicked={handleOpenSnackbar}
              dateDepart={dateDepart}
              tripQuantity={tripQuantity}
            >
              Offset
            </AddTripToDB>
            <CustomizedSnackbar opened={openSnackbar} clicked={handleCloseSnackbar} userId={userId} />
          </div>
        </div>
      ) : // Carditems for the landing page (Register , Calculate, Offset) *****************************
      children === "Register" ? (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <div>
            <p className="CardItemsLandingPage_description">Register an account to access extra features:</p>
            <ul className="CardItemsLandingPage_features">
              <li>Add trips to your profile</li>
              <li>See your trip history and your flights' carbon footprint</li>
              <li>Organizations can create events and calculate their footprint</li>
            </ul>
          </div>
          <div className="CardItemsLandingPage__links">
            <a href="/register" className="CardItemsLandingPage__Alinks">
              User
            </a>
            <a href="/register/organization" className="CardItemsLandingPage__Alinks">
              Organization
            </a>
          </div>
        </div>
      ) : children === "Calculate" ? (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <div className="CardItemsLandingPage_description">
            <p>
              Carbon Voyage calculates the carbon footprint of your flights, helping you and your organization make more informed
              decisions when it comes to flying across the globe.
            </p>
            <p>Maybe your seminar could be a webinar instead!</p> <p>Make a concrete commitment for a more sustainable future.</p>
          </div>
        </div>
      ) : (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <div>
            <p className="CardItemsLandingPage_description">Offset the carbon footprint of your flights through our trusted partners</p>
            <ul className="CardItemsLandingPage_features">
              <li>Invest in sustainable development projects in newly industrialising countries</li>
              <li>Finance citizen-led clean energy projects</li>
            </ul>
          </div>
          <div className="CardItemsLandingPage__icons" onClick={scrollToFlightsSection}>
            <p>Let's start, shall we?</p>
            <div className="Arrow">
              <ArrowDownwardIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardItem;
