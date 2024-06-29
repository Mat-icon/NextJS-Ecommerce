import React from "react";
import ThreeScene2 from "./BagModel";
import { MdArrowRight } from "react-icons/md";

const Promo = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="flex-col md:flex md:flex-row w-full bg-slate-200 md:w-4/5 image-container h-screen">
        {" "}
        <ThreeScene2 />
        <div className="w-full bg-transparent p-4">
          <div className="promo-text relative top-20">
            <h1 className="text-4xl md:text-7xl font text-slate-100">
              Matthew&apos;s Stores Coming <span className=" ">Soon.</span>
            </h1>
            <p className="md:text-base text-xs text-emerald-700 mt-3 ubuntu">
              Subscribe to our Newsletter for latest updates.
            </p>
            <form className="flex items-center mt-4 w-full ubuntu">
              <input
                placeholder="Email address..."
                type="email"
                required
                className=" bg-transparent border text-white outline-none p-2 text-sm w-4/5 md:w-3/5 rounded-md"
              />
              <button className=" p-2 rounded-full ml-3 bg-emerald-400 hover:scale-75 duration-300  hover:bg-white">
                <MdArrowRight color="white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
