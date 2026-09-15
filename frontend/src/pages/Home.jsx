import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Career />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;