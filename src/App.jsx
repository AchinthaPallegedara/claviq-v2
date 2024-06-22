import About from "./sections/About";
import Hero from "./sections/Hero";
import Ideas from "./sections/Ideas";
import Works from "./sections/Works";
import IPadInside from "./sections/IPadInside";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="w-full scroll-smooth">
      <Hero />
      <About />
      <Works />
      <Ideas />
      {/* <IPadInside /> */}
      <Footer />
    </main>
  );
};

export default App;
