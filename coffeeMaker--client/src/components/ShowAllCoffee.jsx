import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DataContext } from "../App";
import CoffeeCards from "./CoffeeCards";
import { FaMugHot } from "react-icons/fa6";
// https://i.ibb.co/cFXVN1X/pexels-pixabay-162994.jpg
// https://i.ibb.co/c3Tp4gv/pexels-pok-rie-608127.jpg
// https://i.ibb.co/j4kmHvs/pexels-ari-jones-251336.jpg
// https://i.ibb.co/m4gwYP5/pexels-jill-wellington-3880909.jpg
// https://i.ibb.co/GxMhs3T/pexels-arya-bajra-15801008.jpg
// https://i.ibb.co/DbDY1Df/pexels-dina-nasyrova-5071493.jpg
const ShowAllCoffee = () => {

  const coffeeData=useContext(DataContext)
  console.log(coffeeData);
  return (
    <div className="px-36 py-20">
      <div className="text-center">
        <p>--Sip & Savor--</p>
        <h1 className="text-4xl font-bold">Our popular Product</h1>
      
        <button className="bg-[#E3B577] p-4 mx-auto mt-5 text-[#331A15] flex justify-center items-center gap-3 hover:bg-[#e8ded1]">

          Add Coffee <FaMugHot></FaMugHot>
        </button>
        {/* card */}
        <div className="grid grid-cols-2 gap-5 mt-10">
        {
          coffeeData.map(data=><CoffeeCards key={data._id} coffee={data} ></CoffeeCards>)
        }
        </div>
      </div>
    </div>
  );
};

export default ShowAllCoffee;
