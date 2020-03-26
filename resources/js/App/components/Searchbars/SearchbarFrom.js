import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";

import { availableAirports } from "../../destinations/available_airports";

import "./Searchbar.css";

function ComboBoxFrom() {
  const filterOptions = createFilterOptions({
    limit: 5,
    stringify: (option) => option.title
  });

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      options={availableAirports}
      filterOptions={filterOptions}
      getOptionLabel={(airport) => airport.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="From*" variant="outlined" />}
    />
  );
}

export default ComboBoxFrom;
