import React from "react";
import { NewHeader } from "../NewHeader";
import Testimonials from "../Testimonials";


export const About = () => {
  return (
    <>
    <NewHeader
  backgroundImage={("./images/about-bg.webp")}
  header="ABOUT"
  text="Hello There I am Yaw a professional photographer"
  className="mb-10"
/>
      <div className="flex flex-col md:flex-row items-center md:items-start p-10 pb-24">
        <div className="flex-1 md:w-1/2 bg-white p-5 pb-28 m-6 md:m-12 shadow-lg border border-gray-300 hover:rotate-0 transition duration-500 -rotate-6 relative">
        <img
          src="./images/avatar.jpg"
          alt="About Image"
          className="w-full h-auto object-cover rounded-lg"
        />
    <div className="absolute bottom-0 left-0 right-0 text-center">
      <p className="text-blue-500 pb-7 h-full text-6xl">me</p>
    </div>  
  </div>


  <div className="flex-1 md:w-1/2 mt-4 md:mt-0 md:ml-8 text-justify ">
    <h2 className="text-2xl font-extrabold mb-4 text-blue-500">Hello there, I'm Yaw.</h2>
    <p className="mb-4 font-light text-lg ">
      I'm a photographer with over 10 years of experience in capturing life's precious moments. I specialize in creating images that are both visually striking and emotionally impactful, and I have developed a signature style that blends natural beauty with vibrant colors and bold compositions.
    </p>
    <p className="mb-4 font-light text-lg">
      When I'm not behind the camera, you can find me exploring the city's diverse neighborhoods, trying out new restaurants, or spending time with my family and friends. I believe that every moment is an opportunity to experience something new and to create memories that will last a lifetime.
    </p>
    <p className="mb-4 font-light text-lg">
      Thank you for taking the time to learn a little bit about me and my work. If you're interested in collaborating or would like to see more of my gallery, please don't hesitate to get in touch. Let's work together to bring your vision to life!
    </p>
  </div>
</div>
     <Testimonials />
    
    </>
  );
};
