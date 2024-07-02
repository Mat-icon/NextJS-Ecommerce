"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LiaUserSolid } from "react-icons/lia";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {  Close, Facebook, Instagram, Menu, ShoppingBagOutlined, WhatsApp, X } from "@mui/icons-material";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  function Toggle() {
    setOpen(!open);
  }

  return (      
    <>
    
    <div className={`fixed top-0 nav w-full md:right-2 right-0 lg:w-3/12 md:w-5/12 h-full p-6  bg-white z-10  transition-transform duration-300 ease-in-out ${open ? "nav" : "nav-close"}`}>
      <ul className=" space-y-7 p-3">
        <h1 className="font text-sm" style={{color: "#333"}}>SHOP</h1>
        <div className="space-y-3 font-400 text-lg tracking-wider">
          <li><Link href='/'>All Products</Link></li>
        <li><Link href='/'>All Brands</Link></li>
        <li><Link href='/'>Apparel & Clothings</Link></li>
        <li><Link href='/'></Link></li>
        </div>
        
      </ul>
      <div className="w-10/12 absolute bottom-5 font-400">
        <ul className="w-full space-y-1">
          <li className=" w-full p-3 border-t border-t-gray-300"><Link href='/'>ABOUT MATTHEW&apos;S STORE</Link></li>
          <li className=" w-full p-3 border-t border-t-gray-300" ><Link href='/' >SUBSCRIBE</Link></li>
          <li className=" w-full p-3 border-t border-t-gray-300"><Link href='/'>PRODUCERS</Link></li>
          <li className=" w-full p-3 border-t border-t-gray-300"><Link href='/'>CONTACT</Link></li>
          <li className=" w-full p-3 border-t border-t-gray-300"><Link href='/'>OUR PRODUCTS</Link></li>
          <li className=" w-full p-3 border-t border-t-gray-300 border-b border-b-gray-300"><Link href='/'>COMMERCIAL</Link></li>
        </ul>
      </div>
     </div>
    <div className=" z-20 h-screen bg-white hidden fixed top-0 right-0 p-3 md:flex md:flex-col md:items-center md:justify-between">
      <div onClick={Toggle}>{open ? <Close/>: <Menu /> }</div>

      <div className="nav-links flex flex-col space-y-4 " style={{color: "#333"}}>
        <Link href="/">
        <RiHome4Line className="text-lg hover:text-emerald-400 hover:scale-105 duration-300 ease-in"/>
        </Link>
      
        <Link href="/cart">
        <ShoppingBagOutlined className="text-lg hover:text-emerald-400 hover:scale-105 duration-300 ease-in"/>
        </Link>
       
        <Link href="/signin">
        <LiaUserSolid className="text-lg hover:text-emerald-400 hover:scale-105 duration-300 ease-in"/>
        </Link>
        
        <Link href="/">
        <MdOutlineAlternateEmail className="text-lg hover:text-emerald-400 hover:scale-105 duration-300 ease-in"/>
        </Link>
        
      </div>
      <div className="social-links flex flex-col space-y-2" style={{color: "#333"}}>
        <Link href="/">
          <X className="text-lg hover:text-emerald-400 hover:scale-105 duration-300 transition-all ease-in"/>
        </Link>
        <Link href="/">
          <Facebook  className="text-lg hover:text-emerald-400 hover:scale-105 transition-all duration-300 ease-in"/>
        </Link>
        <Link href="/">
          <WhatsApp className="text-lg hover:text-emerald-400 hover:scale-105 transition-all duration-300 ease-in"/>
        </Link>
        <Link href="/">
          <Instagram className="text-lg hover:text-emerald-400 hover:scale-105 transition-all duration-300 ease-in"/>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Navbar;