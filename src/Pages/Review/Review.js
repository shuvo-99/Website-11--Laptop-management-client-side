import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  console.log(review);
  const { name, image, rating, reviews } = review;

  return (
    <div className="g-1 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "25rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Rating: {rating}</p>
          <p className="card-text">{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
