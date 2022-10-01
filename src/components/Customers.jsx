import React from "react";

// Assets
import albert from "../assets/albert.svg";
import eleanor from "../assets/eleanor.svg";
import sales from "../assets/sales.svg";
import insight from "../assets/insight.svg";
import feed from "../assets/feed.svg";
import graph from "../assets/graph.svg";
import tracking from "../assets/tracking.svg";
import devon from "../assets/devon.svg";

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

  const testimonies = [
    {
      pic: "devon",
      name: "Devon Lane",
      job: "Account Assistant",
      content:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
    },
    {
      pic: "marvin",
      name: "Marvin McKinney",
      job: "Project Manager",
      content:
        "“Rareblocks makes it super easy to see which kinds of tweets perform best for whatever metric I'm optimizing for.”",
    },
    {
      pic: "bessie",
      name: "Bessie Cooper",
      job: "President of Sales",
      content:
        "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
    },
    {
      pic: "guy",
      name: "Guy Hawkins",
      job: "Marketing Coordinator",
      content:
        "“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”",
    },
    {
      pic: "theresa",
      name: "Theresa Webb",
      job: "Founder of SAAS",
      content:
        "“Must have tools for developers, who want to be Product Designer, UX Designer, or Interaction Designer.”",
    },
    {
      pic: "jacob",
      name: "Jacob Jones",
      job: "Marketing Director",
      content:
        "“Rareblocks helps you optimize for engagement. It also shows interesting data like follower count for each day and engagement per tweet.”",
    },
  ];

  const feedbacks = [
    {
      pic: "tracking",
      title: "Track Customers",
    },
    {
      pic: "feed",
      title: "Get Feedbacks",
    },
    {
      pic: "graph",
      title: " See results",
    },
  ];

  const titles = ["Track Customers", "Get Feedbacks", "See results"];
  return (
    <>
      <div className="bg-white ml-[241px] mt-[302px]">
        <div className="bg-white flex flex-wrap gap-32">
          <div className="w-[272px] h-[307px] border rounded-lg border-gray-200 shadow-lg gap-y-4 flex flex-col p-4">
            <h6 className="text-secondary max-w-lg font-normal">Customers</h6>
            {people.map((customer) => (
              <div className="flex gap-x-2">
                <img src={require(`../assets/${customer.pic}.svg`)} alt="" />
                <label htmlFor="">{customer.name}</label>
              </div>
            ))}
            <div className="w-[306px] h-[95px] mt-6">
              <h3 className="font-normal text-primary text-xl">{titles[0]}</h3>
              <p className="text-secondary max-w-lg font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend nullam cons.
              </p>
            </div>
          </div>

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
            <div className="w-[306px] h-[95px] mt-[38%]">
              <h3 className="font-normal text-primary text-xl">{titles[1]}</h3>
              <p className="text-secondary max-w-lg font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend nullam cons.
              </p>
            </div>
          </div>
          <div>
            <img src={graph} alt="" />
            <div className="w-[306px] h-[95px] pl-[10%] mt-[1%]">
              <h3 className="font-normal text-primary text-xl">{titles[2]}</h3>
              <p className="text-secondary max-w-lg font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend nullam cons.
              </p>
            </div>
          </div>

          {/*
          
          {feedbacks.map((info) => (
            <div className="flex flex-col">
              <img src={require(`../assets/${info.pic}.svg`)} alt="" />
              <div className="w-[306px] h-[95px]">
                <h3 className="font-normal text-primary text-xl">
                  {info.title}
                </h3>
                <p className="text-secondary max-w-lg font-normal text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Eleifend nullam cons.
                </p>
              </div>
            </div>
          ))}*/}
        </div>
      </div>
      <div className="text-center mb-[85px]">
        <h1 className="text-5xl text-center text-primary font-extrabold mt-10 mb-7">
          What our customers are saying...
        </h1>
        <p className="text-secondary font-normal text-xs mt-6">
          2,157 people have said how good we are
        </p>
      </div>
      <div className="m-auto w-[50%] mb-[790px] grid grid-cols-2 gap-x-[10px] gap-y-[40px] justify-center">
        {testimonies.map((testimony) => (
          <div className="">
            <div className="max-h-[240px] max-w-[380px] rounded-xl p-7 bg-gray-200">
              {testimony.content}]
            </div>
            <div className="p-[6px] flex gap-[16px] pt-[25px]">
              <img src={require(`../assets/${testimony.pic}.svg`)} alt="" />
              <div>
                <p className="text-primary text-base font-bold">
                  {testimony.name}
                </p>
                <p className="text-secondary text-sm font-normal">
                  {testimony.job}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
