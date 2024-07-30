import React from "react";

const ProjectsPortfolio = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black mb-48 mt-24">
      <div className="w-full max-w-screen-xl flex flex-col px-4">
        <div className="flex flex-col px-8 py-6 text-white whitespace-nowrap bg-violet-500 rounded-xl max-md:px-5">
          <div className="flex gap-5 justify-between text-xl font-light max-md:flex-wrap max-md:max-w-full">
            <p className="font-Poppins text-white font-thin text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]">2024</p>
            <p className="font-Poppins text-white font-thin text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]">UI/UX</p>
          </div>
          <div className="flex items-center mt-2 max-md:max-w-full justify-between">
            <h1 className="text-[24px] sm:text-[24px] md:text-[42px] lg:text-[64px] font-Poppins font-light">GridGuard</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20"
              viewBox="0 0 72 71"
              fill="none"
            >
              <path
                d="M28.266 24.3067H48.1534M48.1534 24.3067V44.1941M48.1534 24.3067L24.9515 47.5087"
                stroke="white"
                strokeWidth="4.6875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="shrink-0 mt-0 border-t border-white border-opacity-70 max-md:max-w-full" style={{ height: '0.5px' }} />
          <div className="shrink-0 mt-3 bg-white h-[640px] max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;
