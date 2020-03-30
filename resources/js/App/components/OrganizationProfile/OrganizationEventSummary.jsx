import React from "react";
import "../../../../sass/app.scss";

export default function OrganizationEventSummary({
    totalDistance,
    totalCarbonFootprint,
    totalCarbonOffset
}) {
    return (
        <div className="org-summary">
            <h3>Summary</h3>
            <p>Total Distances Traveled: <strong>{totalDistance}</strong> KM</p>
            <p>Total Carbon Footprint: <strong>{totalCarbonFootprint}</strong> tonnes</p>
            <p>Total Carbon Offset: <strong>{totalCarbonOffset}</strong> tonnes</p>
        </div>
    );
}
