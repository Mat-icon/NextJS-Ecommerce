"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const fetchProducts = async () => {
  return [
    {
      id: 1,
      name: "Adidas",
      description: "$45.50",
      image: "/images/5.png",
      model: "Adidas Original",
      type: "Original",
      brand: "Adidas",
      color:"White & Pink"
    },
    {
      id: 2,
      name: "Vans",
      description: "$39.99",
      image: "/images/4.png",
      model: "Old Skool",
      type: "Vintage",
      brand: "Vans",
      color:"Black"
    },
    {
      id: 3,
      name: "New Balance",
      description: "$50.00",
      image: "/images/2.png",
      model: "Balance Running Shoes",
      type: "Trainers",
      brand: "New Balance",
      color:"Skyblue"
    },
    {
      id: 4,
      name: "WayHwang",
      description: "$12.33",
      image: "/images/3.png",
      model: "Running Shoes",
      type: "Ninja Breeze",
      brand: "WayHwang",
      color:"Black & Red"
    },
    {
      id: 5,
      name: "Nike",
      description: "$12.33",
      image: "/images/1.png",
      model: "Air Jordan",
      type: "Air Jordan 1",
      brand: "Nike",
      color:"Blue"
    },
    {
      id: 6,
      name: "Adidas",
      description: "$32.50",
      image: "/images/5.png",
      model: "Adidas Gazelle",
      type: "Gazelle Original",
      brand: "Adidas",
      color:"White & Pink"
    },
    {
      id: 7,
      name: "New Balance",
      description: "$50.00",
      image: "/images/2.png",
      model: "Balance Running Shoes",
      type: "Trainers",
      brand: "New Balance",
      color:"Skyblue"
    },
    {
      id: 8,
      name: "Nike",
      description: "$12.33",
      image: "/images/1.png",
      model: "Air Jordan",
      type: "Air Jordan 1",
      brand: "Nike",
      color:"Blue"
    },
    {
      id: 9,
      name: "Vans",
      description: "$39.99",
      image: "/images/4.png",
      model: "Old Skool",
      type: "Vintage",
      brand: "Vans",
      color:"Black",
    },
    // Add more products as needed
  ];
};

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-auto p-4 md:p-10  bg-slate-50">
      <div className="product">
        <div className="product-title w-full text-left">
          <h1 className="font-bold text-5xl md:text-9xl font g">ALL PRODUCTS<sub className="ml-3 text-2xl">{products.length}</sub></h1>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-container bg-slate-100 p-4 rounded-md hover-effect relative overflow-hidden"
            >
              <div className="product-image-container relative">
                <Image
                width={500}
                height={500}
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-full object-cover transition-transform duration-300 scale-50"
                />
              </div>
              <div className="product-info ubuntu  absolute inset-0 rounded-md  text-white opacity-0 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="w-full ubuntu-bold text-5xl">{product.model}</div>
                <div className=" font-bold text-base">
                  <ul>
                    <li>Type :      {product.type}</li>
                    <li>Brand :     {product.brand}</li>
                    <li>Color :     {product.color}</li>
                  </ul>
                </div>
              </div>
              <div className="product-name-description flex items-center justify-between">
                <div className="ubuntu-bold text-2xl">{product.name}</div>
                <div className="p-description text-gray-800 text-sm ubuntu">
                  {product.description}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Product;
