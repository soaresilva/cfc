import React from "react";

import "./CardItem.css";

function CardItem(props) {
    return (
        <div className="CardItem">
          <h1>{props.children}</h1>
        </div>
    );
}

export default CardItem;
