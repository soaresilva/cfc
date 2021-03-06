import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Spinner.css";

export default function Spinner() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress variant="determinate" value={progress} color="secondary" />;
}
