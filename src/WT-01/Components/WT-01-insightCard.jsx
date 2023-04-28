import React from "react";
import "../WT-01.css";

const WT_01_insightCard = (props) => {
  return (
    <div className="insightCard">
      <div className="insightCard_icon">{props.icon}</div>
      <h1>{props.numbers}</h1>
      <h3>{props.insight}</h3>
    </div>
  );
};

export default WT_01_insightCard;
