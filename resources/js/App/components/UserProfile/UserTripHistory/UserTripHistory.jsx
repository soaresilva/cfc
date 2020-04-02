import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteTripSnackbar from "../../UI/Snackbar/DeleteTripSnackbar";
import Spinner from "../../UI/Spinner/Spinner";
import { deleteTrip } from "../../../../Api/trips";
import UserTripSummary from "../UserTripSummary";
import "./UserTripHistory.css";

export default function UserTripHistory({ setUserTrips, userTrips }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openSnackbarDeleteTrip, setOpenSnackbarDeleteTrip] = useState(false);
  let totalDistance = 0;
  let totalCarbonFootprint = 0;
  let totalCarbonOffset = 0;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDeleteTrip = async (id) => {
    try {
      await deleteTrip(id);
      const newTrips = userTrips.filter((trip) => trip.id !== id);
      setUserTrips(newTrips);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleOpenSnackbarDeleteTrip = () => {
    setOpenSnackbarDeleteTrip(true);
  };

  const handleCloseSnackbarDeleteTrip = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarDeleteTrip(false);
  };

  const trips = userTrips.map((trip, index) => {
    totalDistance = totalDistance + trip.distance;
    totalCarbonFootprint = Number((totalCarbonFootprint + trip.carbon_amount).toFixed(3));
    totalCarbonOffset = Number((totalCarbonOffset + trip.offset_amount).toFixed(3));

    return (
      <ExpansionPanel expanded={expanded === "panel" + index} onChange={handleChange("panel" + index)} key={index}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className={classes.heading}>
            <span>
              {trip.airport_from} - {trip.airport_to}
            </span>
          </Typography>
          <Typography className={classes.secondaryHeading}>
            <span>{trip.flight_date}</span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="ExpansionPanelDescription">
            <span>Distance: {trip.distance}km</span>
            <span>Carbon Footprint: {trip.carbon_amount}t </span>
            <span>Carbon Offset: {trip.offset_amount}t</span>
            <DeleteTripButton trip={trip} handleDeleteTrip={handleDeleteTrip} handleOpenSnackbarDeleteTrip={handleOpenSnackbarDeleteTrip} />
          </div>
        </ExpansionPanelDetails>
        <DeleteTripSnackbar opened={openSnackbarDeleteTrip} clicked={handleCloseSnackbarDeleteTrip} />
      </ExpansionPanel>
    );
  });

  let content = null;
  if (userTrips.length === 0) {
    content = (
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );
  } else {
    content = trips;
  }

  return (
    <div>
      <h3 style={{ marginTop: "2rem" }}></h3>
      <UserTripSummary totalDistance={totalDistance} totalCarbonFootprint={totalCarbonFootprint} totalCarbonOffset={totalCarbonOffset} />
      <h3 className="TripsList">Trips list</h3>
      <div className={classes.root}>{content}</div>
    </div>
  );
}

function DeleteTripButton({ handleDeleteTrip, trip, handleOpenSnackbarDeleteTrip }) {
  return (
    <Tooltip
      title="Delete"
      onClick={() => {
        handleDeleteTrip(trip.id), handleOpenSnackbarDeleteTrip();
      }}
    >
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    // fontSize: theme.typography.pxToRem(14),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontFamily: "Nunito, sans-serif"
  },
  secondaryHeading: {
    // fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    padding: "0 16px 0 16px"
  }
}));
