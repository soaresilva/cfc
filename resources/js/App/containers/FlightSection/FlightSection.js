import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import "./FlightSection.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";

const FlightSection = (props) => {
  const { flightData, loading } = props;
  const [firstFlight, setFirstFlight] = useState(0);
  const [flightsPerPage, setFlightsPerPage] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2)
      }
    }
  }));
  const classes = useStyles();

  // "Pagination"
  const nextPageClickHandler = (event, page) => {
    if (page === pageNumber) return;
    if (page - pageNumber <= 1) {
      setPageNumber(page);
      setFirstFlight(Math.min(firstFlight + flightsPerPage, flightData.length - flightsPerPage));
    } else if (page - pageNumber > 1) {
      const next = (page - pageNumber) * 2;
      setPageNumber(page);
      setFirstFlight(Math.min(firstFlight + next, flightData.length - flightsPerPage));
      7;
    }
  };

  const prevPageClickHandler = (event, page) => {
    if (page === pageNumber) return;
    if (pageNumber - page <= 1) {
      setPageNumber(page);
      setFirstFlight(Math.max(firstFlight - flightsPerPage, 0));
    } else if (pageNumber - page > 1) {
      const next = (pageNumber - page) * 2;
      setPageNumber(page);
      setFirstFlight(Math.max(firstFlight - next, 0));
    }
  };
  console.log("I am at index", firstFlight);

  let flight = null;
  let pagination = null;
  if (loading) {
    flight = <Spinner />;
  } else if (flightData.length === 0) {
    flight = (
      <h3 className="Warning">
        <i className="fas fa-plane-slash"></i> Warning: Flights might be cancelled due to COVID-19
      </h3>
    );
  } else {
    flight = flightData.slice(firstFlight, firstFlight + flightsPerPage).map((flight) => {
      return <Flight key={flight.id} {...flight} />;
    });
    pagination = (
      <div className={classes.root}>
        <Pagination
          count={Math.floor(flightData.length / 2)}
          variant="outlined"
          color="secondary"
          className="Pagination"
          onChange={(event, page) => {
            pageNumber > page ? prevPageClickHandler(event, page) : nextPageClickHandler(event, page);
          }}
        />
      </div>
    );
  }
  return (
    <div className="FlightSection">
      {flight}
      {pagination}
    </div>
  );
};

export default FlightSection;

