import bgbanner from "../../assets/bg-img-2.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";

import SocialMedia from "../SocialMedia";
const Home = () => {
  return (
    <div>
      <div className="relative">
        <img src={bgbanner} alt="" className="h-[90vh] w-full" />
        {/* text */}
        <div className="absolute text-white top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl mb-3">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable
          </p>
          <button className="bg-[#E3B577] text-black p-2 mt-">
            Learn More
          </button>
        </div>
      </div>
      {/* characteristic */}
      <div className="bg-[#ECEAE3] flex px-36 py-20">
        <div>
          <img src={icon1} alt="" />
          <h1 className="text-[#331A15] text-2xl">Awesome Aroma</h1>
          <p className="text-black ">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h1 className="text-[#331A15] text-2xl">High Quality</h1>
          <p className="text-black">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h1 className="text-[#331A15] text-2xl">Pure Grades</h1>
          <p className="text-black">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <h1 className="text-[#331A15] text-2xl">Proper Roasting</h1>
          <p className="text-black">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>

      {/* follow on social media */}
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Home;
