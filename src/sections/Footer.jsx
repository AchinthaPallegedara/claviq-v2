import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {}, []);

  return (
    <section className="mt-[200vh] flex items-center w-full h-[100vh] justify-center">
      <h3 className="text-[12vw] font-bold text-center">
        Let's Work
        <br />
        Together
      </h3>
    </section>
  );
};

export default Footer;
