import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { FaArrowLeft } from "react-icons/fa6";
const AddCoffeeForm = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const detail = form.detail.value;
    const coffeeDetail = {
      name,
      chef,
      supplier,
      taste,
      category,
      photo,
      detail,
    };
    console.log(coffeeDetail);
    fetch(`http://localhost:3000/coffee`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(coffeeDetail)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Coffee detail data =>",data);
        form.reset()
      });
  };
  return (
    <>
      <Header></Header>
      <div className="px-36 py-20  bg-[#ffffff]">
        <button className="bg-[#E3B577] p-4 mb-5 text-[#331A15] flex justify-center items-center gap-3 hover:bg-[#e8ded1]">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </button>

        <form onSubmit={handleAddCoffee} className=" bg-[#eeebe2] p-10">
          <h1 className="text-4xl text-center text-[#331A15]">
            Add New Coffee
          </h1>
          {/* name and chef */}
          <div className="flex gap-5 py-2">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="text-[#331A15]">Name</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Enter your Coffee Name"
                  className="input input-bordered bg-white"
                  required
                  name="name"
                />
              </label>
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[#331A15]">Chef</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Chef name"
                  className="input input-bordered bg-white"
                  required
                  name="chef"
                />
              </label>
            </div>
          </div>

          {/* Supplier and Taste */}
          <div className="flex gap-5 py-2">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="text-[#331A15]">Supplier</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Supplier"
                  className="input input-bordered bg-white"
                  required
                  name="supplier"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[#331A15]">Taste</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="taste"
                  className="input input-bordered bg-white"
                  required
                  name="taste"
                />
              </label>
            </div>
          </div>

          {/* category and detail */}
          <div className="flex gap-5 py-2">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="text-[#331A15]">category</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="category"
                  className="input input-bordered bg-white"
                  required
                  name="category"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[#331A15]">detail</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="detail"
                  className="input input-bordered bg-white"
                  required
                  name="detail"
                />
              </label>
            </div>
          </div>

          {/* photo */}
          <div className="flex gap-5 py-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-[#331A15]">Photo</span>
              </label>
              <label className=" input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered bg-white"
                  required
                  name="photo"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="block w-full py-3 bg-[#E3B577] text-[#331A15] hover:bg-[#e5a450]"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddCoffeeForm;

// Image url
// https://i.ibb.co/GxMhs3T/pexels-arya-bajra-15801008.jpg
// https://i.ibb.co/j4kmHvs/pexels-ari-jones-251336.jpg
// https://i.ibb.co/c3Tp4gv/pexels-pok-rie-608127.jpg
// https://i.ibb.co/m4gwYP5/pexels-jill-wellington-3880909.jpg
// https://i.ibb.co/GxMhs3T/pexels-arya-bajra-15801008.jpg
// https://i.ibb.co/DbDY1Df/pexels-dina-nasyrova-5071493.jpg