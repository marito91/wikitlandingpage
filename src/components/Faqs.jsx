import React from "react";

export default function Faqs() {
  const faqs = [
    "How this theme is different others?",
    "What kind of files are included?",
    "Does this theme support plugins?",
    "How long do you provide support?",
    "Do you provide any moneyback guarantee?",
    "How to avail support?",
  ];
  return (
    <>
      <h1 className="text-5xl text-center text-primary font-extrabold mt-10 mb-7">
        Frequently Asked Questions
      </h1>
      <div className="flex items-center w-auto mb-10">
        <p className="text-left m-auto font-normal text-black ">
          With lots of unique blocks, you can easily build a page without
          coding. <br /> Build your next landing page
        </p>
      </div>

      <div className="m-auto w-[50%] mb-[790px] grid grid-cols-2 gap-x-[10px] gap-y-[40px] justify-center">
        {faqs.map((faq) => (
          <div className="">
            <h1 className="font-normal text-primary text-xl mb-6">{faq}</h1>
            <div className="p-[6px] flex gap-[16px] pt-[25px]">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
