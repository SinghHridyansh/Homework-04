import React from "react";
import "../WT-01.css";
import WT_01_FeaturesCard from "./WT-01-FeaturesCard";
import { SlScreenDesktop } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { BsRecycle } from "react-icons/bs";

const WT_01_Features = () => {
  return (
    <div className="WT_01_Features">
      <h1>Our Features</h1>
      <div className="WT_01_Cardcontainer">
        <WT_01_FeaturesCard
          icon={<SlScreenDesktop />}
          title="Fully Responsive"
        />
        <WT_01_FeaturesCard icon={<SlUser />} title="Trusted Author" />
        <WT_01_FeaturesCard icon={<BsRecycle />} title="Reusable Elements" />
      </div>
    </div>
  );
};

export default WT_01_Features;
