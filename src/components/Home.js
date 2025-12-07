import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="mainHome">
        <div className="crop-box fadeInUp">
            <img src="images/Home/Chicago-Skyline-Night.jpg" alt="Chicago Skyline HomePage"/>
            <h1>A Glimpse into Sugene's World</h1>
        </div>
        <div className="SubHeadingSection">
            <h1 className="Headline">Welcome!</h1>
            This website will give you details about who Sugene is, what his interests are, and his career history. Everything you need to see before hiring him.
        </div>
        </div>
    )
}
//This code wraps the hero image of the website under the H1 title, and a Welcome headline with a summary of the website.

export default Home;