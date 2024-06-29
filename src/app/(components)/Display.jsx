import React from "react";
import MyFbxModel from "./MyFbxModel";
import TextAnimation from "./TextAnimation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Product from "./Product";
import { ShoppingBagOutlined } from "@mui/icons-material";
import Promo from "./Promo";
import Image from "next/image";

const Display = () => {
  return (
    <section className="h-screen w-full relative mx-auto selection:bg-emerald-400 overflow-x-hidden">
      <div className="w-full h-4/5 hero-img  flex flex-col items-center text-center justify-center p-10 ">
        {" "}
        <div className="logo p-1 bg-emerald-700">
            <Image
            height={500}
            width={500}
          src="/images/logowhite.png"
          className="w-full h-full object-contain"
          alt="logo"
        />
        </div>
      
        <h1 className="font-bold  text-4xl md:text-7xl  text-slate-200 font">
          <span className="border-l-emerald-500 border-l-4 pl-2">Best</span> prices, Best products <br /> for your Home
        </h1>
        <Link href="/" className="mt-5 p-4 text-sm border border-r-emerald-400 rounded-md flex text-white">
          Shop Now
          <ShoppingBagOutlined className="text-lg ml-1"/>
        </Link>
      </div>
      <MyFbxModel />
      <Product />
      <Promo/>
    </section>
  );
};

export default Display;
