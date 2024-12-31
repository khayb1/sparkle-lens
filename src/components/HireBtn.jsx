/** @format */

import React from "react";

export const HireBtn = ({ children }) => {
  return (
    <a
      href="gallery"
      className="relative z-10 w-fit inline-block mx-auto px-3 py-3 bg-blue-600 hover:bg-blue-400 hover:text-black text-white font-semibold rounded-md transition"
    >
      {children}
    </a>
  );
};
