import React, { useEffect, useState } from "react";
import SaginawList from "./SaginawList";
import "./Saginaw.css";

function Saginaw() {
    const [saginaw, setSaginaw] = useState([]);

    useEffect(() => {
        fetch("./data/saginaw.json")
        .then((res) => res.json())
        .then((data) => setSaginaw(data))
        .catch((err) => console.error("Failed to load the cards", err))

    }, []);

   

    return (

      <div className="Headline mainSaginaw">
      <h1>
        Photos from Saginaw
      </h1>
        <div className="SaginawListSection">
           <SaginawList cards={saginaw} />
        </div>
    </div>
    )
}

//This component fetches the saginaw images from a json file and utilizes the SaginawList component to populate them on the page.


export default Saginaw;