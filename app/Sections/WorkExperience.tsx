import React from "react";

const WorkExperience = () => {
  return (
    <div className="w-full flex justify-center bg-black mb-64">
      <div className="w-full max-w-screen-xl flex flex-col px-4">
        <h1 className="w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-Poppins font-light text-white max-md:max-w-full">
          My years of experience
          <br />
          are without question
        </h1>
        <div className="flex gap-5 items-center justify-between mt-24 w-full text-9xl whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h1 className="flex-auto self-stretch text-white text-opacity-50 max-md:text-4xl">
            2020
          </h1>

          <h1 className="flex-auto self-stretch text-white max-md:text-4xl">
            2024
          </h1>
        </div>
        <div className="flex gap-5 justify-between self-center mt-24 max-w-full whitespace-nowrap font-[275] text-white text-opacity-50 w-[386px] max-md:mt-10">
          <div>2021</div>
          <div>2023</div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
