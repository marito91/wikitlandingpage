import React from "react";

// Assets First section
import announcements from "../../../assets/mobileAssets/announcements.svg";
import chat from "../../../assets/mobileAssets/chat.svg";
import mask from "../../../assets/mobileAssets/mask.svg";
import greenDiamond from "../../../assets/mobileAssets/greenDiamond.svg";

export default function FirstSection() {
  return (
    <>
      {/* First section of svgs */}
      <div>
        <img className="absolute left-[227px] top-[2180px]" src={mask} alt="" />
        <img
          className="absolute left-[12px] top-[2031px]"
          src={announcements}
          alt=""
        />
        <img className="absolute left-[11px] top-[2029px]" src={chat} alt="" />
        <img
          className="absolute left-[54px] top-[2324px]"
          src={greenDiamond}
          alt=""
        />
      </div>
    </>
  );
}
