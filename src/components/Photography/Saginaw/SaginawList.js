import React from "react";
import SaginawCards from "./SaginawCards";
import "./SaginawList.css"

function SaginawList( { cards }) {
    return (
        <div className="SaginawList">
            {
                cards.map((card) =>
                <SaginawCards card={card} />
            )
            }
        </div>

    )
}

//This function maps out the card html layouts from SaginawCards into a list.


export default SaginawList;