import React from "react";

// Assets Fourth Section
import juneHfc from "../../../assets/mobileAssets/juneHfc.svg";
import greenArrow from "../../../assets/mobileAssets/greenArrow.svg";
import r29 from "../../../assets/mobileAssets/r29.svg";
import star from "../../../assets/mobileAssets/star.svg";

export default function FourthSection() {
  return (
    <>
      {/* Fourth section of svgs */}
      <div className="text-quinary">
        <div className="mt-[100%] mb-12 flex flex-col gap-y-6 justify-center">
          <h2 className="text-xl font-bold text-center">Team Directory</h2>
          <p className="w-[341px] font-normal text-base text-center m-auto">
            Your entire team in one place, with profile information, history,
            notes and more. You no longer need a clunky separate HR app.
          </p>
        </div>
      </div>
      <div>
        <img className="absolute left-[2%] top-[3596px]" src={juneHfc} alt="" />
        <img
          className="absolute left-[77%] top-[3710px]"
          src={greenArrow}
          alt=""
        />
        <img className="absolute left-[1%] top-[3690px]" src={r29} alt="" />
        <img className="absolute left-[1%] top-[3710px]" src={star} alt="" />
      </div>
    </>
  );
}
