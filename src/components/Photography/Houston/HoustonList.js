import React from "react";
import HoustonCards from "./HoustonCards";
import "./HoustonList.css"

function HoustonList( { cards }) {
    return (
        <div className="HoustonList">
            {
                cards.map((card) =>
                <HoustonCards card={card} />
            )
            }
        </div>

    )

    //This function maps out the card html layouts from HoustonCards into a list.

}

export default HoustonList;