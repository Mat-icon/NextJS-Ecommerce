import React from "react";
import ThreeScene2 from "./BagModel";
import { MdArrowRight } from "react-icons/md";

const Promo = () => {
  return (
    <div className="w-full h-150 bg-slate-50">
      <div className="flex-col md:flex md:flex-col items-center w-full  image-container h-screen">
        {" "}
       
        <div className="w-full bg-transparent flex flex-col items-center p-4">
          <div className="promo-text relative top-20 text-center">
            <h1 className="text-4xl md:text-8xl font g ">
              Matthew&apos;s Stores <br/> Coming <span className=" ">Soon.</span>
            </h1>
            <p className="md:text-base text-xs text-slate-100 mt-4 ubuntu">
              Subscribe to our Newsletter for latest updates.
            </p>
            <form className="flex items-center justify-center mt-4 w-full ubuntu">
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
        </div> <ThreeScene2 />
      </div>
    </div>
  );
};

export default Promo;
