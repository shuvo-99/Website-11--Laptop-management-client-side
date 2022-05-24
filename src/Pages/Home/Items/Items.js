import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Item from "../../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("a.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div id="items" className="container">
      <div className="row">
        <h1>Items</h1>
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
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

export default Items;
