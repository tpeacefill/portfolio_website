import React from "react";
import Image from "next/image";

const Expertise = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-full max-w-screen-xl flex flex-col px-4">
        <h1 className="w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white text-opacity-50 max-md:max-w-full font-Poppins font-light">
          I am Peacefill Tawiah
        </h1>
        <h1 className="mt-1 w-full text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light font-Poppins text-white max-md:max-w-full">
          An expert in two different fields...
        </h1>
        <div className="flex gap-5 items-center px-14 py-6 mt-20 w-full border-b border-white border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto text-[40px] font-light text-white font-Poppins">
            01.
          </p>
          <p className="flex-auto self-stretch my-auto text-[40px] font-light text-white font-Poppins">
            UI/UX Design
          </p>
          <p className="flex-auto self-stretch my-auto text-[24px] text-white text-opacity-50 max-md:max-w-full font-Poppins font-thin">
            I specialize in creating intuitive and
            <br />
            engaging digital experiences by combining
            <br />
            aesthetics with usability.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="140"
            viewBox="0 0 105 140"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="104"
              height="139"
              rx="52"
              stroke="white"
              stroke-opacity="0.5"
            />
            <rect
              x="23.5"
              y="43.5"
              width="59"
              height="24"
              rx="12"
              stroke="white"
            />
            <circle cx="71" cy="56" r="8" fill="#8A74FF" />
            <rect
              x="23.5"
              y="73.5"
              width="59"
              height="24"
              rx="12"
              stroke="white"
            />
            <circle cx="35" cy="86" r="8" fill="#8A74FF" />
          </svg>
        </div>
        <div className="flex gap-5 items-center px-14 py-6 mt-28 w-full text-4xl font-light text-white border-b border-white border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto text-[40px] font-light text-white font-Poppins">02.</p>
          <p className="flex-auto self-stretch my-auto text-[40px] font-light text-white font-Poppins">
            Front-end
            <br />
            Development
          </p>
          <p className="flex-auto self-stretch my-auto text-[24px] text-white text-opacity-50 max-md:max-w-full font-Poppins font-thin">
            Creating stunning and responsive UIs
            <br />
            for websites, web applications, and mobile
            <br />
            apps with code is what I do.
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e84280e2af1b3e4471337de74e21dd9742d713f3746a13c72c01156d5e9672e?"
            className="shrink-0 self-stretch max-w-full aspect-[0.75] w-[105px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
