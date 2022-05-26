import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import useItems from "../hooks/useItems";

const Myitem = () => {
  const [items, setItems] = useItems();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
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
    <div className="w-50 mx-auto">
      <h2>Manage your item</h2>

      {items.map((item) => (
        <div key={item._id}>
          <table class="table table-striped table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.suppliername}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <div>
        <a href="/additem" className="btn btn-primary btn-lg">
          Add New Item
        </a>
      </div>
    </div>
  );
};

export default Myitem;
