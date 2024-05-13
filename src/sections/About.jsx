import { useState } from "react";
import { Dot, ArrowRight } from "lucide-react";

const About = () => {
  const [isTalkHovered, setIsTalkHovered] = useState(false);
  return (
    <div className="mt-[25vh] ">
      <div className="text-left  items-start">
        <div className="text-9xl max-sm:text-3xl font-normal">
          Unlocking Digital
        </div>
        <div className="text-9xl max-sm:text-3xl font-normal">
          Excellence Together
        </div>
      </div>
      <div className="flex mt-[10vh]">
        <div className=" flex w-[50vw]  mt-[25vh] mb-[5vh]">
          <div className="w-[580px] h-80 bg-zinc-300 rounded-2xl" />
        </div>
        <div className=" flex w-[50vw] flex-col">
          <p className="text-2xl">
            We are a team of professionals who are passionate about helping
            businesses grow and succeed. We provide a range of services to help
            businesses reach their full potential. businesses grow and succeed.
            We provide a range of services to help businesses reach their full
            potential.
          </p>
          <a href="mailto:hello@claviq.com">
            <div
              className="w-[130px] h-12 bg-zinc-800 rounded-3xl flex items-center justify-start  text-white transition-all text-sm max-sm:hidden  my-[6vh] shadow-md shadow-zinc-400 overflow-hidden"
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
    </div>
  );
};

export default About;
