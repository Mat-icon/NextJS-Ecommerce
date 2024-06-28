"use client";

import React, { useEffect, useState } from "react";

const fetchProducts = async () => {
  return [
    {
      id: 1,
      name: "Product 1",
      description: "$45.50",
      image: "../images/5.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "$39.99",
      image: "../images/4.png",
    },
    {
      id: 3,
      name: "Product 3",
      description: "$50.00",
      image: "../images/2.png",
    },
    {
      id: 4,
      name: "Product 4",
      description: "$12.33",
      image: "../images/3.png",
    },
    {
      id: 5,
      name: "Product 5",
      description: "$12.33",
      image: "../images/1.png",
    },
    {
      id: 1,
      name: "Product 6",
      description: "$32.50",
      image: "../images/5.png",
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
    <div className="w-full h-auto p-10 bg-slate-50">
      <div className="product">
        <div className="product-title w-full text-left">
          <h1 className="font-bold text-5xl md:text-9xl font">ALL PRODUCTS</h1>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20">
          {products.map((product) => (
            <div key={product.id} className="p-container bg-slate-100 p-4 rounded-md hover-effect relative overflow-hidden">
              <div className="product-image-container relative">
                <img
                  src={product.image} // Replace with your image source
                  alt={product.name}
                  className="product-image w-full h-full object-cover transition-transform duration-300 scale-50"
                />
              </div>
              <div className="product-info absolute inset-0 rounded-md  text-white opacity-0 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div>{product.description}</div>
              </div>
              <div className="product-name-description flex items-center justify-between">
                <div className="ubuntu-bold text-2xl">{product.name}</div>
                <div className="p-description text-gray-800 text-sm">{product.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
