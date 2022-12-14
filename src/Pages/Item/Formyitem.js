import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useItems from "../hooks/useItems";
import "./Item.css";

const Formyitem = ({ item }) => {
  const { _id, name, img, description, price, quantity, suppliername } = item;
  const navigate = useNavigate();

  const navigateToManageInventory = (id) => {
    navigate(`/item/${id}`);
  };

  const [items, setItems] = useItems();

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
          // Adding reload button to show updated items on UI
          window.location.reload(false);
        });
    }
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
          <div>
            <a
              href="#"
              onClick={() => navigateToManageInventory(_id)}
              className="btn btn-warning me-2"
            >
              Update
            </a>
            <button
              className="btn btn-danger "
              onClick={() => handleDelete(item._id)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formyitem;
