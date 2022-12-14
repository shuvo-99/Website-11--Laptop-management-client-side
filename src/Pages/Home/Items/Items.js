import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Item from "../../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://whispering-ravine-75605.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data.slice(0, 6)));
  }, []);

  return (
    <div id="items" className="container">
      <div className="row">
        <h1>Items</h1>
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
