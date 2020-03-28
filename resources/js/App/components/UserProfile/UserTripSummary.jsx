import React, { useEffect, useState } from "react";
//import "./App.css";

export default function UserTripSummary({ totalDistance, totalCarbonFootprint, totalCarbonOffset }) {
  return (
    <div>
      <div className="user-summary">
        <h3>Summary</h3>
        <h4>Total Distances Traveled:</h4>
        <p>{totalDistance}</p>
        <h4>Total Carbon Footprint:</h4>
        <p>{totalCarbonFootprint}</p>
        <h4>Total Carbon Offset:</h4>
        <p>{totalCarbonOffset}</p>
      </div>
      <div className="user-history">
        <h3>Trip History</h3>
      </div>
    </div>
  );
}
