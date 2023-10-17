import React from "react";

const CoffeeCards = ({ coffee }) => {
  console.log("this =>", coffee);
  const { _id, name, chef, supplier, taste, photo, category, detail } = coffee;
  return (
    <div>
      <div className="card card-side  shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
