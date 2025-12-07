import React, { useEffect, useState } from "react";
import SanFranciscoList from "./SanFranciscoList";
import "./SanFrancisco.css";

function SanFrancisco() {
    const [sanfrancisco, setSanFrancisco] = useState([]);

    useEffect(() => {
        fetch("./data/sanfrancisco.json")
        .then((res) => res.json())
        .then((data) => setSanFrancisco(data))
        .catch((err) => console.error("Failed to load the cards", err))

    }, []);

    return (

      <div className="Headline mainSanFrancisco">
      <h1>
        Photos from San Francisco
      </h1>
        <div className="SanFranciscoListSection">
           <SanFranciscoList cards={sanfrancisco} />
        </div>
    </div>
    )
//This component fetches the san francisco images from a json file and utilizes the SanFranciscoList component to populate them on the page.


}

export default SanFrancisco;