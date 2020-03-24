import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import "./Searchbar.css";

function searchBar(props) {
  const { dropdownOpen, dropDownClickHandler, flightsTo, itemSelectToHandler } = props;
  let flightTo = flightsTo.map(item => {
    return (
      <DropdownItem key={item} onClick={itemSelectToHandler}>
        {item}
      </DropdownItem>
    );
  });

  return (
    <div className="DropItem">
      <Dropdown isOpen={dropdownOpen} toggle={dropDownClickHandler}>
        <DropdownToggle caret className="Dropdown">{props.children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{props.children}</DropdownItem>
          {flightTo}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default searchBar;
