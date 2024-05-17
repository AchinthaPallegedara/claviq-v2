import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Ideas = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".ideatitle",
      {
        opacity: 0,
      },
      {
        x: 0,
        marginLeft: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,

        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".ideatitle",
          start: "bottom bottom",
          end: "top 10%",
          oggleActions: "play play reverse play",
        },
      }
    );
  }, []);
  return (
    <div className="mt-[25vh] max-sm:mt-[10vh]">
      <span className="text-[110px] max-sm:text-[15vw] tracking-tight leading-[0.9] max-sm:leading-[0.98]">
        <span className="ideatitle ml-44">Connecting Ideals to </span>
        <span className="ideatitle ml-44">Uniquely Crafted </span>
        <span className="ideatitle ml-44">Experineces</span>
      </span>
    </div>
  );
};

export default Ideas;
