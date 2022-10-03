import React from "react";

// Assets Fifth Section
import john from "../../../assets/mobileAssets/john.svg";
import g65 from "../../../assets/mobileAssets/g65.svg";
import blueDiamond from "../../../assets/mobileAssets/blueDiamond.svg";

export default function FifthSection() {
  return (
    <>
      {/* Fifth section of svgs */}
      <div className="mt-[100%] mb-12 flex flex-col gap-y-6 justify-center text-quinary">
        <h2 className="text-xl font-bold text-center">Recognition</h2>
        <p className="w-[341px] font-normal text-base text-center m-auto">
          Anyone can thank, recognize co workers for their effort. The activity
          feeds reveal all the great things happening on your team.
        </p>
      </div>
      <div className="mt-[40%] mb-12 flex flex-col gap-y-6 justify-center text-quinary">
        <p className="w-[341px] font-normal text-2xl text-center m-auto">
          “We've had less confusion with task responsibilities and deadlines,
          which has increased productivity and efficiency.”
        </p>
        <div className="flex justify-center">
          <img src={john} alt="" />
          <h4 className="text-xl font-normal p-3">John Doe, Qrvey.</h4>
        </div>
      </div>

      <div>
        <img className="absolute left-[5%]" src={g65} alt="" />
        <h2 className="absolute pt-10 text-xl text-white font-bold text-center w-[296px] left-[45px]">
          Interested in early access? Join the waitlist
        </h2>
        <h2 className="absolute pt-[100px] text-m text-white font-normal text-center w-[296px] left-[45px]">
          (releasing Q1 2022)
        </h2>
      </div>
      <div className="flex flex-col gap-y-6 justify-center pt-[50%]">
        <input
          className="absolute p-3 text border border-blue-900 rounded-lg w-[276px] left-[15%]"
          type="email"
          placeholder="Your email address"
        />
        <input
          className="absolute bg-buttonMobile text-white rounded-lg w-40 h-12 top-[4672px] left-[30%]"
          type="submit"
          value="Get early acces"
        />
        <img
          className="absolute left-[12%] top-[4742px]"
          src={blueDiamond}
          alt=""
        />
      </div>
    </>
  );
}
