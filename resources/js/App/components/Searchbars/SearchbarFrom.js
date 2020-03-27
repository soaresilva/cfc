import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";

import { availableAirports } from "../../destinations/available_airports";
import { selectAirportFrom } from "../../store/actions/index";

import "./Searchbar.css";

function ComboBoxFrom(props) {
  const { onSelectAirportFrom } = props;
  const filterOptions = createFilterOptions({
    limit: 20,
    stringify: (option) => option.title
  });

  return (
    <Autocomplete
      id="combo-box-demo"
      className="root"
      freeSolo
      options={availableAirports}
      filterOptions={filterOptions}
      getOptionLabel={(airport) => airport.title}
      onChange={onSelectAirportFrom}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="From*" variant="outlined" />}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectAirportFrom: (event, airportFrom, reason) => dispatch(selectAirportFrom(event, airportFrom, reason))
  };
};

export default connect(null, mapDispatchToProps)(ComboBoxFrom);
