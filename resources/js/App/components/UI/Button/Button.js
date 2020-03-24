import React from "react";

import "./Button.css";

function Button(props) {
    const { clicked, children } = props;
    return (
        <button className="Button" onClick={clicked}>
            {children}
        </button>
    );
}

export default Button;
