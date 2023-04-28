import React from "react";
import "../WT-01.css";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import WT_01_insightCard from "./WT-01-insightCard";

const WT_01_insights = () => {
  return (
    <div className="WT_01_insights">
      <WT_01_insightCard
        icon={<AiFillCar />}
        numbers="22"
        insight="Awards Winning"
      />
      <WT_01_insightCard
        icon={<BsFillBriefcaseFill />}
        numbers="145"
        insight="Finished Projects"
      />
      <WT_01_insightCard
        icon={<AiFillCar />}
        numbers="349"
        insight="Products Sold"
      />
      <WT_01_insightCard
        icon={<AiOutlineTwitter />}
        numbers="2456"
        insight="Twitter Fans"
      />
    </div>
  );
};

export default WT_01_insights;
