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
    <div className={`fixed top-0 nav w-2/6 h-full bg-black z-10 shadow-lg transition-transform duration-300 ease-in-out ${open ? "nav" : "nav-close"}`}> </div>
    <div className="bg-white hidden p-3 md:flex md:flex-col md:items-center md:justify-between">
      <div onClick={Toggle}>{open ? <Close/>: <Menu /> }</div>

      <div className="nav-links flex flex-col space-y-2">
        <Link href="/">
        <RiHome4Line />
        </Link>
        <Link href="/"></Link>
        <Link href="/">
        <ShoppingBagOutlined className="text-lg"/>
        </Link>
        <Link href="/"></Link>
        <Link href="/">
        <LiaUserSolid />
        </Link>
        <Link href="/"></Link>
        <Link href="/">
        <MdOutlineAlternateEmail />
        </Link>
        <Link href="/"></Link>
      </div>
      <div className="social-links flex flex-col space-y-2">
        <Link href="/">
          <X className="text-lg"/>
        </Link>
        <Link href="/">
          <Facebook  className="text-lg"/>
        </Link>
        <Link href="/">
          <WhatsApp className="text-lg"/>
        </Link>
        <Link href="/">
          <Instagram className="text-lg"/>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Navbar;