import { useGSAP } from "@gsap/react";
import { Dot, ArrowRight } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";

const Footer = () => {
  const [isTalkHovered, setIsTalkHovered] = useState(false);

  return (
    <footer className=" flex flex-col mt-[200vh]  w-full px-[72px] max-lg:px-6 max-xl:px-10  ">
      {/* mt-[200vh] */}
      <div className="flex flex-row items-center justify-between mb-[12vh] max-sm:flex-col max-sm:items-start max-sm:w-full  ">
        <div className="text-9xl max-sm:text-[17vw] font-medium tracking-tighter leading-[0.9] max-lg:text-[110px] w-[70vw] max-sm:w-full max-sm:mt5 ">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-black via-main-500 to-main-300 max-sm:mt-[5vh]">
            Let's Make It Happen Together.
          </h3>
        </div>
        <div className="w-[20vw] text-xl flex flex-col space-y-3 text-right max-sm:w-full max-sm:space-y-4 max-sm:text-left">
          <p>
            We champion transformation through design, regardless of your
            project idea or goal.
          </p>
          <a href="mailto:hello@claviq.com" className="ml-auto max-sm:ml-0">
            <div
              className="w-32 h-11 bg-zinc-800 rounded-3xl flex items-center justify-center hover:bg-main-500 text-white transition-all text-sm butt"
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
                  isTalkHovered ? "animate-slide-right" : "animate-slide-left"
                }
              >
                LET'S TALK
              </span>
              <Dot className={isTalkHovered ? "hidden" : ""} />
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-row mt-[5vh]  justify-between mb-[5vh] max-sm:flex-col-reverse max-sm:space-y-4 max-sm:mb-3 max-sm:justify-center">
        <div className="w-[12vw] hover:text-right transition-all text-2xl max-sm:w-full max-sm:mt-2 max-sm:text-center ">
          370/1M,
          <br />
          Makola,
          <br />
          Kiribathgoda,
          <br />
          Sri Lanka.
        </div>
        <div className="flex flex-col space-y-5 max-sm:justify-center max-sm:items-center">
          <div className="text-2xl">
            <p>General enquires</p>
            <a
              href="mailto:hello@claviq.com"
              className="font-medium hover:text-main-500"
            >
              hello@claviq.com
            </a>
          </div>
        </div>
        <div className="text-2xl max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col">
          <p>Quickly Contact</p>
          <a
            href="tel:+94701604161"
            className="font-medium hover:text-main-500"
          >
            +94 70 160 4161
          </a>
        </div>
      </div>

      <div className="flex border-t border-black justify-between mb-[2vh] max-sm:flex-col max-sm:space-y-1 ">
        <div className="text-sm mb-4 mt-[4vh] max-sm:mt-1 max-sm:mb-0 max-sm:justify-center max-sm:flex ">
          © 2024 Claviq. All Rights Reserved.
        </div>
        <div className="flex justify-center space-x-4 text-sm text-gray-900 mt-[4vh] max-sm:mb-0 ">
          <a href="#" className="hover:underline hover:text-black">
            built by <span className="text-main-500">Claviq</span> with ❤️
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
