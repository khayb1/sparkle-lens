import React from 'react'

export const HireBtn = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative z-10 w-fit inline-block mx-auto px-3 py-3 bg-blue-600 hover:bg-blue-400 hover:text-black text-white font-semibold rounded-md transition"
    >
      {children}
    </a>
  );
};
