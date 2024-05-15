import About from "./sections/About";
import Hero from "./sections/Hero";
import Works from "./sections/Works";

const App = () => {
  return (
    <main className="w-full px-[72px] max-lg:px-6 max-xl:px-10  overflow-hidden">
      <Hero />
      <About />
      <Works />
    </main>
  );
};

export default App;
