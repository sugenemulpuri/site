import React, { useEffect, useState } from "react";
import HoustonList from "./HoustonList";
import "./Houston.css";

function Houston() {
    const [houston, setHouston] = useState([]);

    useEffect(() => {
        fetch("./data/houston.json")
        .then((res) => res.json())
        .then((data) => setHouston(data))
        .catch((err) => console.error("Failed to load the cards", err))

    }, []);

    return (

      <div className="Headline mainHouston">
      <h1>
        Photos from Houston
      </h1>
        <div className="HoustonListSection">
           <HoustonList cards={houston} />
        </div>
    </div>
    )

    //This component fetches the houston images from a json file and utilizes the HoustonList component to populate them on the page.


    
}

export default Houston;