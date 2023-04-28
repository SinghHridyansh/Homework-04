import React from "react";
import "../WT-01/WT-01.css";
import WT_01_NavBar from "./Components/WT-01-NavBar";
import WT_01_Hero from "./Components/WT-01-Hero";
import WT_01_Features from "./Components/WT-01-Features";
import WT_01_insights from "./Components/WT-01-insights";
import WT_01_About from "./Components/WT-01-About";
import HomeButton from "../HomeButton";

const WT_01 = () => {
  return (
    <div className="WT_01">
      <WT_01_NavBar />
      <WT_01_Hero />
      <WT_01_Features />
      <WT_01_insights />
      <WT_01_About />
      <HomeButton />
    </div>
  );
};

export default WT_01;
