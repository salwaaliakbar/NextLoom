import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TechStrip from "@/components/sections/TechStrip";
import Services from "@/components/sections/Services";
import Automation from "@/components/sections/Automation";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <TechStrip />
        <Services />
        <Automation />
        <Process />
        <Testimonials />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
