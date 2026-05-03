import { useEffect } from "react";
import useCursor from "./hooks/useCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useCursor();

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor" />
      <div className="cursor-ring" />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
