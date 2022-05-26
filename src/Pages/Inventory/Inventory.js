import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/item/${itemId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  function delivered() {
    if (item.quantity > 0) {
      // item.quantity = item.quantity - 1;
      let d = item.quantity - 1;
      item.quantity = d;
      console.log(item.quantity);
      // return item.quantity;
      return d;
    }
  }
  return (
    <div>
      {/* <h2>Manage Inventory: {item.name}</h2> */}
      <h2>Manage Inventory</h2>
      <br />
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Delivered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.suppliername}</td>
            <td>
              <button className="btn btn-danger" onClick={delivered}>
                Delevered
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
