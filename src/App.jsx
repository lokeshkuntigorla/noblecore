 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Employers from "./pages/Employers";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <WhatsAppButton />
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Page Container ===== */}
      <div className="page-container" style={{ paddingTop: "var(--navbar-height, 120px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* ===== Footer ===== */}
      <Footer />
    </Router>
  );
}

export default App;