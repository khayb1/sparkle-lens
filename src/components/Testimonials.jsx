/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../../images/assets/TestimonialData";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-10 md:px-10 lg:px-20 bg-blue-200">
      <h3 className="text-2xl md:text-3xl text-blue-700 font-light mb-4">
        Testimonials
      </h3>
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">
        What People Are Saying
      </h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="p-6 bg-slate-200 shadow-lg rounded-lg max-h-60 cursor-grab">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 object-center rounded-xl mb-4 mx-auto"
              />
              <p className="text-gray-700 mb-4 text-center">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-bold text-lg text-center">
                {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
