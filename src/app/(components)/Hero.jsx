'use client'

import React from "react";
import Display from "./Display";
import Promo from "./Promo";
import lenis from "./Lenis";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import Product from "./Product";
import Footer from "./Footer";
import MyFbxModel from "./MyFbxModel";

const Hero = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && scrollContainer.current) {
      lenis.on('scroll', ({ scroll }) => {
        console.log(scroll);
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        lenis.off('scroll');
      }
    };
  }, []);
  return (
    <div className=" h-auto bg-slate-50  selection:bg-emerald-400" ref={scrollContainer}>
      <Navbar/>
      <Display/>
      <MyFbxModel/>
      <Product/>
      <Promo/>
      <Footer/>
    </div>
  );
};

export default Hero;