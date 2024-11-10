import React from "react";

const FoodItem = () => {
  return (
    <>
      <div id="foodItem" class="card">
        <img src="image.jpg" alt="Card Image" class="card-image" />
        <div class="card-content">
          <h2 class="card-title">Card Title</h2>
          <p class="card-description">
            This is a description of the card. It provides a brief overview of
            the card content.
          </p>
          <button class="card-button">Read More</button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
