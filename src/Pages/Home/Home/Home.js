import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutUs from "../../About Us/AboutUs";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <br />
      <Items></Items>
      <br />
      <br />
      <div>
        <nav>
          <Link to="/manageitem">
            <Button variant="danger">Manage Inventories</Button>
          </Link>
        </nav>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
};
export default Home;
