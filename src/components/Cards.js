import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import lake from "../images/image-of-lake.jpeg";

function Cards() {
  const youtubeLink = "https://www.youtube.com/watch?v=mS48F0swwAY";

  return (
    <div className="cards" style={{ backgroundImage: `url(${lake})` }}>
      <h2>Check out these products</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/image-of-lake.jpeg"
              text="Product 1"
              label="label"
              link={youtubeLink}
            />
            <CardItem
              src="/images/image-of-lake.jpeg"
              text="Product 2"
              label="label"
              link={youtubeLink}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
