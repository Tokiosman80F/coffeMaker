import gallary1 from "../assets/gallary-1.jpeg" 
import gallary2 from "../assets/gallary-2.jpeg" 
import gallary3 from "../assets/gallary-3.jpeg" 
import gallary4 from "../assets/gallary-4.jpeg" 
import gallary5 from "../assets/gallary-5.jpeg" 
import gallary6 from "../assets/gallary-6.jpeg" 
import gallary7 from "../assets/gallary-7.jpeg" 
import gallary8 from "../assets/gallary-8.jpeg" 
const SocialMedia = () => {
    return (
        <div className="px-36 py-20 text-center" >
        <p >Follow Us Now</p>
        <h1 className="font-bold text-4xl my-5">Follow on Instagram</h1>
        {/* img */}
        <div className="grid grid-cols-4 gap-5 justify-center items-center">
          <img src={gallary1} alt="" />
          <img src={gallary2} alt="" />
          <img src={gallary3} alt="" />
          <img src={gallary4} alt="" />
          <img src={gallary5} alt="" />
          <img src={gallary6} alt="" />
          <img src={gallary7} alt="" />
          <img src={gallary8} alt="" />
        </div>
        </div>
    );
};

export default SocialMedia;