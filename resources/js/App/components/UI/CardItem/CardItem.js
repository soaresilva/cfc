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
    console.log("snackbar", openSnackbar);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
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
            {/* <Button clicked={handleClickOpen}>More Info</Button> */}
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
      ) : children === "Register" ? (
        <div>
          <h1>{children}</h1>
          <p>Start your journey by creating an account</p>
          <ul>
            <li>Some advantages</li>
            <li>More advantages</li>
            <li>Did you know about this advantage?</li>
          </ul>
          <a href="/register">User</a>
          <a href="/register/organization">Organizaton</a>
        </div>
      ) : children === "Calculate" ? (
        <div>
          <h1>{children}</h1>
          <p>Calculate</p>
          <ul>
            <li>Some advantages</li>
            <li>More advantages</li>
            <li>Did you know about this advantage?</li>
          </ul>
          <a href="/register">User</a>
          <a href="/register/organization">Organizaton</a>
        </div>
      ) : (
        <div>
          <h1>{children}</h1>
          <p>Offset with us</p>
          <ul>
            <li>Some advantages</li>
            <li>More advantages</li>
            <li>Did you know about this advantage?</li>
          </ul>
          <a href="/register">User</a>
          <a href="/register/organization">Organizaton</a>
        </div>
      )}
    </div>
  );
}

export default CardItem;
