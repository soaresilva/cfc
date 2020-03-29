import React, { useState } from "react";

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
    price
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
          <div >
            <p>Start your journey by creating an account</p>
            <ul className="CardItemsLandingPage_description">
              <li>Some advantages</li>
              <li>More advantages</li>
              <li>Did you know about this advantage?</li>
            </ul>
          </div>
          <div className="CardItemsLandingPage__links">
            <a href="/register">User</a>
            <a href="/register/organization">Organizaton</a>
          </div>
        </div>
      ) : children === "Calculate" ? (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <p>Calculate something and get this lorem impsum</p>
          <p>
            lorem lorem lorem lorem lorem lorem import lorem lorem lorem lorem lorem lorem import lorem lorem lorem lorem lorem lorem import
            lorem
          </p>
        </div>
      ) : (
        <div className="CardItemsLandingPage">
          <h1>{children}</h1>
          <p>Offset with us</p>
          <ul>
            <li>Some advantages</li>
            <li>More advantages</li>
            <li>Did you know about this advantage?</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CardItem;
