import React from "react";

// Assets Second section
import home from "../../../assets/mobileAssets/home.svg";
import topicBubble from "../../../assets/mobileAssets/topicBubble.svg";
import search from "../../../assets/mobileAssets/search.svg";
import purpleDiamond from "../../../assets/mobileAssets/purpleDiamond.svg";
import r32 from "../../../assets/mobileAssets/r32.svg";
import r33 from "../../../assets/mobileAssets/r33.svg";
import r34 from "../../../assets/mobileAssets/r34.svg";
import command from "../../../assets/mobileAssets/command.svg";
import e12 from "../../../assets/mobileAssets/e12.svg";
import edit from "../../../assets/mobileAssets/edit.svg";

export default function SecondSection() {
  return (
    <>
      {/* Second section of svgs */}
      <div className="mt-[90%] mb-12 flex flex-col gap-y-6 justify-center">
        <h2 className="text-xl font-bold text-center">Announcements</h2>
        <p className="w-[341px] font-normal text-base text-center m-auto">
          Your entire team in one place, with Engage your team with company wide
          announcements that entice engagement. The team homepage reveals
          everything going on with your team.
        </p>
      </div>
      <div>
        <img className="absolute left-[63%] top-[2524px]" src={e12} alt="" />
        <img className="absolute left-[2%] top-[2514px]" src={home} alt="" />
        <img
          className="absolute left-[5%] top-[2608px]"
          src={topicBubble}
          alt=""
        />
        <img className="absolute left-[1%] top-[2623px]" src={r32} alt="" />
        <img
          className="absolute left-[11%] top-[2630px]"
          src={command}
          alt=""
        />
        <img className="absolute left-[1%] top-[2657px]" src={r33} alt="" />
        <img className="absolute left-[11%] top-[2663px]" src={search} alt="" />
        <img className="absolute left-[1%] top-[2690px]" src={r34} alt="" />
        <img className="absolute left-[11%] top-[2695px]" src={edit} alt="" />
        <img
          className="absolute left-[75%] top-[2804px]"
          src={purpleDiamond}
          alt=""
        />
      </div>
    </>
  );
}
