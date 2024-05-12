import Hero3D from "../components/Hero3D";
import { Plus, Headset, Dot, ArrowRight, Ellipsis } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isTalkHovered, setIsTalkHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  return (
    <div className=" h-screen">
      <div className=" h-[20vh] w-full  pt-12 max-sm:pt-7 ">
        <div className="w-full  justify-between items-start max-lg:items-center inline-flex  ">
          <img className="w-32 h-11 max-sm:w-24 max-sm:h-7" src="/logo.svg" />

          <span className="max-w-[500px] text-[2em] max-lg:text-[1.5em] text-slate-800 inline-block max-lg:hidden">
            We help brands create digital
            <br /> experiences that connect with
            <br /> their customers
          </span>

          <div className="justify-start items-start  gap-4 flex">
            <a href="tel:0094765563418">
              <div className="w-11 h-11 bg-zinc-300 rounded-full flex items-center justify-center hover:bg-main-500 hover:text-white max-lg:hidden transition-all ">
                <Headset />
              </div>
            </a>
            <a href="mailto:hello@claviq.com">
              <div
                className="w-32 h-11 bg-zinc-800 rounded-3xl flex items-center justify-center hover:bg-main-500 text-white transition-all text-sm max-sm:hidden"
                onMouseEnter={() => setIsTalkHovered(true)}
                onMouseLeave={() => setIsTalkHovered(false)}
              >
                {isTalkHovered && (
                  <ArrowRight
                    className={isTalkHovered ? "mr-1 animate-slide-right" : ""}
                  />
                )}
                <span className={isTalkHovered ? " animate-slide-right" : ""}>
                  LET'S TALK
                </span>
                <Dot className={isTalkHovered ? "hidden" : ""} />
              </div>
            </a>
            <div
              className="w-24 h-11 bg-zinc-300 rounded-3xl flex items-center justify-center hover:bg-white text-slate-800 transition-all text-sm max-sm:w-10 max-sm:h-10"
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
            >
              <span className="max-sm:hidden">MENU</span>
              <Ellipsis
                className={
                  isMenuHovered
                    ? "animate-rotate ml-1 max-sm:ml-0"
                    : "ml-1 max-sm:ml-0 animate-rotate-back"
                }
              />
            </div>
          </div>
        </div>
        <div className="hidden max-w-[800px] text-[1.5em]  text-slate-800 max-lg:block mt-4">
          We help brands create digital experiences that connect with their
          customers
        </div>
      </div>
      <div className="h-[75vh] max-lg:mt-2 max-sm:mt-0 ">
        <Hero3D style={{ borderRadius: 20 }} />
      </div>
      <div className="h-[5vh] flex justify-between items-center">
        <Plus />
        <Plus className="max-sm:hidden" />
        <p className="font-semibold">SCROLL TO EXPLORE</p>
        <Plus className="max-sm:hidden" />
        <Plus />
      </div>
    </div>
  );
};

export default Hero;
