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
      className="h-[300vh] absolute top-[550vh] max-sm:top-[570vh] hidden opacity-0 left-0 z-10"
      ref={vidRef}
      id="theHiddenOne"
    >
      {/* -m-[72px] max-lg:-m-6 max-xl:-m-10 */}
      <div className="sticky top-0 left-0 w-[100vw] h-[100vh] " id="vidiPad">
        <video
          src="/ipadvideo.mp4"
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        ></video>
      </div>
      <Footer />
    </section>
  );
};

export default IPadInside;

// import React, { useEffect, useRef } from "react";
// import Footer from "./Footer";

// const VideoPage = () => {
//   const videoRef = useRef(null);
//   const setHeightRef = useRef(null);
//   const playbackConst = 500;

//   useEffect(() => {
//     const vid = videoRef.current;
//     const setHeight = setHeightRef.current;

//     const handleLoadedMetadata = () => {
//       setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//     };

//     const scrollPlay = () => {
//       const frameNumber = window.pageYOffset / playbackConst;
//       vid.currentTime = frameNumber;
//       window.requestAnimationFrame(scrollPlay);
//     };

//     vid.addEventListener("loadedmetadata", handleLoadedMetadata);
//     window.requestAnimationFrame(scrollPlay);

//     return () => {
//       vid.removeEventListener("loadedmetadata", handleLoadedMetadata);
//     };
//   }, []);

//   return (
//     <section
//       className=" top-[550vh] max-sm:top-[570vh] hidden opacity-0 left-0 z-10"
//       id="theHiddenOne"
//     >
//       <div id="set-height" ref={setHeightRef}>
//         <video id="v0" tabIndex="0" preload="auto" loop ref={videoRef}>
//           {/* <source
//             type='video/webm; codecs="vp8, vorbis"'
//             src="/ipadvideo.webm"
//           /> */}
//           <source
//             type='video/ogg; codecs="theora, vorbis"'
//             src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.ogv"
//           />
//           <source
//             type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
//             src="https://videos.pexels.com/video-files/2759477/2759477-hd_1280_720_60fps.mp4"
//           />
//           Sorry, your browser does not support the &lt;video&gt; element.
//         </video>
//       </div>
//       <Footer />
//     </section>
//   );
// };

// export default VideoPage;
