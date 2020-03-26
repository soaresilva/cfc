import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import { availableAirports } from "../../destinations/available_airports";

import "./Searchbar.css";

function ComboBoxTo() {
  // const airports = [
  //   { key: "AAA", title: "AAA, Anaa, French Polynesia, PF" },
  //   { key: "AAB", title: "AAB, Arrabury, Queensland, Australia, AU" },
  //   { key: "AAC", title: "AAC, Al Arish, Egypt, EG" },
  //   { key: "AAD", title: "AAD, Adado, Somalia, SO" },
  //   { key: "AAE", title: "AAE, Annaba [El Mellah], Algeria, DZ" },
  //   { key: "AAF", title: "AAF, Apalachicola, FL [Apalachicola Municipal Airport]A, US" }
  // ];

  const filterOptions = createFilterOptions({
      limit: 5,
      stringify: option => option.title
  })

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      options={availableAirports}
      filterOptions={filterOptions}
      getOptionLabel={(airport) => airport.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="To*" variant="outlined" />}
    />
  );
}
// function searchBar(props) {
//   const { dropdownOpen, dropDownClickHandler, flightsTo, itemSelectToHandler } = props;
//   let flightTo = flightsTo.map(item => {
//     return (
//       <DropdownItem key={item} onClick={itemSelectToHandler}>
//         {item}
//       </DropdownItem>
//     );
//   });

//   return (
//     <div className="DropItem">
//       <Dropdown isOpen={dropdownOpen} toggle={dropDownClickHandler}>
//         <DropdownToggle caret className="Dropdown">{props.children}</DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem header>{props.children}</DropdownItem>
//           {flightTo}
//         </DropdownMenu>
//       </Dropdown>
//     </div>
//   );
// }

export default ComboBoxTo;
