import React from "react";
import HighlightPlus from "../Components/HighlightPlus"; // Adjust the import path as necessary

const GetInTouch = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black lg:mb-48 lg:mt-24 md:mb-48 md:mt-24">
      <div className="flex flex-col items-center px-5 text-center text-white">
        <h1 className="self-stretch w-full text-[40px] sm:text-[40px] md:text-[50px] lg:text-[80px] max-md:max-w-full">
          Let me transform your&nbsp; 
          <br className="hidden md:block" />
          ideas into
          <HighlightPlus>reality.</HighlightPlus>
        </h1>
        <p className="mt-11 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extralight  text-white text-opacity-50 max-md:mt-7 max-md:max-w-full">
          The only bridge between you, your ideas, and reality is me. 
          <br className="hidden md:block"  />
          Please do well to get in touch with me and let’s get things started.
        </p>
        <div className="flex gap-5 py-2.5 pr-3 pl-12 mt-10 text-2xl font-medium bg-violet-500 rounded-[50px] max-md:pl-5">
          <div className="flex-auto my-auto">Get In Touch</div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <circle cx="30" cy="30" r="30" fill="#FCFCFC" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M20.215 16.2498L5 16.2498L5 13.7498L20.215 13.7498L13.51 7.04484L15.2775 5.27734L25 14.9998L15.2775 24.7223L13.51 22.9548L20.215 16.2498Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
