import React from "react";
import { useForm } from "react-hook-form";

const Additem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://whispering-ravine-75605.herokuapp.com/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a new item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}

        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 100 })}
        />

        {/* Price */}

        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />

        {/* Quantity */}

        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />

        {/* SupplierName */}

        <input
          className="mb-2"
          placeholder="SupplierName"
          {...register("suppliername", { required: true, maxLength: 50 })}
        />

        {/* Description */}

        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />

        {/* image */}

        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default Additem;
