'use client'

import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);


const TextAnimation = () => {

 useEffect(() => {
   const textWrapper = document.querySelectorAll(".your-text-wrapper-class");

   const pinTrigger = ScrollTrigger.create({
    markers : true,
    trigger : ".content-wrapper",
    start : "top top",
    pin : true,
    end : "+=300%",


   })
  let tl = gsap.timeline();

  tl.to(textWrapper, {
    x : "-200%",
    ScrollTrigger : {
      start : () => pinTrigger.start,
      end : () => pinTrigger.end,
      scrub : 1,
    }
  })

  return () => {
    pinTrigger.kill();
    tl.kill();
  }
 }, [])
 
  return (
    <div className="content-wrapper bg-lime-300">
      <div className="your-text-wrapper-class flex justify-center items-center h-screen">
        <h1 className=' font-bold transform translate-x-[70%] whitespace-nowrap text-9xl text-wrapper '>
          A new way of design and being creative
        </h1>
      </div>
    </div>
  )
}

export default TextAnimation