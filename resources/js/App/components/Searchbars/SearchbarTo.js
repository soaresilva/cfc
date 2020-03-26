import React, { useEffect } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";

import { availableAirports } from "../../destinations/available_airports";
import { selectAirportTo } from "../../store/actions/index";
import "./Searchbar.css";

function ComboBoxTo(props) {
  const filterOptions = createFilterOptions({
    limit: 20,
    stringify: (option) => option.title
  });

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      options={availableAirports}
      filterOptions={filterOptions}
      getOptionLabel={(airport) => airport.title}
      onChange={props.onSelectAirportTo}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="To*" variant="outlined" />}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectAirportTo: (event, airportTo, reason) => dispatch(selectAirportTo(event, airportTo, reason))
  };
};

export default connect(null, mapDispatchToProps)(ComboBoxTo);
