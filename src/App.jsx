import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import './index.css';

// Import pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Editor from "./pages/Editor";
import Posts from "./pages/Posts";


function App() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
