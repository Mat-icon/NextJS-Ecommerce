'use client'

import React, { useEffect, useRef } from "react";
import Display from "./Display";
import Promo from "./Promo";
import Navbar from "./Navbar";
import Product from "./Product";
import Footer from "./Footer";
import MyFbxModel from "./MyFbxModel";


let lenis;
if (typeof window !== 'undefined') {
  lenis = require("./Lenis").default;
}

const Hero = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (lenis && scrollContainer.current) {
      lenis.on('scroll', ({ scroll }) => {
        console.log(scroll);
      });
    }

    return () => {
      if (lenis) {
        lenis.off('scroll');
      }
    };
  }, []);

  return (
    <div className="h-auto bg-slate-50 selection:bg-emerald-400" ref={scrollContainer}>
      <Navbar />
      <Display />
      <MyFbxModel />
      <Product />
      <Promo />
      <Footer />
    </div>
  );
};

export default Hero;
