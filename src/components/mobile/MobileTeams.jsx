import React from "react";

// Assets First section
import announcements from "../../assets/mobileAssets/announcements.svg";
import chat from "../../assets/mobileAssets/chat.svg";
import mask from "../../assets/mobileAssets/mask.svg";
import greenDiamond from "../../assets/mobileAssets/greenDiamond.svg";

// Assets Second section
import home from "../../assets/mobileAssets/home.svg";
import topicBubble from "../../assets/mobileAssets/topicBubble.svg";
import search from "../../assets/mobileAssets/search.svg";
import purpleDiamond from "../../assets/mobileAssets/purpleDiamond.svg";
import r32 from "../../assets/mobileAssets/r32.svg";
import r33 from "../../assets/mobileAssets/r33.svg";
import r34 from "../../assets/mobileAssets/r34.svg";
import command from "../../assets/mobileAssets/command.svg";
import e12 from "../../assets/mobileAssets/e12.svg";
import edit from "../../assets/mobileAssets/edit.svg";

// Assets Third section
import history from "../../assets/mobileAssets/history.svg";
import jackie from "../../assets/mobileAssets/jackie.svg";
import vertical from "../../assets/mobileAssets/vertical.svg";
import orangeDiamond from "../../assets/mobileAssets/orangeDiamond.svg";

// Assets Fourth Section
import juneHfc from "../../assets/mobileAssets/juneHfc.svg";
import greenArrow from "../../assets/mobileAssets/greenArrow.svg";
import r29 from "../../assets/mobileAssets/r29.svg";
import star from "../../assets/mobileAssets/star.svg";

export default function MobileTeams() {
  const teams = [
    "luna",
    "bucket",
    "mesh",
    "leapcure",
    "betterWorks",
    "hyperia",
  ];
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-[170%] text-quinary">
        Distributed teams brought together
      </h2>
      <div className="m-auto grid grid-cols-2 p-6 gap-x-[64px] gap-y-[16px] justify-center">
        {teams.map((team) => (
          <img src={require(`../../assets/mobileAssets/${team}.svg`)} alt="" />
        ))}
      </div>
      <div className="text-quinary">
        <div className="mt-8 mb-12 flex flex-col gap-y-6 justify-center">
          <h2 className="text-2xl font-bold text-center">
            Engage your remote team
          </h2>
          <p className="w-[341px] font-normal text-base text-center m-auto">
            Remote work is challenging when knowledge is spread across slack,
            emails, documents and spreadsheets. It is especially challenging
            when trying to find information and engage with your remote team.
            <br />
            <br />
            <strong>Weware solves all that.</strong>
            Create your team directory with profiles, share company
            announcements, create knowledge wiki where you share important
            information and processes. Best of all, weware is also a place to
            engage and recognize effort.
          </p>
        </div>

        {/* First section of svgs */}
        <div>
          <img
            className="absolute left-[227px] top-[2180px]"
            src={mask}
            alt=""
          />
          <img
            className="absolute left-[12px] top-[2031px]"
            src={announcements}
            alt=""
          />
          <img
            className="absolute left-[11px] top-[2029px]"
            src={chat}
            alt=""
          />
          <img
            className="absolute left-[54px] top-[2324px]"
            src={greenDiamond}
            alt=""
          />
        </div>

        {/* Second section of svgs */}
        <div className="mt-[90%] mb-12 flex flex-col gap-y-6 justify-center">
          <h2 className="text-xl font-bold text-center">Announcements</h2>
          <p className="w-[341px] font-normal text-base text-center m-auto">
            Your entire team in one place, with Engage your team with company
            wide announcements that entice engagement. The team homepage reveals
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
          <img
            className="absolute left-[11%] top-[2663px]"
            src={search}
            alt=""
          />
          <img className="absolute left-[1%] top-[2690px]" src={r34} alt="" />
          <img className="absolute left-[11%] top-[2695px]" src={edit} alt="" />
          <img
            className="absolute left-[75%] top-[2804px]"
            src={purpleDiamond}
            alt=""
          />
        </div>

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
          <img
            className="absolute left-[2%] top-[3039px]"
            src={history}
            alt=""
          />
          <img
            className="absolute left-[15%] top-[3044px]"
            src={jackie}
            alt=""
          />
          <img
            className="absolute left-[84%] top-[3337px]"
            src={orangeDiamond}
            alt=""
          />
        </div>

        {/* Fourth section of svgs */}
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
