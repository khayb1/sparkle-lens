/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXY5MWRyZ3JvdG9lNzRnNms5enloZTB2bHpkcGZicDEzM3U5eXBpNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HyLhElXKuOJVD7ndG9/giphy.gif")`,
          }}
        ></div>
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-6">
            Oops! The page you're looking for is out of focus.
          </p>
          <p className="mb-8 text-gray-400">
            The page might have been deleted, moved, or is temporarily
            unavailable.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-semibold"
          >
            Go Back to Homepage
          </Link>
        </div>

        {/* Decorative Icon */}
        <div className="relative mt-10 z-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Camera Icon"
            className="w-16 h-16 mx-auto animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
