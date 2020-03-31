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
            {tripQuantity !==0 ? <AddTripToDB
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
            </AddTripToDB> : ""}
            <CustomizedSnackbar opened={openSnackbar} clicked={handleCloseSnackbar} userId={userId} />
          </div>
        </div>
      ) : // Carditems for the landing page (Register , Calculate, Offset) *****************************
      children === "Register" ? (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <div>
            <p className="CardItemsLandingPage_description">Start your journey by creating an account</p>
            <ul>
              <li>Some advantages</li>
              <li>More advantages</li>
              <li>Did you know about this advantage?</li>
            </ul>
          </div>
          <div className="CardItemsLandingPage__links">
            <a href="/register" className="CardItemsLandingPage__Alinks">
              User
            </a>
            <a href="/register/organization" className="CardItemsLandingPage__Alinks">
              Organizaton
            </a>
          </div>
        </div>
      ) : children === "Calculate" ? (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <div className="CardItemsLandingPage_description">
            {/* <p>It is surprising how many climate-​harming CO₂ emissions arise when flying, driving, living, working and partying.</p> */}
            <p>
              CFC offers you a solution for your business and your everyday life. Make a concrete commitment to greater climate protection
              and sustainability with our education project and company offers and help shape the future.
            </p>
          </div>
          <p></p>
        </div>
      ) : (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <div>
            <p className="CardItemsLandingPage_description">Offset with us and save the planet</p>
            <ul>
              <li>Some advantages</li>
              <li>More advantages</li>
              <li>Did you know about this advantage?</li>
            </ul>
          </div>
          <div className="CardItemsLandingPage__icons" onClick={scrollToFlightsSection}>
            <p>Let's start, shall we?</p>
            <div
              style={{
                cursor: "pointer",
                marginLeft: ".5rem",
                border: "1px solid white",
                padding: ".25rem",
                borderRadius: "7px"
              }}
            >
              <ArrowDownwardIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardItem;
