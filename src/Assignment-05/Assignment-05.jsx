import React from "react";
import "../Assignment-05/Assignment-05.css";
import Assignment_05_Navbar from "./Assignment-05-Navbar";
import HomeButton from "../HomeButton";

const Assignment_05 = () => {
  return (
    <div className="Assignment-05">
      <Assignment_05_Navbar />
      <div className="Assignment-05_content">
        <h1>Home</h1>
        <p>
          Made with ❤️ by <span className="auth-name">Hridyansh</span>
        </p>
      </div>
      <HomeButton />
    </div>
  );
};

export default Assignment_05;
