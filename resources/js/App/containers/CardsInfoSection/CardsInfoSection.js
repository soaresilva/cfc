import React from "react";

import "./CardsInfoSection.css";

import CardItem from "./../../components/UI/CardItem/CardItem";

export default function CardsInfoSection() {
  return (
    <div className="Section-CardItems">
      <div className="CardItems">
        <div className="CardItem-About">
          <CardItem>Register</CardItem>
        </div>
        <div className="CardItem-Calc">
          <CardItem>Calculate</CardItem>
        </div>
        <div className="CardItem-Offset">
          <CardItem>Offset</CardItem>
        </div>
      </div>
    </div>
  );
}
