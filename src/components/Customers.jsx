import React from "react";

// Assets
import albert from "../assets/albert.svg";
import eleanor from "../assets/eleanor.svg";
import graph from "../assets/graph.svg";
import shadowPalette from "../assets/shadowPalette.svg";

export default function Customers() {
  const people = [
    {
      pic: "jenny",
      name: "Jenny Wilson",
    },
    {
      pic: "cody",
      name: "Cody Fisher",
    },
    {
      pic: "robert",
      name: "Robert Fox",
    },
    {
      pic: "savannah",
      name: "Savannah Nguyen",
    },
    {
      pic: "floyd",
      name: "Floyd Miles",
    },
  ];

  const titles = ["Track Customers", "Get Feedbacks", "See results"];
  return (
    <>
      <div className="bg-white ml-[241px] mt-[302px]">
        <div className="bg-white grid grid-cols-3 justify-center">
          {/* {First modal customers} */}
          <div className="w-[272px] h-[307px] border rounded-lg border-gray-200 shadow-lg gap-y-4 flex flex-col p-4">
            <h6 className="text-secondary max-w-lg font-normal">Customers</h6>
            {people.map((customer) => (
              <div key={customer.name} className="flex gap-x-2">
                <img src={require(`../assets/${customer.pic}.svg`)} alt="" />
                <label htmlFor="">{customer.name}</label>
              </div>
            ))}
          </div>
          {/* {Second modal feedbacks} */}
          <div className="w-[272px] h-[258px] border rounded-lg border-gray-200 shadow-lg gap-y-2 flex flex-col p-4">
            <div className="flex gap-x-2">
              <img src={albert} alt="" />
              <label htmlFor="">Albert Flores</label>
            </div>
            <div className="text-secondary pl-7 max-w-lg font-normal text-xs">
              <p>
                Thanks for the awesome feedback! We are trying to implement this
                in our next update. Cheers!
              </p>
              <p className="mt-3 font-extralight text-xs">
                7 hours ago&nbsp;&nbsp; Reply
              </p>
            </div>
            <div className="flex gap-x-2 pl-5">
              <img src={eleanor} alt="" />
              <label htmlFor="">Eleanor Pena</label>
            </div>
            <div className="text-secondary pl-14 max-w-lg font-normal text-xs">
              <p>
                <strong className="text-black">@Albert Flores</strong> That
                would be great!
              </p>
              <p className="mt-3 font-extralight text-xs">
                4 hours ago&nbsp;&nbsp; Reply
              </p>
            </div>
          </div>

          {/* {Third modal results} */}
          <div>
            <img src={graph} alt="" />
          </div>

          {/* {Text Row results} */}
          {titles.map((title) => (
            <div key={title} className="w-[306px] h-[95px] ">
              <h3 className="font-normal text-primary text-xl">{title}</h3>
              <p className="text-secondary max-w-lg font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend nullam cons.
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white grid grid-cols-3 justify-center mt-[86px]">
          {/* {First modal customers} */}
          <div className="w-[272px] h-[307px] border rounded-lg border-gray-200 shadow-lg gap-y-4 flex flex-col p-4">
            <h6 className="text-secondary max-w-lg font-normal">Customers</h6>
            {people.map((customer) => (
              <div key={customer.name} className="flex gap-x-2">
                <img src={require(`../assets/${customer.pic}.svg`)} alt="" />
                <label htmlFor="">{customer.name}</label>
              </div>
            ))}
          </div>
          {/* {Second modal feedbacks} */}
          <div className="w-[272px] h-[258px] border rounded-lg border-gray-200 shadow-lg gap-y-2 flex flex-col p-4">
            <div className="flex gap-x-2">
              <img src={albert} alt="" />
              <label htmlFor="">Albert Flores</label>
            </div>
            <div className="text-secondary pl-7 max-w-lg font-normal text-xs">
              <p>
                Thanks for the awesome feedback! We are trying to implement this
                in our next update. Cheers!
              </p>
              <p className="mt-3 font-extralight text-xs">
                7 hours ago&nbsp;&nbsp; Reply
              </p>
            </div>
            <div className="flex gap-x-2 pl-5">
              <img src={eleanor} alt="" />
              <label htmlFor="">Eleanor Pena</label>
            </div>
            <div className="text-secondary pl-14 max-w-lg font-normal text-xs">
              <p>
                <strong className="text-black">@Albert Flores</strong> That
                would be great!
              </p>
              <p className="mt-3 font-extralight text-xs">
                4 hours ago&nbsp;&nbsp; Reply
              </p>
            </div>
          </div>

          {/* {Third modal results} */}
          <div>
            <img src={shadowPalette} alt="" />
          </div>
          {/* {Text Row results} */}
          {titles.map((title) => (
            <div key={title} className="w-[306px] h-[95px] mt-9">
              <h3 className="font-normal text-primary text-xl">{title}</h3>
              <p className="text-secondary max-w-lg font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend nullam cons.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[203px] flex justify-center mb-[205px]">
        <div className="bg-palette1 w-[155px] h-[383px] rounded-l-3xl"></div>
        <div className="bg-palette2 w-[155px] h-[383px]"></div>
        <div className="bg-palette3 w-[155px] h-[383px]"></div>
        <div className="bg-palette4 w-[155px] h-[383px]"></div>
        <div className="bg-palette5 w-[155px] h-[383px] rounded-r-3xl"></div>
      </div>
    </>
  );
}
