import React from "react";

// Assets
import divider from "../../assets/mobileAssets/divider.svg";
import weware from "../../assets/mobileAssets/weware.svg";

export default function MobileFooter() {
  return (
    <div>
      <hr className="m-6" />
      <div className="flex flex-wrap gap-x-[73px] gap-y-[57px] p-8 text-quinary mb-[74px]">
        <div className="flex flex-col gap-y-[20px] p-5">
          <h4 className="text-quinary font-semibold">Social Media</h4>
          <img className="w-[15px]" src={divider} alt="" />
          <a href="/#">Discord</a>
          <a href="/#">Twitter</a>
          <a href="/#">Instagram</a>
        </div>
        <div className="flex flex-col gap-y-[20px] p-5">
          <h4 className="text-quinary font-semibold">Company</h4>
          <img className="w-[15px]" src={divider} alt="" />
          <a href="/#">Community</a>
          <a href="/#">Blog</a>
        </div>
        <div className="flex flex-col gap-y-[20px] p-5">
          <h4 className="text-quinary font-semibold">Resources</h4>
          <img className="w-[15px]" src={divider} alt="" />
          <a href="/#">Contact us</a>
        </div>
      </div>
      <div className="text-quinary">
        <img className="m-auto" src={weware} alt="" />
        <p className="w-60 h-10 m-auto text-center font-normal text-sm mt-[21px]">
          Ullamcorper orci, venenatis ac euismod vel purus tortor rhoncu.
        </p>
      </div>
    </div>
  );
}
