import { useEffect, useState, useRef } from "react";
import { Dot, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const divRef = useRef(null);
  useGSAP(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      gsap.fromTo(
        ".title",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: ".title",
            start: "bottom bottom",
            end: "top 10%",
          },
        }
      );
      gsap.fromTo(
        ".titleTwo",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: ".titleTwo",
            start: "bottom bottom",
            end: "top 10%",
          },
        }
      );

      gsap.to(".title", {
        x: 200,

        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".title",
          start: "bottom bottom",
          end: "top 10%",
        },
      });
    }
    gsap.to(".condiv", {
      y: 0,
      duration: 10,
      scrollTrigger: {
        trigger: ".titleTwo",
        start: "bottom bottom",
        end: "top 10%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
  }, []);
  const [isTalkHovered, setIsTalkHovered] = useState(false);
  // desktop
  useEffect(() => {
    const svg = divRef.current.querySelector("svg.squiggle");
    const path = svg.querySelector("path");

    gsap.set(path, {
      strokeDasharray: path.getTotalLength(),
      strokeDashoffset: path.getTotalLength(),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 2 }); // Animate dash offset to 0 (fully visible) over 2 seconds

    return () => {
      tl.kill();
    };
  }, []);
  //mobile
  useEffect(() => {
    const svg = divRef.current.querySelector("svg.squigglemobile");
    const path = svg.querySelector("path");

    gsap.set(path, {
      strokeDasharray: path.getTotalLength(),
      strokeDashoffset: path.getTotalLength(),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 2 }); // Animate dash offset to 0 (fully visible) over 2 seconds

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="mt-[25vh] max-sm:mt-[10vh] px-[72px] max-lg:px-6 max-xl:px-10 overflow-hidden"
      ref={divRef}
    >
      <div className="text-left  items-start">
        <div className="text-9xl max-sm:text-[17vw] font-normal title lg:opacity-50 tracking-tight leading-[0.9] max-lg:text-[110px]">
          Unlocking Digital
        </div>
        <div className="text-9xl max-sm:text-[17vw] font-normal titleTwo tracking-tight leading-[0.9] max-lg:text-[110px]">
          Excellence Together
        </div>
      </div>
      <div className="flex mt-[10vh] max-sm:flex-col-reverse  ">
        <div className=" flex w-[45vw]  mt-[25vh] mb-[5vh] max-sm:mt-[4vh] sm:mr-[5vw] max-sm:w-full">
          <div className="relative w-[580px] h-80 rounded-2xl overflow-hidden">
            {/* Overlay div with light orange shade */}
            <div className="absolute inset-0 bg-main-100 opacity-50 z-10"></div>

            {/* Video element */}
            <video
              className="pointer-events-none absolute inset-0 w-full h-full object-cover rounded-[20px]"
              autoPlay
              loop
              muted
              playsInline={true}
              key={"https://assets.mixkit.co/videos/13231/13231-720.mp4"}
            >
              <source
                src={"https://assets.mixkit.co/videos/13231/13231-720.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className=" flex w-[50vw] flex-col condiv translate-y-10 max-sm:w-full">
          <p className="text-2xl max-sm:text-lg">
            We are a team of professionals who are passionate about helping
            businesses grow and succeed. We provide a range of services to help
            businesses reach their full potential. businesses grow and succeed.
            We provide a range of services to help businesses reach their full
            potential.
          </p>
          <a href="#">
            <div
              className="w-[130px] h-12 bg-zinc-800 rounded-3xl flex items-center justify-start  text-white transition-all text-sm   my-[6vh] shadow-md shadow-zinc-400 overflow-hidden"
              onMouseEnter={() => setIsTalkHovered(true)}
              onMouseLeave={() => setIsTalkHovered(false)}
            >
              <Dot
                className={
                  isTalkHovered
                    ? "animate-zoom-in-and-colour-change "
                    : "size-10 animate-zoom-our-and-colour-change"
                }
              />

              <span className={isTalkHovered ? " animate-slide-left" : ""}>
                ABOUT ME
              </span>
              {isTalkHovered && (
                <ArrowRight
                  className={isTalkHovered ? "ml-1 animate-slide-left" : ""}
                />
              )}
            </div>
          </a>
        </div>
      </div>

      <svg
        width="1440"
        height="1062"
        viewBox="0 0 1440 1062"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggle max-sm:hidden"
      >
        <path
          d="M-72.5756 19.4503C-72.5756 19.4503 79.9246 57.4503 169.924 107.95C259.924 158.45 344.425 249.95 379.924 313.45C415.424 376.95 427.925 448.451 437.425 524.451C446.924 600.45 442.424 734.45 415.924 794.45C389.424 854.45 340.425 927.95 198.925 922.45C57.4241 916.95 37.9244 809.95 41.4242 759.45C44.9239 708.951 54.9239 644.45 190.924 575.45C326.925 506.451 478.924 524.451 556.924 535.45C634.924 546.45 683.424 556.139 762.424 585.95C841.424 615.762 873.425 641.978 924.925 689.95C976.425 737.923 1007.92 834.451 1072.92 841.951C1137.92 849.451 1177.92 805.45 1247.42 797.951C1316.92 790.451 1355.92 830.45 1372.92 849.451C1389.92 868.451 1544.5 1076 1544.5 1076"
          stroke="url(#paint0_linear_31_37)"
          stroke-width="40"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_31_37"
            x1="-69.5"
            y1="11"
            x2="1516"
            y2="1027.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.22856" stop-color="#F3521C" />
            <stop offset="0.589465" stop-color="#FC906C" />
            <stop offset="0.973705" stop-color="#FFB79F" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="393"
        height="476"
        viewBox="0 0 393 476"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squigglemobile sm:hidden"
      >
        <path
          d="M-16.4676 20.109C-16.4676 20.109 47.5539 36.0619 85.3369 57.2624C123.12 78.4629 158.594 116.876 173.497 143.534C188.401 170.192 193.649 200.209 197.637 232.114C201.625 264.02 199.736 320.275 188.611 345.464C177.486 370.652 156.915 401.509 97.5115 399.2C38.1079 396.891 29.9216 351.971 31.3909 330.77C32.8601 309.57 37.0583 282.492 94.1529 253.525C151.248 224.558 215.059 232.114 247.804 236.732C280.55 241.35 300.911 245.418 334.076 257.933C367.241 270.448 380.675 281.454 402.295 301.593C423.916 321.733 437.14 362.256 464.428 365.405C491.716 368.553 508.508 350.082 537.685 346.933C566.862 343.785 583.235 360.577 590.371 368.553C597.508 376.53 662.401 463.662 662.401 463.662"
          stroke="url(#paint0_linear_47_2)"
          stroke-width="40"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_47_2"
            x1="-15.1765"
            y1="16.5614"
            x2="650.436"
            y2="443.301"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.22856" stop-color="#F3521C" />
            <stop offset="0.589465" stop-color="#FC906C" />
            <stop offset="0.973705" stop-color="#FFB79F" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default About;
