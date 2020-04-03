import React, { useEffect, useState } from "react";
import "../../../../sass/app.scss";
import OrganizationTripHistory from "./OrganizationTripHistory";
import { expansionStyles } from "../UI/Tables/tables";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function OrganizationEventHistory({ orgEvents, setOrgEvents, org_id }) {
  const [showOrgTrips, setShowOrgTrips] = useState(new Array(orgEvents.length).fill(false));
  const [expanded, setExpanded] = React.useState(false);

  const classes = expansionStyles();

  const handleShowOrgTrips = (index) => {
    setShowOrgTrips(showOrgTrips.map((s, i) => (i === index ? !s : s)));
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const events = orgEvents.map((event, index) => {
    return (
      <div className={classes.root} key={index}>
        <ExpansionPanel  expanded={expanded === "panel" + index} onChange={handleChange("panel" + index)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className={classes.heading}>
            <div className="event-intro">
              {event.name}
              <em>{event.date}</em>
            </div>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.secondaryHeading}>
              <div className="org_event_description">
                <p>{event.description}</p>
                <br/>
                <button onClick={() => handleShowOrgTrips(index)} className="showOrgTripsButton">
                  {showOrgTrips[index] === false ? "See event summary and trips" : "Close event summary and trips"}
                </button>
                <br/>
              </div>
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
  return (
    <div>
      <div className="event_history">
        <h3>Event History</h3>
      </div>
      {events}
    </div>
  );
}
