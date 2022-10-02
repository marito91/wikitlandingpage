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

export default function MobileTeams() {
  return (
    <div className="mt-[200%] text-quinary">
      <div className="mt-[130px] mb-12 flex flex-col gap-y-6 justify-center">
        <h2 className="text-2xl font-bold text-center">
          Engage your remote team
        </h2>
        <p className="w-[341px] font-normal text-base text-center m-auto">
          Remote work is challenging when knowledge is spread across slack,
          emails, documents and spreadsheets. It is especially challenging when
          trying to find information and engage with your remote team.
          <br />
          <br />
          <strong>Weware solves all that.</strong>
          Create your team directory with profiles, share company announcements,
          create knowledge wiki where you share important information and
          processes. Best of all, weware is also a place to engage and recognize
          effort.
        </p>
      </div>

      {/* First section of svgs */}
      <div>
        <img className="absolute left-[247px] top-[2004px]" src={mask} alt="" />
        <img
          className="absolute left-[22px] top-[1863px]"
          src={announcements}
          alt=""
        />
        <img className="absolute left-[22px] top-[1863px]" src={chat} alt="" />
        <img
          className="absolute left-[59px] top-[2156px]"
          src={greenDiamond}
          alt=""
        />
      </div>

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
        <img className="absolute left-[270px] top-[2419px]" src={e12} alt="" />
        <img className="absolute left-[33px] top-[2411px]" src={home} alt="" />
        <img
          className="absolute left-[50px] top-[2507px]"
          src={topicBubble}
          alt=""
        />
        <img className="absolute left-[33px] top-[2523px]" src={r32} alt="" />
        <img
          className="absolute left-[73px] top-[2530px]"
          src={command}
          alt=""
        />
        <img className="absolute left-[33px] top-[2557px]" src={r33} alt="" />
        <img
          className="absolute left-[73px] top-[2563px]"
          src={search}
          alt=""
        />
        <img className="absolute left-[33px] top-[2590px]" src={r34} alt="" />
        <img className="absolute left-[73px] top-[2595px]" src={edit} alt="" />
        <img
          className="absolute left-[319px] top-[2704px]"
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
          className="absolute left-[53px] top-[3113px]"
          src={vertical}
          alt=""
        />
        <img
          className="absolute left-[36px] top-[2963px]"
          src={history}
          alt=""
        />
        <img
          className="absolute left-[82px] top-[2965px]"
          src={jackie}
          alt=""
        />
        <img
          className="absolute left-[82px] top-[2965px]"
          src={jackie}
          alt=""
        />
        <img
          className="absolute left-[355px] top-[3257px]"
          src={orangeDiamond}
          alt=""
        />
      </div>

      {/* Fourth section of svgs */}
      <div className="mt-[90%] mb-12 flex flex-col gap-y-6 justify-center">
        <h2 className="text-xl font-bold text-center">Team Directory</h2>
        <p className="w-[341px] font-normal text-base text-center m-auto">
          Your entire team in one place, with profile information, history,
          notes and more. You no longer need a clunky separate HR app.
        </p>
      </div>
    </div>
  );
}
