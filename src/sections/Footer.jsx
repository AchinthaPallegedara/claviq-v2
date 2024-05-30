import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#footerSection",
      start: "top 50%",
      end: "bottom 80%",
      scrub: true,
    },
  });
  useGSAP(() => {
    t1.to("#footerSection", {
      backgroundColor: "#000",

      duration: 1,
      delay: 2,
    });
    t1.fromTo(
      "#footerTitle",
      {
        y: 100,
        duration: 1,
      },
      {
        y: -60,
        duration: 1,
      }
    );
    t1.to("#workText", {
      rotate: 10,

      duration: 1,
      delay: 2,
    });
  }, []);

  return (
    <section
      className="mt-[200vh] flex items-center w-full h-[100vh] justify-center text-white "
      id="footerSection"
    >
      <h3
        className="text-[12vw] font-normal text-center   underline-offset-3 transition-all duration-300 ease-in-out "
        id="footerTitle"
      >
        <span className="">
          Let's <span id="workText">Work</span>
        </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-main-300 via-main-500 to-main-100 ">
          Together
        </span>
      </h3>
    </section>
  );
};

export default Footer;
