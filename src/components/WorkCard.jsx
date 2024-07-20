import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WorkCard = ({ id, tagLine, title, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id}
      className="grid  flex-col w-full h-[65vh] max-sm:h-[35vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#">
        <div className="h-[53vh]  bg-gray-500 rounded-[20px] max-sm:h-[28vh] cardImage">
          <img
            src={img}
            loading="lazy"
            className={`rounded-[20px] w-full h-full object-cover ${
              isHovered ? "zoom-in" : ""
            }`}
          />
        </div>
        <div className="mt-[1vh]">
          <p className="text-sm font-normal">{tagLine}</p>
          <div className="text-5xl font-normal flex  items-center">
            <ArrowRight
              className={
                isHovered
                  ? "mr-1 animate-slide-right size-10 transition-all"
                  : "animate-slide-left size-8 hidden max-sm:block"
              }
            />

            <span
              className={`text-4xl max-sm:text-[8vw] font-normal 
                ${
                  isHovered
                    ? " animate-slide-right transition-all"
                    : "animate-slide-left"
                }
                  `}
            >
              {title}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkCard;
