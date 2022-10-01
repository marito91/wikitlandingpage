import React from "react";

export default function Testimonies() {
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

  return (
    <div>
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
    </div>
  );
}
