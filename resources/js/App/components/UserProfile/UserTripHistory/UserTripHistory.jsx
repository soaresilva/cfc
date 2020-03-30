import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { deleteTrip } from "../../../../Api/trips";
import UserTripSummary from "../UserTripSummary";
import "./UserTripHistory.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function UserTripHistory({ setUserTrips, userTrips }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let totalDistance = 0;
  let totalCarbonFootprint = 0;
  let totalCarbonOffset = 0;

  const handleDeleteTrip = async (id) => {
    try {
      await deleteTrip(id);
      const newTrips = userTrips.filter((trip) => trip.id !== id);
      setUserTrips(newTrips);
    } catch (err) {
      console.log("error", err);
    }
  };

  const trips = userTrips.map((trip, index) => {
    totalDistance = totalDistance + trip.distance;
    totalCarbonFootprint = Number((totalCarbonFootprint + trip.carbon_amount).toFixed(3));
    totalCarbonOffset = Number((totalCarbonOffset + trip.offset_amount).toFixed(3));

    return (
      <ExpansionPanel expanded={expanded === "panel" + index} onChange={handleChange("panel" + index)} key={index}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className={classes.heading}>
            {trip.airport_from} - {trip.airport_to}
          </Typography>
          <Typography className={classes.secondaryHeading}>{trip.flight_date}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="ExpansionPanelDescription">
              <h6> Distance: {trip.distance}(km)</h6>
              <h6>Carbon Footprint: {trip.carbon_amount}(t) </h6>
              <h6>Carbon Offset: {trip.offset_amount}(t)</h6>
              <DeleteTripButton trip={trip} handleDeleteTrip={handleDeleteTrip} />
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });

  return (
    <div>
      <UserTripSummary totalDistance={totalDistance} totalCarbonFootprint={totalCarbonFootprint} totalCarbonOffset={totalCarbonOffset} />
      {/* <div className="user-history">
        <h3>Trip History</h3>
        {trips}
      </div> */}
      <div className={classes.root}>{trips}</div>
    </div>
  );
}

function DeleteTripButton({ handleDeleteTrip, trip }) {
  return (
    <button className="delete-trip-button" onClick={() => handleDeleteTrip(trip.id)}>
      delete trip
    </button>
  );
}
