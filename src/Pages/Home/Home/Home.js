import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutUs from "../../About Us/AboutUs";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Reviews from "../Reviews/Reviews";
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
            <Button variant="danger" className="btn btn-lg">
              Manage Inventories
            </Button>
          </Link>
        </nav>
      </div>
      <br />
      <AboutUs></AboutUs>
      <br />
      <Reviews></Reviews>
    </div>
  );
};
export default Home;
