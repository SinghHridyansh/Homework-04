import React from "react";
import "../Homework-04/Homework-04.css";
import HomeButton from "../HomeButton";

const Card_1 = () => {
  return (
    <div className="card_main">
      <div className="card">
        <div className="top">
          <img
            className="userimg"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg"
            alt="."
          />
          <h1>Sara Jay</h1>
          <p>I enjoy drinking a cup of coffee every day</p>
        </div>
        <div className="middle">
          <div className="numbers">
            <span className="hglt">172</span>
            <br />
            <span className="txt">POSTS</span>
          </div>
          <div className="numbers">
            <span className="hglt">47</span>
            <br />
            <span className="txt">FOLLOWERS</span>
          </div>
          <div className="numbers">
            <span className="hglt">20</span>
            <br />
            <span className="txt">FOLLOWING</span>
          </div>
        </div>
        <div className="bottom">
          <button className="purple">FOLLOW</button>
          <button className="pink">MESSAGE</button>
        </div>
        <HomeButton />
      </div>
    </div>
  );
};

export default Card_1;
