import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Ideas = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const svg = divRef.current.querySelector("svg.squiggleSeconed");
    const path = svg.querySelector("path");

    gsap.set(path, {
      strokeDasharray: path.getTotalLength(),
      strokeDashoffset: path.getTotalLength(),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 2 }); // Animate dash offset to 0 (fully visible) over 2 seconds

    return () => {
      tl.kill();
    };
  }, []);
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
        duration: 0.8,

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
    <div className="mt-[20vh] max-sm:mt-[10vh]" ref={divRef}>
      <span className="text-[110px] max-sm:text-[15vw] tracking-tight leading-[0.9] max-sm:leading-[0.98]">
        <span className="ideatitle ml-44">Connecting Ideals to </span>
        <span className="ideatitle ml-44">Uniquely Crafted </span>
        <span className="ideatitle ml-44">Experineces</span>
      </span>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid h-[90vh]"></div>
        <div className="grid  h-[90vh]"></div>
      </div>

      <svg
        width="1159"
        height="1019"
        viewBox="0 0 1159 1019"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggleSeconed max-sm:hidden"
      >
        <path
          d="M1165 111.5C1165 111.5 1043.54 112.145 970.5 101.5C898.784 91.0479 863.014 72.518 792.5 56.5C710.546 37.8832 663.922 26.9843 580 22.5C487.198 17.5411 411.5 22.5 342.5 37.5C273.5 52.5 209.5 76.5 161.5 111.5C113.5 146.5 64.0331 195.233 38.7283 269C13.5119 342.51 15.9565 412.5 38.7283 468C61.5 523.5 123.39 589.909 203.5 633.5C300.572 686.321 401.01 692.2 483.5 674.5C565.99 656.8 617.333 638.368 665 572.5C718.718 498.272 696.5 430.685 696.5 340C696.5 275 684.476 231.301 725 182.5C750.78 151.455 787.5 134.474 814 130C840.5 125.526 902.5 130.5 933.5 164C964.5 197.5 970.5 233 970.5 286.5C970.5 340 915 434 915 434C915 434 854.5 536 792.5 624C730.5 712 722 716 703.5 765C685 814 687.772 877.004 725 930.5C773.886 1000.75 918 999 933.5 998C949 997 1087.18 995.196 1173.5 955"
          stroke="url(#paint0_linear_50_6)"
          stroke-width="40"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_50_6"
            x1="812"
            y1="1046"
            x2="1135"
            y2="86.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.108053" stop-color="#FFCDBC" />
            <stop offset="0.486232" stop-color="#FFA485" />
            <stop offset="0.869736" stop-color="#FF885F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Ideas;
