import React from "react";

const CoffeeCards = ({ coffee }) => {
  console.log("this =>", coffee);
  const { _id, name, chef, supplier, taste, photo, category, detail } = coffee;
  return (
    <div>
      <div className="card card-side bg-[#E3B577] shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Movie"
            className="w-full"
          />
        </figure>
        <div className="card-body">
            <div className="text-[#331A15]">
                <p>Name:{name}</p>
                <p>Chef:{chef}</p>
                <p>taste:{taste}</p>
            </div>
          <div className="card-actions justify-end">
            <button className="btn bg-[#331A15] text-white">view</button>
            <button className="btn   bg-[#331A15] text-white">edit</button>
            <button className="btn  bg-[#331A15] text-white">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
