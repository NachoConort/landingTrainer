import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";
import About from "./components/About";
import FloatingWhatsApp from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <FloatingWhatsApp />
    </main>
  );
}
