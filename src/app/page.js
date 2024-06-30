import React from "react";
import Display from "./(components)/Display";
import Navbar from "./(components)/Navbar";

const page = () => {
  return (
    <div className="flex flex-row-reverse">
      <Navbar/>
      <Display />
    </div>
  );
};

export default page;
