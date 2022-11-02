import React from "react";
const HomeCard = ({ icon, title, desc, bgColor, route }) => {
  function dumpOptionsInfo() {
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];
    console.log(videoTrack);

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
  }

  const videoElem = document.getElementById("video");
  let displayMediaOptions = {
    video: {
      cursor: "always",
      height: 1000,
      width: 1200,
    },
    audio: false,
  };

  async function startCapture() {
    try {
      videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      dumpOptionsInfo();
    } catch (err) {
      console.error("Error: " + err);
    }
  }

  return (
    <div
      onClick={startCapture}
      className={` p-3 md:p-6 rounded md:rounded-2xl md:h-52 md:w-auto w-full md:aspect-square group ${bgColor} card`}
    >
      <div className="hidden">
        <video id="video" autoPlay muted></video>
      </div>

      <div className="flex md:h-full items-center md:flex-col md:items-start md:justify-between gap-2 cursor-pointer">
        <div
          className={`text-white text-2xl aspect-square md:h-12 flex items-center justify-center md:text-3xl 
          md:bg-slate-400/40 group-hover:text- group-hover:scale-110 duration-200 md:p-2 md:border-[1px]
           md:border-slate-300/40  rounded-lg `}
        >
          {icon}
        </div>
        <div className="flex-shrink-0 md:mb-5">
          <p className="text-white md:mb-1 text-sm md:text-2xl md:font-bold">{title}</p>
          <p className="text-slate-200 text-sm font-thin hidden md:block">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
