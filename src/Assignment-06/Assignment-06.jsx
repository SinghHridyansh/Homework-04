import React from "react";
import "../Assignment-06/Assignment-06.css";
import {
  BsFillRocketTakeoffFill,
  BsWindowFullscreen,
  BsFillChatLeftDotsFill,
} from "react-icons/bs";
import HomeButton from "../HomeButton";

const Assignment_06 = () => {
  function NavBar() {
    return (
      <nav className="Assignment_06_Navbar">
        <div className="A06_Nav_L">
          <img src="https://creator.design/_logos/65/logo-65_07.png" alt="" />
          <ul>
            <li>Platform</li>
            <li>Plans</li>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="A06_Nav_R">
          <button>Contact Us</button>
          <button>Log In</button>
          <button className="A06_signup">Sign Up</button>
        </div>
      </nav>
    );
  }
  function A06_Hero() {
    return (
      <div className="A06_Hero">
        <h1>See value from social sooner</h1>
        <p>
          Our training and strategic services have helped
          <br />
          thousands of organizations succeed on social.
        </p>
        <button>Request a Demo</button>
      </div>
    );
  }
  function A06_insight() {
    return (
      <div className="A06_insight">
        <A06_insight_card icon={<BsFillRocketTakeoffFill />} numbers="2,500" />
        <A06_insight_card icon={<BsWindowFullscreen />} numbers="45,000" />
        <A06_insight_card
          icon={<BsFillChatLeftDotsFill />}
          numbers="200,000+"
        />
      </div>
    );
  }
  function A06_insight_card(props) {
    return (
      <div className="A06_insight_card">
        <div className="A06-insigth-icon">{props.icon}</div>
        <h2>{props.numbers}</h2>
        <p>
          Our training and strategic services have helped thousands of
          organizations succeed on social.
        </p>
      </div>
    );
  }
  return (
    <div className="Assignment_06">
      <NavBar />
      <A06_Hero />
      <A06_insight />
      <HomeButton />
    </div>
  );
};

export default Assignment_06;
