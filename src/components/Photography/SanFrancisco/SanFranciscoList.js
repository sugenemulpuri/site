import React from "react";
import SanFranciscoCards from "./SanFranciscoCards";
import "./SanFranciscoList.css"

function SanFranciscoList( { cards }) {
    return (
        <div className="SanFranciscoList">
            {
                cards.map((card) =>
                <SanFranciscoCards card={card} />
            )
            }
        </div>

    )
}

//This function maps out the card html layouts from SanFranciscoCards into a list.



export default SanFranciscoList;