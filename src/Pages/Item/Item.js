import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { id, name, img, description, price } = item;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate("/checkout");
  };
  return (
    <div className="g-1 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "25rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: Tk {price}</p>
          <p className="card-text">{description}</p>
          <a
            href="#"
            onClick={() => navigateToServiceDetail(id)}
            className="btn btn-warning"
          >
            Update: {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
