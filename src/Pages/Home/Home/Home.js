import React from "react";
import AboutUs from "../../About Us/AboutUs";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
const Home = () => {
  return (
    <div id="home">
      <h2>this is home</h2>
      <Banner></Banner>
      <br />
      <Items></Items>
      <br />
      <AboutUs></AboutUs>
    </div>
  );
};
export default Home;
