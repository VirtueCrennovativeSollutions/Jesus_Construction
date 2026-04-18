import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectGallery from "./pages/ProjectGallery";
import Contact from "./pages/Contact";

   // ✅ Add this import

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<ProjectGallery />} />
         <Route path="/contact" element={<Contact />} />
        {/* Now works */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
