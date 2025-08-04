import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import BlogPage from "./components/BlogPage";
import Contact from "./components/Contact";
import Superbikes from "./components/Superbikes";

import Indiatrips from "./components/Indiatrips";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/superbikes" element={<Superbikes />} /> {/* ⬅️ Added Route */}
          <Route path="/indiatrips" element={<Indiatrips />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
