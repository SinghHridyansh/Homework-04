import React from "react";
import { useState, useEffect } from "react";
import "../Homework-12/Homework-12.css";
import Homework_12_ProductCard from "./Homework-12-ProductCard";
import HomeButton from "../HomeButton";

const Homework_12 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Homework_12">
      <nav className="Homework_12_nav">
        <h4>Homework 12</h4>
        <h2>Jamuna.store</h2>
      </nav>
      <div className="Homework_12_Container">
        {data.map((item, key) => (
          <Homework_12_ProductCard
            keys={key}
            image={item.image}
            title={item.title}
            cost={item.price}
            stars={item.rating.rate}
            starscount={item.rating.count}
            desc={item.description}
          />
        ))}
      </div>
      <HomeButton />
    </div>
  );
};

export default Homework_12;
