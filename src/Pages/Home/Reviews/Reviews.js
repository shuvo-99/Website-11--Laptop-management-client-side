import React, { useEffect, useState } from "react";
import Review from "../../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div id="reviews" className="container">
      <div className="row">
        <h1>Reviews</h1>
        {reviews.map((review) => (
          <Review key={review._id} item={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
