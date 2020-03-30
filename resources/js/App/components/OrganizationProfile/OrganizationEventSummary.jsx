import React, { useState, useEffect } from "react";
import "../../../../sass/app.scss";

export default function OrganizationEventSummary({
    totalDistance,
    totalCarbonFootprint,
    totalCarbonOffset
}) {
    return (
        <div className="org-summary">
            <h3>Summary</h3>
            <p>Total Distances Traveled:<h4>{totalDistance}</h4>KM</p>
            <p>Total Carbon Footprint:<h4>{totalCarbonFootprint}</h4>tonnes</p>
            <p>Total Carbon Offset:<h4>{totalCarbonOffset}</h4>tonnes</p>
        </div>
    );
}
