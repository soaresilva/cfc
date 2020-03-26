import React, { useState, useEffect } from "react";
//import { deleteTrip } from "../../../Api/trips";

export default function OrganizationEventSummary({
    totalDistance,
    totalCarbonFootprint,
    totalCarbonOffset
}) {
    return (
        <div className="org-summary">
            <h3>Summary</h3>
            <h4>Total Distances Traveled:</h4>
            <p>{totalDistance}</p>
            <h4>Total Carbon Footprint:</h4>
            <p>{totalCarbonFootprint}</p>
            <h4>Total Carbon Offset:</h4>
            <p>{totalCarbonOffset}</p>
        </div>
    );
}
