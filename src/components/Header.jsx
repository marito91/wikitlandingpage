import React from "react";

// Assets
import wikit from "../assets/wikit.svg";
import star from "../assets/star.svg";
import denny from "../assets/dennyJones.svg";
import feedback from "../assets/feedbackSh.svg";
import paola from "../assets/paola.svg";
import arrow from "../assets/arrow.svg";
import mini from "../assets/miniVector.svg";

// logos
import vertex from "../assets/vertex.svg";
import martino from "../assets/martino.svg";
import squareStone from "../assets/squareStone.svg";
import waverio from "../assets/waverio.svg";
import fireli from "../assets/fireli.svg";
import virogan from "../assets/virogan.svg";
import aromix from "../assets/aromix.svg";
import natroma from "../assets/natroma.svg";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row">
        <div className="w-2/6">
          <img className="p-5" src={wikit} alt="" />
        </div>
        <div className="flex justify-center gap-9 w-2/6 align-middle pt-5">
          <a className="text-secondary" href="/#">
            Features
          </a>
          <a className="text-secondary" href="/#">
            Pricing
          </a>
          <a className="text-secondary" href="/#">
            Blog
          </a>
          <a className="text-secondary" href="/#">
            What's new?
          </a>
        </div>
        <div className="w-2/6 text-right pr-4 pt-3 tabletMax:invisible">
          <button className="bg-tertiary border border-quaternary text-white rounded-lg px-5 py-3 drop-shadow-lg">
            Get early access
          </button>
        </div>
      </nav>
      <div className="flex flex-row flex-wrap mt-[161px] max-w-[100%]">
        <div className="desktop:w-[50%] pl-36">
          <h1 className="text-quinary font-extrabold text-[68px]  leading-[68px]">
            Organized information for remote teams.
          </h1>
          <p className="text-quinary mt-[34px] w-[533px] font-normal">
            Easy to find knowledge, content and proceses. Team announcements,
            team engagement and profiles.🙌
          </p>
          <button className="bg-tertiary border border-quaternary text-white rounded-lg px-10 py-3 drop-shadow-lg mt-[34px]">
            Get early access
          </button>
          <p className="text-secondary mt-[34px] font-normal">
            We're sending out invites all the time. 14 day free trial, no cc
            required.
          </p>
          <div className="flex flex-row mt-[40px] gap-1.5">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <h3 className="text-primary text-lg font-bold mt-[19.74px]">
            Truly needed as a remote-first company!
          </h3>
          <p className="text-secondary mt-[34px] w-[553px] font-normal">
            Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum
            arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper
            pretium ornare.
          </p>
          <div className="mt-[20px] flex flex-row gap-[11px]">
            <img src={denny} alt="" />
            <p className="text-primary text-lg font-bold">Denny Jones</p>
          </div>
        </div>
        <div className="desktop:w-[50%] pl-9">
          <img className="relative left-[-2px] top-[185px]" src={mini} alt="" />
          <img
            className="relative w-[456px] h-[462px] left-[54px] top-[8px] drop-shadow-2xl"
            src={feedback}
            alt=""
          />
          <img
            className="relative m-auto rounded-xl border w-[539pxpx] h-[280px] left-[64px] top-[-163px] drop-shadow-2xl"
            src={paola}
            alt=""
          />
          <img
            className="relative w-[81.17px] h-[446px] top-[-719px] left-[476px]"
            src={arrow}
            alt=""
          />
        </div>
      </div>

      <div className="bg-background flex flex-wrap w-[100%] laptop:h-[723px] desktop:h-[523px] tablet:w-[100%] left-0 top-[976px]">
        <div className="desktop:w-[50%]">
          <h2 className="text-primary text-5xl font-extrabold pt-[160px] pl-[160px]">
            Remote teams love using Wikit
          </h2>
          <p className="text-secondary pl-[160px] max-w-lg mt-[17px] font-normal">
            Your entire team in one place together, with Engage your team with
            company announcements that entice engagement.
          </p>
        </div>
        <div className="desktop:w-[50%] flex flex-wrap flex-col">
          <div className="w-[100%] flex gap-x-10 mt-[126px] ml-[100px]">
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[142px]" src={vertex} alt="" />
            </div>
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[142px]" src={martino} alt="" />
            </div>
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[142px]" src={squareStone} alt="" />
            </div>
          </div>
          <div className="w-[100%] flex gap-x-10 mt-[29.45px] ml-[150px]">
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[122px]" src={waverio} alt="" />
            </div>
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[79px]" src={fireli} alt="" />
            </div>
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[122px]" src={virogan} alt="" />
            </div>
            <div className="absolute w-[601px] h-[355px] left-[1200px] top-[1506px] bg-gradient-to-r from-transparent to-background"></div>
          </div>
          <div className="w-[100%] flex gap-x-10 mt-[29.45px] ml-[200px]">
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[122px]" src={aromix} alt="" />
            </div>
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[79px]" src={natroma} alt="" />
            </div>
            <div className="bg-white rounded-xl w-[177px] h-[60px] shadow-2xl flex">
              <img className="mx-auto w-[122px]" src={waverio} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
