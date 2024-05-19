import { useState } from "react";
import { Dot, ArrowRight } from "lucide-react";
import WorkCard from "../components/WorkCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const workCardsData = [
  {
    id: "id1",
    title: "DevOverFlow",
    tagLine: "WEB•WEB-APP•DEVELOPMENT",
    img: "https://images.pexels.com/photos/355580/pexels-photo-355580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "id2",
    title: "Spotify Clone",
    tagLine: "WEB•SAAS•DEVELOPMENT",
    img: "https://images.pexels.com/photos/22757512/pexels-photo-22757512/free-photo-of-trevi-fountain-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: "id3",
    title: "HiLink",
    tagLine: "WEB•DESIGN•DEVELOPMENT",
    img: "https://images.pexels.com/photos/23962930/pexels-photo-23962930/free-photo-of-zurich.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "id4",
    title: "EcomAdv",
    tagLine: "WEB•DESIGN•DEVELOPMENT",
    img: "https://images.pexels.com/photos/21336291/pexels-photo-21336291/free-photo-of-woman-in-a-rocky-cave.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: "id5",
    title: "Promptopia",
    tagLine: "WEB•DESIGN•DEVELOPMENT",
    img: "https://images.pexels.com/photos/23962764/pexels-photo-23962764/free-photo-of-a-black-and-white-photo-of-a-ferry-boat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: "id6",
    title: "Apple Clone",
    tagLine: "WEB•DESIGN•DEVELOPMENT",
    img: "https://images.pexels.com/photos/21795464/pexels-photo-21795464/free-photo-of-a-close-up-of-pink-flowers-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Works = () => {
  const [isTalkHovered, setIsTalkHovered] = useState(false);
  useGSAP(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      gsap.fromTo(
        ".workdec",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.4,

          scrollTrigger: {
            trigger: ".workdec",
            start: "bottom bottom",
            end: "top 10%",
          },
        }
      );
      gsap.fromTo(
        ".worktitle",
        {
          opacity: 0,
          y: 40,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,

          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".worktitle",
            start: "bottom bottom",
            end: "top 10%",
          },
        }
      );
    }
    gsap.fromTo(
      "#id1",
      {
        scale: 0.9,
        x: -10,
        y: 10,
        rotate: -2,
      },
      {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,

        delay: 0,
        scrollTrigger: {
          trigger: "#id1",
          // toggleActions: "play play reverse pause",
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#id2",
      {
        scale: 0.9,
        rotate: 2,
        x: 10,
        y: 10,
      },
      {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,

        delay: 0,
        scrollTrigger: {
          trigger: "#id2",
          toggleActions: "play play reverse pause",
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#id3",
      {
        scale: 0.9,
        x: -10,
      },
      {
        scale: 1,

        x: 0,

        delay: 0,
        scrollTrigger: {
          trigger: "#id3",
          // toggleActions: "play play reverse pause",
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#id4",
      {
        scale: 0.9,

        x: 10,
      },
      {
        scale: 1,

        x: 0,

        delay: 0,
        scrollTrigger: {
          trigger: "#id4",
          toggleActions: "play play reverse pause",
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#id5",
      {
        scale: 0.9,
        x: -10,
        y: 10,
        rotate: 2,
      },
      {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,

        delay: 0,
        scrollTrigger: {
          trigger: "#id5",
          // toggleActions: "play play reverse pause",
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#id6",
      {
        scale: 0.9,
        rotate: -2,
        x: 10,
        y: 10,
      },
      {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,

        delay: 0,
        scrollTrigger: {
          trigger: "#id6",
          toggleActions: "play play reverse pause",
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="mt-[25vh] max-sm:mt-[10vh]">
      <div className=" font-normal flex items-center max-lg:flex-col mb-[10vh] max-lg:items-start max-sm:mb-[4vh]">
        <span className="worktitle text-9xl max-lg:hidden w-[4vw]">F</span>
        <span className="worktitle text-9xl max-lg:hidden w-[4.8vw]">e</span>
        <span className="worktitle text-9xl max-lg:hidden w-[5vw]">a</span>
        <span className="worktitle text-9xl max-lg:hidden w-[3vw]">t</span>
        <span className="worktitle text-9xl max-lg:hidden w-[4.5vw]">u</span>
        <span className="worktitle text-9xl max-lg:hidden w-[2.6vw]">r</span>
        <span className="worktitle text-9xl max-lg:hidden w-[4.8vw]">e</span>
        <span className="worktitle text-9xl max-lg:hidden w-[4vw]">d</span>
        <span className="worktitle text-9xl max-lg:hidden w-[3vw]"></span>
        <span className="worktitle text-9xl max-lg:hidden w-[7.5vw]">W</span>
        <span className="worktitle text-9xl max-lg:hidden w-[4.6vw]">o</span>
        <span className="worktitle text-9xl max-lg:hidden w-[2.6vw]">r</span>
        <span className="worktitle text-9xl max-lg:hidden w-[4vw]">k</span>

        <span className="lg:hidden text-[110px] max-sm:text-[17vw] tracking-tight leading-[0.9]">
          Featured Work
        </span>

        <p className="w-[16vw] max-lg:w-full text-sm workdec ml-auto max-lg:ml-0  max-lg:text-2xl max-sm:text-lg max-lg:mt-[4vh]">
          We knew to be done is good, but sharing our experiences and it “works”
          is way better.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        {workCardsData.map((card) => (
          <WorkCard
            key={card.id}
            id={card.id}
            title={card.title}
            tagLine={card.tagLine}
            img={card.img}
          />
        ))}
      </div>
      <a
        href="#"
        className="flex w-full items-center justify-center mt-[8vh] max-sm:mt-0"
      >
        <div
          className="w-[180px] h-12 bg-zinc-800 rounded-3xl flex items-center justify-start  text-white transition-all text-sm   my-[6vh] shadow-md shadow-zinc-400 overflow-hidden"
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
            SEE ALL PROJECTS
          </span>
          {isTalkHovered && (
            <ArrowRight
              className={isTalkHovered ? "ml-1 animate-slide-left" : ""}
            />
          )}
        </div>
      </a>
    </div>
  );
};

export default Works;
