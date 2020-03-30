import React, { useEffect, useState } from "react";
import "../../../../sass/app.scss";
import OrganizationTripHistory from "./OrganizationTripHistory";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function OrganizationEventHistory({ orgEvents, setOrgEvents, org_id }) {
  const [showOrgTrips, setShowOrgTrips] = useState(new Array(orgEvents.length).fill(false));
  const classes = useStyles();

  const handleShowOrgTrips = (index) => {
    setShowOrgTrips(showOrgTrips.map((s, i) => (i === index ? !s : s)));
  };

  const events = orgEvents.map((event, index) => {
    return (
      <div className={classes.root} key={index}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <div className="event-intro">
              {event.name}
              <em>{event.date}</em>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component={"div"}>
              <button onClick={() => handleShowOrgTrips(index)} className="showOrgTripsButton">
                See event summary and trips
              </button>
              {showOrgTrips[index] ? (
                <OrganizationTripHistory
                  setShowOrgTrips={setShowOrgTrips[index]}
                  org_id={org_id}
                  event_id={event.id}
                  orgEvents={orgEvents}
                  setOrgEvents={setOrgEvents}
                />
              ) : (
                ""
              )}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  });
  return <div>{events}</div>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
