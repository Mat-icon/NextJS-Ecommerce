import React from "react";
import MyFbxModel from "./MyFbxModel";
import TextAnimation from "./TextAnimation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Product from "./Product";
import { ShoppingBagOutlined } from "@mui/icons-material";

const Display = () => {
  return (
    <section className="h-screen w-full relative mx-auto">
      <div className="w-full h-4/5 hero-img  flex flex-col items-center text-center justify-center p-10 ">
        {" "}
        <div className="logo p-1">
            <img
          src="../images/logowhite.png"
          className="w-full h-full object-contain"
          alt="logo"
        />
        </div>
      
        <h1 className="font-bold text-3xl md:text-6xl  text-slate-100 font">
          Best Prices, Best Products <br /> For Your Home
        </h1>
        <Link href="/" className="mt-5 p-4 text-sm border rounded-md flex text-white">
          Shop Now
          <ShoppingBagOutlined className="text-lg ml-1"/>
        </Link>
      </div>
      <MyFbxModel />
      <Product />
    </section>
  );
};

export default Display;
