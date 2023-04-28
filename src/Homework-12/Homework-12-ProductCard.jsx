import React from "react";
import "../Homework-12/Homework-12.css";

const Homework_12_ProductCard = (props) => {
  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  let name = truncate(props.title, 6);
  let details = truncate(props.desc, 15);

  return (
    <div className="Homework_12_card">
      <div className="Homework_12img">
        <div className="Homework_12img2">
          <img src={props.image} alt="" className="Homework_12cardimg" />
        </div>
      </div>
      <div className="Homework_12_Productdata">
        <h3>{name}</h3>
        <h5>
          {props.stars} / 5 ({props.starscount})
        </h5>
        <p>{details}</p>
        <div className="Homework_12_ProductdataBottom">
          <p>$ {props.cost}</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Homework_12_ProductCard;

// {data[0].image}
