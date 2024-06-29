import React from "react";
import ThreeScene2 from "./BagModel";

const Promo = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="flex-col md:flex md:flex-row w-full bg-slate-200 md:w-4/5 image-container">
        <div className="w-full bg-transparent p-4 ">
            <div className="promo-text">
                 <h1 className="text-4xl md:text-7xl font relative top-20 text-slate-100">Matthew<span className=" text-emerald-300">'</span>s Stores Coming <span className=" text-emerald-300">Soon.</span></h1>
            <p></p>
            </div>
           
        </div>
        <ThreeScene2 />
      </div>
    </div>
  );
};

export default Promo;
