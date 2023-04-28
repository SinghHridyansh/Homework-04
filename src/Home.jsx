import React from "react";
import { Outlet, Link } from "react-router-dom";
import HomeButton from "./HomeButton";
import "./App.css";

const Home = () => {
  return (
    <div className="Home">
      <ul>
        <li>
          <Link to="/Assignment-04">Assignment-04</Link>
        </li>
        <li>
          <Link to="/Assignment-05">Assignment-05</Link>
        </li>
        <li>
          <Link to="/Assignment-06">Assignment-06</Link>
        </li>
        <li>
          <Link to="/Homework-04">Homework-04</Link>
        </li>
        <li>
          <Link to="/Homework-05">Homework-05</Link>
        </li>
        <li>
          <Link to="/Homework-06">Homework-06</Link>
        </li>
        <li>
          <Link to="/Homework-12">Homework-12</Link>
        </li>
        <li>
          <Link to="/Homework-13">Homework-13</Link>
        </li>
        <li>
          <Link to="/TodoApp">Todo App</Link>
        </li>
        <li>
          <Link to="/TicTac">WeeklyTest-Mar21 TicTac</Link>
        </li>
        <li>
          <Link to="/WT-01">WT-01</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Home;
