import React from 'react';
import logo from "../../assets/logo.png"
import bgHeader from "../../assets/bg-img-1.jpeg";
const Header = () => {
    return (
        <div className="relative ">
        <img src={bgHeader} alt="" className="h-20 w-full" />
        <div className="absolute flex gap-5 items-center justify-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={logo} alt="" className="h-14"/>
        <h1 className="text-4xl">Espresso Emporium</h1>
        </div>
      </div>
    );
};

export default Header;