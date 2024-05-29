import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {}, []);

  return (
    <section className="mt-[200vh] flex items-center w-full h-[100vh] justify-center bg-black">
      <h3 className="">
        <span className="relative text-[12vw] font-normal text-center text-white  underline-animation">
          Let's Work
        </span>
        <br />
        <span className="relative text-[12vw] font-normal text-center text-white  underline-animation">
          Together
        </span>
      </h3>
    </section>
  );
};

export default Footer;
