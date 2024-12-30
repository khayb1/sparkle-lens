/** @format */

import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {
  Home,
  About,
  Contact,
  Services,
  Gallery,
} from "./components/pages/index";
import NotFound from "./components/pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
