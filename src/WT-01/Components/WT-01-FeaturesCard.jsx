import React from "react";

const WT_01_FeaturesCard = (props) => {
  return (
    <div className="WT_01_FeaturesCard">
      <div className="WT_01_icon_container">
        {/* <SlScreenDesktop /> */}
        {props.icon}
      </div>
      <div className="WT_01_content">
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          temporibus asperiores consequatur modi dignissimos expedita ullam in
          aliquam alias obcaecati.
        </p>
        <a href="">Read More</a>
      </div>
      {/* <SlUser />
      <BsRecycle /> */}
    </div>
  );
};

export default WT_01_FeaturesCard;
