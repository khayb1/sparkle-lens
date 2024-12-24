import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar  from "./components/Navbar";
import * as pages from "./components/pages/index";
import { NotFound } from "./components/pages/NotFound";
import  Footer  from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="/about" element={<pages.About />} />
        <Route path="/services" element={<pages.Services />} />
        <Route path="/gallery" element={<pages.Gallery />} />
        <Route path="/contact" element={<pages.Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
