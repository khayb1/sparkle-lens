/** @format */

import React from "react";
import "../pages/Home.css";
import { HireBtn } from "../HireBtn";
import { Hero } from "../index";

const Home = (href) => {
  return (
    <div className=" h-screen flex items-center justify-center space-x-10 bg-cover bg-center hero px-8 body ">
      {/* Content */}
      <div className="relative text-center max-w-3xl p-4 md:p-2 lg:p-6 md:mt-[1rem]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Capture Life's Beautiful Moments
        </h1>
        <p className="text-lg md:text-xl mb-6 ">
          Professional photography services for all occasions. Creating
          memories that last a lifetime.
        </p>
        <HireBtn href='/gallery'>View Gallery</HireBtn>
      </div>

      <div className="flex items-center justify-center h-3/4 mt-4 ">
        <img
          src={Hero}
          alt="Photography img"
          className="w-100 h-full animate-custom-bounce object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
