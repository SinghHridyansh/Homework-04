import React, { useEffect, useState } from "react";
import "../Homework-13/Homework-13.css";
import HomeButton from "../HomeButton";

const Homework_13 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDAta = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setProducts(data.results);

      console.log(data.results);
    };

    fetchDAta();

    return () => {
      console.log("Some cleanup is performed here");
    };
  }, []);

  return (
    <div className="Homework_13">
      <h1>Homework_13</h1>
      <h4>Random user</h4>
      {products[0] !== undefined ? (
        <>
          <div className="Homework_13_personcard">
            <img src={products[0].picture.large} alt="" />
            <p>
              {products[0].name.first} {products[0].name.last}
            </p>
            <p>Age : {products[0].dob.age}</p>
            <p>
              {products[0].location.state}, {products[0].location.country}
            </p>
            <p>{products[0].cell}</p>
            <p>{products[0].email}</p>
          </div>
        </>
      ) : (
        <div>Loading.</div>
      )}
      <HomeButton />
    </div>
  );
};

export default Homework_13;
