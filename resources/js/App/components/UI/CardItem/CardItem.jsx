import React from "react";

import "./CardItem.css";
import Button from "./../Button/Button";

function CardItem(props) {
    return (
        <div className="CardItem">
            {props.fetched ? (
                <div className="CardItemsInfo">
                    <img
                        src="/images/farmers.jpg"
                        className="CardItemsPicture"
                    />
                    <div className="CardItemsDescription">
                        <p>
                            Offset your emissions by helping small farmers in
                            Nicaragua with reforestation.
                        </p>
                        <p>50EUR</p>
                        <Button>To cart</Button>
                    </div>
                </div>
            ) : (
                <h1>{props.children}</h1>
            )}
        </div>
    );
}

export default CardItem;
