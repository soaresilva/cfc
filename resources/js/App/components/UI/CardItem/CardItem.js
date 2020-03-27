import React, { useState } from "react";

import "./CardItem.css";
import Button from "../Button/Button";
import CustomizedModal from "./../Modal/Modal";
import AddTripToDB from "./../../AddTrip/AddTripToDB";

function CardItem(props) {
  const { children, fetched, totalCO2amount, photo, description, moreInfo, title, cityFrom, cityTo, distance } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="CardItem">
      {fetched ? (
        <div className="CardItemsInfo">
          <img src={photo} className="CardItemsPicture" alt={photo} />
          <div className="CardItemsDescription">
            <p>{description}</p>
            <p>{(30 * totalCO2amount).toFixed(2)}EUR</p>
            <Button clicked={handleClickOpen}>More Info</Button>
            <CustomizedModal closed={handleClose} opened={open} moreInfo={moreInfo} title={title} />
            <AddTripToDB cityFrom={cityFrom} cityTo={cityTo} distance={distance} offset={totalCO2amount}>
              Add to profile with offsetting
            </AddTripToDB>
          </div>
        </div>
      ) : (
        <h1>{children}</h1>
      )}
    </div>
  );
}

export default CardItem;
