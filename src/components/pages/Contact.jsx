import React from "react";
import { NewHeader } from "../NewHeader";
import { ToastContainer, toast } from "react-toastify";
import "../pages/Contact.css"

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "003e509d-6008-4b71-90c8-29f06d15b63a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        event.target.reset();
      } else {
        toast.error(`Error: ${data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <NewHeader
        backgroundImage={"images/contact.webp"}
        header="Contact"
        text="Feel free to contact me anytime to get beautiful pictures and also picture frames."
      />

      <div className="max-w-screen-lg w-full rounded-lg p-6 my-4 m-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center py-1">Get in Touch</h2>
          <img
            src="images/collaborate.gif"
            alt="contact image"
            className="m-auto w-full max-w-xs md:max-w-sm"
          />
          <p className="text-sm md:text-lg text-center py-1">
            Feel free to text or call me for all your events. Let me help you capture beautiful memories with stunning pictures.
          </p>
        </div>

        <form onSubmit={onSubmit} className="w-full md:w-2/4">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="number"
              name="number"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your number"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </>
  );
};


