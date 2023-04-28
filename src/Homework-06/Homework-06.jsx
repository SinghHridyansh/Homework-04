import React from "react";
import "../Homework-06/Homework-06.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import HomeButton from "../HomeButton";

const Homework_06 = () => {
  function HW06_NavBar() {
    return (
      <nav className="HW06__Navbar">
        <div className="HW06_Nav_L">
          <img
            src="https://preview.redd.it/8tb71ntnacb71.png?width=10000&format=png&auto=webp&s=6610935fe7ad2086ad4418ec7293c591362486e2"
            alt=""
          />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="HW06_Nav_R">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </nav>
    );
  }

  function HW06_Hero() {
    return (
      <nav className="HW06_Hero">
        <div className="HW06_HeroL">
          <h1>Header Footer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            sapiente. Iste doloribus libero labore soluta numquam obcaecati
            omnis ullam dignissimos exercitationem earum commodi quis sed, odit
            eos neque? Ut atque delectus numquam, praesentium reiciendis hic
            excepturi nulla labore. Aliquam alias quidem nobis quia saepe
            voluptatem maxime ea quae, inventore tenetur tempora. Praesentium
            nulla voluptate tenetur distinctio velit beatae ab voluptatem!
          </p>
        </div>
        <div className="HW06_HeroR">
          <img
            src="https://www.oregonlive.com/resizer/vk5q6ER1jmTCCFBhSK9P6JqrccA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4OWPVUNYLNBRRJN2YEYK46PMUA.jpg"
            alt=""
          />
        </div>
      </nav>
    );
  }

  function HW06_footer() {
    return (
      <footer className="HW06_footer">
        <HW06_footer_block />
        <HW06_footer_block />
        <HW06_footer_block />
      </footer>
    );
  }
  function HW06_footer_block() {
    return (
      <footer className="HW06_footer_block">
        <h3>Block Header</h3>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          quam vitae iure rerum nobis qui debitis rem recusandae doloribus et
          nihil atque necessitatibus consectetur officia commodi, quasi quod,
          optio aperiam.
        </h3>
      </footer>
    );
  }
  return (
    <div className="Homework_06">
      <HW06_NavBar />
      <HW06_Hero />
      <HW06_footer />
      <HomeButton />
    </div>
  );
};

export default Homework_06;
