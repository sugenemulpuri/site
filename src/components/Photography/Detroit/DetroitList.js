import React from "react";
import DetroitCards from "./DetroitCards";
import "./DetroitList.css"

function DetroitList( { cards }) {
    return (
        <div className="DetroitList">
            {
                cards.map((card) =>
                <DetroitCards card={card} />
            )
            }
        </div>

    )
}

//This function maps out the card html layouts from DetroitCards into a list.


export default DetroitList;