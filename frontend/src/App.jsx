
import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const openAdmin = () => setShowAdmin(true);
    const openHome = () => setShowAdmin(false);

    window.addEventListener("open-admin", openAdmin);
    window.addEventListener("open-home", openHome);

    return () => {
      window.removeEventListener("open-admin", openAdmin);
      window.removeEventListener("open-home", openHome);
    };
  }, []);

  if (showAdmin) {
    return <Admin onBack={() => setShowAdmin(false)} />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
