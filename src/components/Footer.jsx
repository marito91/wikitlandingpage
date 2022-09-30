import React from "react";

// Assets
import wikit from "../assets/wikit.svg";
import rectangle from "../assets/rectangle.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import inst from "../assets/inst.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="hero container max-w-screen-laptop mx-auto pb-10 h-[1074px] font-bold">
      <img className="mx-auto pb-10 pt-[1098px]" src={wikit} alt="" />
      <div className="flex justify-center gap-9">
        <a className="text-secondary" href="">
          Features
        </a>
        <a className="text-secondary" href="">
          Pricing
        </a>
        <a className="text-secondary" href="">
          Blog
        </a>
        <a className="text-secondary" href="">
          What's new?
        </a>
      </div>
      <img className="mx-auto mt-10 mb-10" src={rectangle} alt="" />
      <div className="flex justify-center gap-9">
        <img src={twitter} alt="" />
        <img src={fb} alt="" />
        <img src={inst} alt="" />
        <img src={github} alt="" />
      </div>
      <p className="text-gray-600 text-center pt-10 mb-10">
        © Copyright 2021, All Rights Reserved
      </p>
    </div>
  );
}
