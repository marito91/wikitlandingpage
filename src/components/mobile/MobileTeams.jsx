import React from "react";

import FirstSection from "./TeamSections/FirstSection";
import SecondSection from "./TeamSections/SecondSection";
import ThirdSection from "./TeamSections/ThirdSection";
import FourthSection from "./TeamSections/FourthSection";
import FifthSection from "./TeamSections/FifthSection";

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
          <img
            key={team}
            src={require(`../../assets/mobileAssets/${team}.svg`)}
            alt=""
          />
        ))}
      </div>
      <div className="mt-8 mb-12 flex flex-col gap-y-6 justify-center">
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
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </>
  );
}
