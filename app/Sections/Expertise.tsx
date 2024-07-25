import React from "react";
import styles from "./Expertise.module.css";

const Expertise = () => {
  return (
    <div className="w-full flex justify-center bg-black mb-64">
      <div className="w-full max-w-screen-xl flex flex-col px-4">
        <h1 className="w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white text-opacity-50 max-md:max-w-full font-Poppins font-light">
          I am Peacefill Tawiah
        </h1>
        <h1 className="mt-1 w-full text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light font-Poppins text-white max-md:max-w-full">
          An expert in two different fields...
        </h1>
        <div className="flex gap-5 items-center justify-between px-14 py-6 mt-20 w-full border-b border-white border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-light text-white font-Poppins">
            01.
          </p>
          <p className="flex-auto self-stretch my-auto text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-light text-white font-Poppins min-w-[250px]">
            UI/UX Design
          </p>
          <p className="flex-auto self-stretch my-auto text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white text-opacity-50 max-md:max-w-full font-Poppins font-thin max-w-[450px]">
            I specialize in creating intuitive and engaging digital experiences
            by combining aesthetics with usability.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgIcon}
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
        <div className="flex gap-5 items-center justify-between px-14 py-6 mt-20 w-full border-b border-white border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-light text-white font-Poppins">
            02.
          </p>
          <p className="flex-auto self-stretch my-auto text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-light text-white font-Poppins min-w-[250px]">
            Front-end
            <br />
            Development
          </p>
          <p className="flex-auto self-stretch my-auto text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white text-opacity-50 max-md:max-w-full font-Poppins font-thin max-w-[450px]">
            Creating stunning and responsive UIs for websites, web applications,
            and mobile apps with code is what I do.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgIcon}
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
            <path
              d="M43 56.25L28 71.7902L43 86.25"
              stroke="#8A74FF"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63 56.25L78 71.7902L63 86.25"
              stroke="#8A74FF"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58 45L49.25 95"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
