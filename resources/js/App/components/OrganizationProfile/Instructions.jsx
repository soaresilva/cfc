import React, { useState } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function Instructions() {
  const [shouldShowInstructions, setShouldShowInstructions] = useState(false);

  const handleShowInstructions = () => {
    setShouldShowInstructions(!shouldShowInstructions);
  };

  return (
    <div>
      <HelpOutlineIcon className="question" onClick={handleShowInstructions} />
      <div className="instructions">
        {shouldShowInstructions ? (
          <div className="instruction">
            <h3>What to do?</h3>
            <p>
              As an organization, your first step is to <strong>make an event</strong> by clicking the <strong>"Add Event"</strong> button.
              After you have given a name, description, and date of your organization's event, then you can add various flight trips to this
              event!
            </p>
            <p>
              To <strong>add a trip</strong>, click <strong>"search for flights"</strong> at the top of your profile and then use our flight search/ carbon calculator to find flights and the carbon footprint they will produce.</p>
            <p> 
              After a trip and carbon offset has been selected, pick an event, press <strong>"see event summary and trips"</strong>, and then add a trip to the event!
            </p>
            <h5>Happy and safe travels (for you and the enviornment, too!)</h5>
            <button onClick={handleShowInstructions}>Close</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
