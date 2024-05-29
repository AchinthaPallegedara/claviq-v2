import { useGSAP } from "@gsap/react";
import Hero3D from "../components/Hero3D";
import { Plus, Headset, Dot, ArrowRight, Ellipsis } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";

const Hero = () => {
  const [isTalkHovered, setIsTalkHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".butt",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        delay: 7.9,
        stagger: 0.05,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 7.8,
        stagger: 0.1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <section className=" h-screen px-[72px] max-lg:px-6 max-xl:px-10">
      <div className=" h-[23vh] w-full  pt-12 max-sm:pt-7 ">
        <div className="w-full  justify-between items-start max-lg:items-center inline-flex  ">
          <img className="w-32 h-11 max-sm:w-24 max-sm:h-7" src="/logo.svg" />

          <span
            className="max-w-[500px] text-[2em] max-lg:text-[1.5em] text-slate-800 inline-block max-lg:hidden"
            id="maintext"
          >
            <span className="para">We help brands create digital</span>
            <br />
            <span className="para">experiences that connect with</span>
            <br />
            <span className="para">their customers</span>
          </span>

          <div className="justify-start items-start  gap-4 flex">
            <a href="tel:0094765563418">
              <div className="w-11 h-11 bg-zinc-300 rounded-full flex items-center justify-center hover:bg-main-500 hover:text-white max-lg:hidden transition-all butt ">
                <Headset />
              </div>
            </a>
            <a href="mailto:hello@claviq.com">
              <div
                className="w-32 h-11 bg-zinc-800 rounded-3xl flex items-center justify-center hover:bg-main-500 text-white transition-all text-sm max-sm:hidden butt "
                onMouseEnter={() => setIsTalkHovered(true)}
                onMouseLeave={() => setIsTalkHovered(false)}
              >
                {isTalkHovered && (
                  <ArrowRight
                    className={
                      isTalkHovered
                        ? "mr-1 animate-slide-right"
                        : "animate-slide-left"
                    }
                  />
                )}
                <span
                  className={
                    isTalkHovered
                      ? " animate-slide-right"
                      : "animate-slide-left"
                  }
                >
                  LET'S TALK
                </span>
                <Dot className={isTalkHovered ? "hidden" : ""} />
              </div>
            </a>
            <div
              className="w-24 h-11 bg-zinc-300 rounded-3xl flex items-center justify-center hover:bg-white text-slate-800 transition-all text-sm max-sm:w-10 max-sm:h-10 butt "
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
      <div className="h-[70vh] max-lg:mt-2 max-sm:mt-0 ">
        <Hero3D style={{ borderRadius: 20 }} />
      </div>
      <div className="h-[7vh] flex justify-between items-center">
        <Plus />
        <Plus className="max-sm:hidden" />
        <p className="font-medium">SCROLL TO EXPLORE</p>
        <Plus className="max-sm:hidden" />
        <Plus />
      </div>
    </section>
  );
};

export default Hero;
