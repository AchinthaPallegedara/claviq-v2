import About from "./sections/About";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="w-full px-[72px] max-lg:px-6 max-xl:px-10">
      <Hero />
      <About />
    </main>
  );
};

export default App;
