import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { _id, name, img, description, price, quantity, suppliername } = item;
  const navigate = useNavigate();

  const navigateToInventory = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className="g-1 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "25rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: Tk {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier Name: {suppliername}</p>
          <p className="card-text">{description}</p>
          <a
            href="#"
            onClick={() => navigateToInventory(_id)}
            className="btn btn-warning"
          >
            Update
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
