import React from "react";
import "../Homework-05/Homework-05.css";
import Homework_05_NavBar from "./Homework-05-NavBar";
import HomeButton from "../HomeButton";

const Homework_05 = () => {
  return (
    <div className="Homework_05">
      <Homework_05_NavBar />
      <div className="Homework_05_content">
        <h1>Customize Bootstrap Navbar</h1>
        <p>
          Easy way to change navbar background, text and hover link color in
          bootstrap...
        </p>
      </div>
      <HomeButton />
    </div>
  );
};

export default Homework_05;
