import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Formyitem from "../Item/Formyitem";
import "./Myitems.css";

const Myitem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://whispering-ravine-75605.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to DELETE it?");
    if (proceed) {
      const url = `https://whispering-ravine-75605.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>My Items</h1>
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
