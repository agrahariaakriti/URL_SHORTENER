import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
