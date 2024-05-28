import About from "./sections/About";
import Hero from "./sections/Hero";
import Ideas from "./sections/Ideas";
import Works from "./sections/Works";
import IPadInside from "./sections/IPadInside";

const App = () => {
  return (
    <main className="w-full px-[72px] max-lg:px-6 max-xl:px-10  ">
      <Hero />
      <About />
      <Works />
      {/* <IPadInside /> */}
      <Ideas />
    </main>
  );
};

export default App;
