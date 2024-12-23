import React from "react";
import { NewHeader } from "../NewHeader";
import "../pages/Contact.css"

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "003e509d-6008-4b71-90c8-29f06d15b63a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
   <NewHeader
    backgroundImage={("./src/images/contact.webp")}
    header='Contact'
    text='Feel free to contact me anytime to get beautiful pictures and also picture frames.'
    />
    
    <div className="max-w-screen-lg w-full rounded-lg p-6 my-4 m-auto flex flex-col md:flex-row">
  
  <div className="w-full md:w-1/2  flex flex-col justify-center">
    <h2 className="text-3xl md:text-5xl font-bold text-center py-1">Get in Touch</h2>
    <img
      src="src/images/collaborate.gif"
      alt="contact image"
      className="m-auto w-full max-w-xs md:max-w-sm"
    />
    <p className="text-sm md:text-lg text-center py-1">
      Feel free to text or call me for all your events. Let me help you capture beautiful memories with stunning pictures.
    </p>
  </div>

 
  <form
    onSubmit={onSubmit}
    action=""
    method="POST"
    className="w-full md:w-2/4"
  >
 
    <div class="mb-4">
      <label for="name"></label>
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
      <label for="number"></label>
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
      <label for="email"></label>
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
      <label for="message"></label>
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


    </>
  )
};
