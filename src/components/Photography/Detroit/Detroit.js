import React, { useEffect, useState } from "react";
import DetroitList from "./DetroitList";
import "./Detroit.css";

function Detroit() {
    const [detroit, setDetroit] = useState([]);

    useEffect(() => {
        fetch("./data/detroit.json")
        .then((res) => res.json())
        .then((data) => setDetroit(data))
        .catch((err) => console.error("Failed to load the cards", err))

    }, []);

    return (

      <div className="Headline mainDetroit">
      <h1>
        Photos from Detroit
      </h1>
        <div className="DetroitListSection">
           <DetroitList cards={detroit} />
        </div>
    </div>
    )
}

//This component fetches the detroit images from a json file and utilizes the DetroitList component to populate them on the page.


export default Detroit;