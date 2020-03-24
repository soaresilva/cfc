import React, {useEffect, useState} from 'react';
//import "./App.css";


export default function UserProfile() {
  return (
    <div>
    <p className= "userprofile">user profile works!!!!</p>
    <div className="user-summary">
      <h3>Summary</h3>
      <h4>Total Carbon Footprint:</h4><p>calculated from DB</p>
      <h4>Total Carbon Offset:</h4><p>calculated from DB!!!</p>
    </div>
    <div className="user-history">
      <h3>Trip History</h3>
      {/* get the data from DB and map through array */}
      <div className="user-trip">
        <h4>Trip Origin - Trip Destination</h4>
        <p><em>Date: calculated from DB!!!</em></p>
        <h5>Distance:</h5><p>calculated from DB!!!</p>
        <h5>Carbon Footprint:</h5><p>calculated from DB!!!</p>
        <h5>Carbon Offset:</h5><p>calculated from DB!!!</p>
      </div>
    </div>

    </div>
  )
}