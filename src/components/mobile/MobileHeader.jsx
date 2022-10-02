import React from "react";

// Assets
import hamburger from "../../assets/mobileAssets/hamburger.svg";
import weware from "../../assets/mobileAssets/weware.svg";
import purpleDiamond from "../../assets/mobileAssets/purpleDiamond.svg";
import orangeDiamond from "../../assets/mobileAssets/orangeDiamond.svg";
import blueDiamond from "../../assets/mobileAssets/blueDiamond.svg";
import group167 from "../../assets/mobileAssets/group167.svg";
import vector8 from "../../assets/mobileAssets/vector8.svg";
import elipse9 from "../../assets/mobileAssets/elipse9.svg";
import elipse10 from "../../assets/mobileAssets/elipse10.svg";
import yourRemote from "../../assets/mobileAssets/yourRemote.svg";
import teamTogether from "../../assets/mobileAssets/teamTogether.svg";
import announce from "../../assets/mobileAssets/announce.svg";
import arrowRight from "../../assets/mobileAssets/arrowRight.svg";
import add from "../../assets/mobileAssets/add.svg";
import activate from "../../assets/mobileAssets/activate.svg";
import update from "../../assets/mobileAssets/update.svg";

export default function mobileHeader() {
  return (
    <div className="w-[100%]">
      <nav className="p-5 flex justify-between">
        <img src={hamburger} alt="" />
        <img className="m-auto" src={weware} alt="" />
      </nav>
      <div className="">
        <img
          className="absolute top-[112px] left-[234px]"
          src={purpleDiamond}
          alt=""
        />
        <img
          className="absolute top-[163px] left-[68px]"
          src={group167}
          alt=""
        />
        <img
          className="absolute top-[225px] left-[80px]"
          src={elipse10}
          alt=""
        />
        <img
          className="absolute top-[213.5px] left-[14px]"
          src={vector8}
          alt=""
        />
        <img
          className="absolute top-[239px] left-[24px]"
          src={elipse9}
          alt=""
        />
        <img
          className="absolute top-[230px] left-[137px]"
          src={yourRemote}
          alt=""
        />
        <img
          className="absolute top-[264px] left-[351px]"
          src={orangeDiamond}
          alt=""
        />
        <img
          className="absolute top-[278px] left-[58px]"
          src={teamTogether}
          alt=""
        />
        <img
          className="absolute top-[312px] left-[26px]"
          src={blueDiamond}
          alt=""
        />
      </div>
      <div>
        <p className="m-auto w-[343px] h-[71px] mt-[80%] text-center text-quinary">
          <strong>Weware means:</strong> Easy to find knowledge, content and
          proceses. Announcements, team engagement, recognition and profiles. 🙌
        </p>
        <div className="flex flex-col gap-y-6 justify-center mt-[20%]">
          <input
            className="p-3 text border border-blue-900 rounded-lg w-80 m-auto"
            type="email"
            placeholder="Your email address"
          />
          <input
            className="bg-buttonMobile text-white rounded-lg w-40 h-12 m-auto"
            type="submit"
            value="Get early acces"
          />
        </div>
        <img
          className="absolute top-[717px] left-[7px]"
          src={announce}
          alt=""
        />
        <img
          className="absolute top-[1003px] left-[42.09px]"
          src={arrowRight}
          alt=""
        />
        <img className="absolute top-[1000px] left-[90px]" src={add} alt="" />
        <img
          className="absolute top-[1106px] left-[42.09px]"
          src={arrowRight}
          alt=""
        />
        <img
          className="absolute top-[1104px] left-[90px]"
          src={activate}
          alt=""
        />
        <img
          className="absolute top-[1187px] left-[42.09px]"
          src={arrowRight}
          alt=""
        />
        <img
          className="absolute top-[1183px] left-[90px]"
          src={update}
          alt=""
        />
      </div>
    </div>
  );
}
