import React from "react";
import "../css/Card.css";

const Card = () => {
    return (
      <div className="card-container"> 
        <h1>4. Card</h1>
        <div className="card">
          <div className="image">
            <img src="https://honkailab.net/wp-content/uploads/2024/03/jing-yuan-300x442.webp"/>
          </div>
          <div className="content">
            <div className="title">A Title</div>
            <div className="description">The description goes here.</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;