import React from "react";
import { Link, useParams } from "react-router-dom";

const ManageInventory = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h2>Welcome to detail: {itemId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;
