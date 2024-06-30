"use client";
import React, { useState } from "react";
import MyFbxModel from "./MyFbxModel";
import Link from "next/link";
import Footer from "./Footer";
import Product from "./Product";
import { ShoppingBagOutlined } from "@mui/icons-material";
import Promo from "./Promo";
import Image from "next/image";
import Navbar from "./Navbar";
import { Menu, Close } from "@mui/icons-material";

const Display = () => {
  const [open, setOpen] = useState(false);

  function Toggle() {
    setOpen(!open);
  }

  return (
    <section className="w-full h-screen relative mx-auto selection:bg-emerald-400 overflow-x-hidden">
      <div
        className={`fixed top-0 nav w-full md:right-2 right-0 lg:w-3/12 md:w-5/12 h-full p-8  bg-white z-10  transition-transform duration-300 ease-in-out ${
          open ? "nav" : "nav-close"
        }`}
      >
        <ul className=" space-y-7 p-3">
          <h1 className="font text-sm" style={{ color: "#333" }}>
            SHOP
          </h1>
          <div className="space-y-3 font-400 text-lg tracking-wider">
            <li>
              <Link href="/">All Products</Link>
            </li>
            <li>
              <Link href="/">All Brands</Link>
            </li>
            <li>
              <Link href="/">Apparel & Clothings</Link>
            </li>
            <li>
              <Link href="/"></Link>
            </li>
          </div>
        </ul>
        <div className="w-10/12 absolute bottom-5 font-400">
          <ul className="w-full space-y-1">
            <li className=" w-full p-3 border-t border-t-gray-300">
              <Link href="/">ABOUT MATTHEW&apos;S STORE</Link>
            </li>
            <li className=" w-full p-3 border-t border-t-gray-300">
              <Link href="/">SUBSCRIBE</Link>
            </li>
            <li className=" w-full p-3 border-t border-t-gray-300">
              <Link href="/">PRODUCERS</Link>
            </li>
            <li className=" w-full p-3 border-t border-t-gray-300">
              <Link href="/">CONTACT</Link>
            </li>
            <li className=" w-full p-3 border-t border-t-gray-300">
              <Link href="/">CREATE AN ACCOUNT</Link>
            </li>
            <li className=" w-full p-3 border-t border-t-gray-300 border-b border-b-gray-300">
              <Link href="/signin">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-4/5 hero-img  flex flex-col items-center text-center justify-center p-10 ">
        <div className="logo w-4/5 p-1 ">
          <Image
            height={500}
            width={500}
            src="/images/logowhite.png"
            className="w-14 md:w-20 object-contain bg-emerald-700 p-1 rounded-full"
            alt="logo"
          />

          <div onClick={Toggle} className="md:hidden block text-white">
            {open ? <Close className=" text-emerald-400"/> : <Menu  className="bg-emerald-400 rounded-full"/>}
          </div>
        </div>

        <h1 className="font-bold  text-4xl md:text-6xl lg:text-7xl text-slate-200 font">
          <span className="border-l-emerald-500 border-l-4 pl-2">Best</span>{" "}
          prices, Best products <br /> for your Home
        </h1>
        <Link
          href="/"
          className="mt-5 p-4 text-sm border border-r-emerald-400 rounded-md flex text-white"
        >
          Shop Now
          <ShoppingBagOutlined className="text-lg ml-1" />
        </Link>
      </div>

      <MyFbxModel />
      <Product />
      <Promo />
      <Footer />
    </section>
  );
};

export default Display;
