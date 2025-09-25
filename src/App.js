import About from "./Sections/About";
import Benefits from "./Sections/Benefits";
import FAQ from "./Sections/FAQ";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Testimonials from "./Sections/Testimonials";
import Preheader from "./Sections/Preheader";
import Services from "./Sections/Services";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <>
      <Preheader />
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
