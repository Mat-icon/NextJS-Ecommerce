'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cart = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(
        cardRef.current,
        {
            scrollTrigger: {
                markers: true,
                trigger : cardRef.current,
                start : "top top",
                end : "bottom bottom",
                pin : true,
                pinSpacing : false
            },
        }
    )
  
  }, [])
  

  return (
    <>
      <div className="w-full h-200 card-body bg-slate-200 flex justify-center items-start pt-8 ">
        <div className="cart-details w-9/12 h-4/5 flex flex-row">
          <div className="cart-text w-3/5 bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {/* Add your cart item details here */}
            <p>Cart items will be listed here.</p>
            <p>Scroll down to see more content.</p>
          
            {/* This is to create a scrollable area for demo purposes */}
          </div>
          <div className="cart-add w-2/5 bg-white p-4 sticky top-32  " ref={cardRef}>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {/* Add your order summary details here */}
            <p>Order summary details will be listed here.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-gray-800"></div>
    </>
  );
};

export default Cart;
