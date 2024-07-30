import React from "react";

const ProjectsDisplaytext = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }

          .marquee-inner {
            display: flex;
            white-space: nowrap;
          }

          .marquee span {
            margin-right: 5px;
          }
        `}
      </style>

      <div className="marquee-inner">
        <div className="marquee">
          <span className="text-white text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light">PROJECTS</span>
          <span className="text-white text-opacity-50 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light">PROJECTS</span>
          <span className="text-violet-500 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light">PROJECTS</span>
        </div>
        <div className="marquee">
          <span className="text-white text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light">PROJECTS</span>
          <span className="text-white text-opacity-50 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light">PROJECTS</span>
          <span className="text-violet-500 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light">PROJECTS</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplaytext;
