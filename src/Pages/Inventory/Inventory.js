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

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const quantity = event.target.quantity.value;

    const updatedUser = { quantity };

    // send data to the server
    const url = `http://localhost:5000/item/${itemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        event.target.reset();
        // Adding reload button to show updated items on UI
        window.location.reload(false);
      });
  };

  function delivered() {
    if (item.quantity > 0) {
      // item.quantity = item.quantity - 1;
      let d = item.quantity - 1;
      item.quantity = d;
      console.log(item.quantity);
      return item.quantity;
      // return d;
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
      <br />
      <h2>Restock the items</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          className="mb-2"
          name="quantity"
          placeholder="Quantity"
          type="number"
          // {...register("quantity")}
        />
        {/* <br />
        <input type="email" name="email" placeholder="Email" required /> */}
        <br />
        <input type="submit" value="Restocking" />
      </form>
    </div>
  );
};

export default Inventory;
