import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Formyitem from "../Item/Formyitem";
import "./Myitems.css";

const Myitem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Items</h1>
        {items.map((item) => (
          <Formyitem key={item._id} item={item}></Formyitem>
        ))}
      </div>
    </div>

    // <div className="items-container">
    //   {items.map((item) => (
    //     <Item key={item.id} item={item}></Item>
    //   ))}
    // </div>
  );
};

export default Myitem;
