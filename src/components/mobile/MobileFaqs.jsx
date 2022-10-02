import React, { useState } from "react";
import emptyAccordions from "../../emptyInfo";

// Assets
import open from "../../assets/mobileAssets/open.svg";
import closed from "../../assets/mobileAssets/closed.svg";

export default function MobileFaqs() {
  const [openAcc, setOpenAcc] = useState(true);

  function openAccordion() {
    setOpenAcc(true);
    document.getElementById("info").style.display = "block";
  }

  function closeAccordion() {
    setOpenAcc(false);
    document.getElementById("info").style.display = "none";
  }

  const accordion = {
    faq: "Lorem ipsum dolor, sit amet?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien. Scelerisque habitant felis sit mi. Justo gravida leo non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien.",
  };

  return (
    <div className="text-quinary mt-[100%]">
      <h1 className="font-bold text-2xl text-center">FAQ</h1>
      {/* Functional accordion just for the purpose of demo */}
      <div className="flex justify-between text-base font-bold p-5">
        <h3>{accordion.faq}</h3>
        {openAcc === false ? (
          <img src={closed} alt="" onClick={() => openAccordion()} />
        ) : (
          <img src={open} alt="" onClick={() => closeAccordion()} />
        )}
      </div>
      <p id="info" className="p-5 font-normal text-base">
        {accordion.info}
      </p>
      {/* Since these are empty, there's no need to make them functional for this demo */}
      {emptyAccordions.map((acc) => (
        <>
          <hr className="m-3" />
          <div
            key={accordion.faq}
            className="flex justify-between text-base font-bold p-5"
          >
            <h3>{accordion.faq}</h3>
            <img src={closed} alt="" />
          </div>
          <p id="info" className="p-5 font-normal text-base hidden">
            {accordion.info}
          </p>
        </>
      ))}
      <div className="mt-[130px] mb-12 flex flex-col gap-y-6 justify-center">
        <h2 className="text-base font-bold text-center">
          Sign up for product updates:
        </h2>
        <p className="w-[341px] font-normal text-base text-center m-auto">
          Ullamcorper orci, eu venenatis ac euismod vel purus tortor rhoncus
          mauri.
        </p>
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
    </div>
  );
}
