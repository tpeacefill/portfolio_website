import React from "react";

const WorkExperience = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black mb-48">
      <div className="w-full h-auto max-w-screen-xl flex flex-col px-4">
        <h1 className="w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] lg:mb-24 md:mb-24 font-Poppins font-light text-white">
          My years of experience
          <br />
          are without question
        </h1>

        {/* Show this on medium and small screens */}
        <div className="lg:hidden flex flex-col items-center mt-24 w-full">
          <h1 className="text-white text-opacity-50 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins">
            2020
          </h1>
          <div className="relative flex flex-col items-center w-full">
            <div className="w-0.5 h-[400px] bg-white bg-opacity-30"></div>

            <div className="absolute flex flex-col items-center w-full h-[400px] justify-around">
              <div className="relative flex flex-col items-center">
                <div className="relative w-[26px] h-[26px] bg-[#8a74ff] rounded-full flex items-center justify-center">
                  <div className="absolute w-[70px] h-0.5 bg-[#8a74ff] right-full"></div>
                  <p className="text-white text-opacity-50 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-Poppins font-thin absolute right-full mr-20">
                    2021
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="relative w-[26px] h-[26px] bg-[#8a74ff] rounded-full flex items-center justify-center">
                  <div className="absolute w-[70px] h-0.5 bg-[#8a74ff] left-full"></div>
                  <p className="text-white text-opacity-50 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-Poppins font-thin absolute left-full ml-20">
                    2022
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="relative w-[26px] h-[26px] bg-[#8a74ff] rounded-full flex items-center justify-center">
                  <div className="absolute w-[70px] h-0.5 bg-[#8a74ff] right-full"></div>
                  <p className="text-white text-opacity-50  text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-Poppins font-thin absolute right-full mr-20">
                    2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-white text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins mt-6">
            2024
          </h1>
        </div>

        {/* Show this on large screens */}
        <div className="hidden lg:flex flex-col items-center justify-between mt-24 w-full lg:flex-row mb-56">
          <h1 className="text-white text-opacity-50 text-[128px] font-Poppins">
            2020
          </h1>
          <div className="relative flex flex-col items-center justify-center w-full lg:h-0.5">
            <div className="w-full h-0.5 bg-white bg-opacity-30"></div>

            <div className="absolute w-[26px] h-[26px] bg-[#8a74ff] rounded-full lg:left-[20%] flex items-center justify-center lg:-translate-x-1/2">
              <div className="absolute w-0.5 h-[70px] bg-[#8a74ff] lg:bottom-[-70px]"></div>
              <p className="text-white  text-opacity-50 text-[20px] font-Poppins font-thin lg:absolute lg:top-[100px] lg:left-1/2 lg:-translate-x-1/2">
                2021
              </p>
            </div>

            <div className="absolute w-[26px] h-[26px] bg-[#8a74ff] rounded-full lg:left-[50%] flex items-center justify-center lg:-translate-x-1/2">
              <div className="absolute w-0.5 h-[70px] bg-[#8a74ff] lg:top-[-70px]"></div>
              <p className="text-white text-opacity-50 text-[20px] font-Poppins font-thin lg:absolute lg:bottom-[100px] lg:left-1/2 lg:-translate-x-1/2">
                2022
              </p>
            </div>

            <div className="absolute w-[26px] h-[26px] bg-[#8a74ff] rounded-full lg:left-[80%] flex items-center justify-center lg:-translate-x-1/2">
              <div className="absolute w-0.5 h-[70px] bg-[#8a74ff] lg:bottom-[-70px]"></div>
              <p className="text-white text-opacity-50 text-[20px] font-Poppins font-thin lg:absolute lg:top-[100px] lg:left-1/2 lg:-translate-x-1/2">
                2023
              </p>
            </div>
          </div>

          <h1 className="text-white text-[128px] font-Poppins">2024</h1>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
