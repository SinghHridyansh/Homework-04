import "./App.css";
import { BrowserRouter, Route, Routes, route } from "react-router-dom";
import Card_02 from "./Assignment-04/Assignment-04";
import Card_1 from "./Homework-04/Homework-04";
import Homework_05 from "./Homework-05/Homework-05";
import Assignment_05 from "./Assignment-05/Assignment-05";
import WT_01 from "./WT-01/WT-01";
import Assignment_06 from "./Assignment-06/Assignment-06";
import Homework_06 from "./Homework-06/Homework-06";
import Todo from "./Todo App/Todo";
import TicTac from "./WeeklyTest-Mar21 TicTac/TicTac";
import Homework_13 from "./Homework-13/Homework-13";
import Homework_12 from "./Homework-12/Homework-12";
import Home from "./Home";
import HomeButton from "./HomeButton";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeButton />} />
        <Route index element={<Home />} />
        <Route path="Assignment-04" element={<Card_02 />} />
        <Route path="Assignment-05" element={<Assignment_05 />} />
        <Route path="Assignment-06" element={<Assignment_06 />} />
        <Route path="Homework-04" element={<Card_1 />} />
        <Route path="Homework-05" element={<Homework_05 />} />
        <Route path="Homework-06" element={<Homework_06 />} />
        <Route path="Homework-12" element={<Homework_12 />} />
        <Route path="Homework-13" element={<Homework_13 />} />
        <Route path="TodoApp" element={<Todo />} />
        <Route path="TicTac" element={<TicTac />} />
        <Route path="WT-01" element={<WT_01 />} />
      </Routes>
    </BrowserRouter>
  );
}

// className = "App";
