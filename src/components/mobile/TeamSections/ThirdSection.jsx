import React from "react";

// Assets Third section
import history from "../../../assets/mobileAssets/history.svg";
import jackie from "../../../assets/mobileAssets/jackie.svg";
import vertical from "../../../assets/mobileAssets/vertical.svg";
import orangeDiamond from "../../../assets/mobileAssets/orangeDiamond.svg";

export default function ThirdSection() {
  return (
    <>
      {/* Third section of svgs */}
      <div className="mt-[90%] mb-12 flex flex-col gap-y-6 justify-center">
        <h2 className="text-xl font-bold text-center">Wiki</h2>
        <p className="w-[341px] font-normal text-base text-center m-auto">
          Create and share knowledge with your team. Whether it be company
          processes, presentations, content your team has created, anything!
          Find anything directly from Slack too.
        </p>
      </div>
      <div>
        <img
          className="absolute left-[7%] top-[3182px]"
          src={vertical}
          alt=""
        />
        <img className="absolute left-[2%] top-[3039px]" src={history} alt="" />
        <img className="absolute left-[15%] top-[3044px]" src={jackie} alt="" />
        <img
          className="absolute left-[84%] top-[3337px]"
          src={orangeDiamond}
          alt=""
        />
      </div>
    </>
  );
}
