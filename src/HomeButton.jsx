import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { AiFillHome } from "react-icons/ai";

const HomeButton = () => {
  return (
    <div className="HomeButton">
      <div className="HomeContainer">
        <h1>
          <Link to="/" element={<Home />}>
            <AiFillHome />
          </Link>
        </h1>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeButton;
