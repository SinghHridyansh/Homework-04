import React from "react";
import "../Assignment-04/Assignment-04.css";
import HomeButton from "../HomeButton";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card_02 = () => {
  return (
    <div className="card_2_main">
      <div className="card_2">
        <div className="img-div">
          <img
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=".."
            className="user-img"
          />
          <button className="plus">+</button>
          <BsThreeDotsVertical className="dots"></BsThreeDotsVertical>
        </div>
        <div className="middle-deets">
          <span className="name">Jack Jackson</span>
          <p className="designation">Frontend Developer</p>
        </div>
        <div className="bottom-count">
          <div className="numbers">
            <span className="deets">26</span>
            <br />
            <span className="deet-head">Shoot</span>
          </div>
          <div className="numbers">
            <span className="deets">94</span>
            <br />
            <span className="deet-head">Following</span>
          </div>
          <div className="numbers">
            <span className="deets">139</span>
            <br />
            <span className="deet-head">Followers</span>
          </div>
        </div>
        <HomeButton />
      </div>
    </div>
  );
};

export default Card_02;
