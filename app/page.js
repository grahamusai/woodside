import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import News from "./components/news";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <News />
    <Contact />
    <Footer />
  </div>
  );
}
