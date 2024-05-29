import { useRef, useEffect } from "react";
import Footer from "./Footer";

const IPadInside = () => {
  const vidRef = useRef(null);
  useEffect(() => {
    const section = vidRef.current;
    const vid = section.querySelector("video");

    if (vid) {
      vid.pause();

      const scroll = () => {
        const distance = window.scrollY - section.offsetTop;
        const total = section.clientHeight - window.innerHeight;

        let percentage = distance / total;
        percentage = Math.max(0, percentage);
        percentage = Math.min(percentage, 1);

        if (vid.duration > 0) {
          vid.currentTime = vid.duration * percentage;
        }
      };

      scroll(); // Initial call to set the video state based on the current scroll position
      window.addEventListener("scroll", scroll);

      return () => {
        window.removeEventListener("scroll", scroll);
      };
    }
  }, []);
  return (
    <section
      className="h-[300vh] absolute top-[545vh] max-sm:top-[570vh] hidden opacity-0 left-0 z-10"
      ref={vidRef}
      id="theHiddenOne"
    >
      {/* -m-[72px] max-lg:-m-6 max-xl:-m-10 */}
      <div className="sticky top-0 left-0 w-[100vw] h-[100vh] " id="vidiPad">
        <video
          src="https://assets.mixkit.co/videos/2408/2408-720.mp4"
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        ></video>
      </div>
      <Footer />{" "}
    </section>
  );
};

export default IPadInside;
