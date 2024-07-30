import Image from "next/image";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black mt-24">
      <div className="w-full max-w-screen-xl flex px-4">
        <div className="flex w-full flex-col md:flex-row md:justify-between gap-4">
          <div className="flex flex-col w-full md:w-[59%] px-5 mt-auto mb-auto">
            <h1 className="font-light text-left text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-Poppins text-white text-opacity-50">
              About Me
            </h1>
            <div className="border-t border-white border-opacity-20 mt-4 mb-8"></div>
            <p className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-Poppins font-thin text-white">
              Based in Accra, Ghana, with 4+ years of experience in UI/UX Design
              & Front-end Development. A passionate designer and developer with
              an appeal for aesthetics and good user experience.
            </p>
          </div>
          <div className="px-5 lg:px-0 lg:ml-auto">
            <Image
              src="/profile.svg"
              alt="about-me"
              width={445}
              height={595}
              className="rounded-xl aspect-[0.75]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
