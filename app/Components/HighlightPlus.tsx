import React, { ReactNode } from "react";

interface HighlightPlusProps {
  children?: ReactNode;
}

const HighlightPlus: React.FC<HighlightPlusProps> = ({ children }) => {
  return (
    <div className="relative inline-block align-middle px-4">
      {/* Top Left SVG */}
      <div className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px]"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M8.82305 1.39355V17.524M16.8883 9.45879H0.757812"
            stroke="#8A74FF"
            strokeWidth="0.948851"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Top Right SVG */}
      <div className="absolute top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          fill="none"
          className="w-[16px] h-[16px]"
        >
          <path
            d="M8.82305 1.39355V17.524M16.8883 9.45879H0.757812"
            stroke="#8A74FF"
            strokeWidth="0.948851"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Bottom Left SVG */}
      <div className="absolute bottom-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px]"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M8.82305 1.39355V17.524M16.8883 9.45879H0.757812"
            stroke="#8A74FF"
            strokeWidth="0.948851"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Bottom Right SVG */}
      <div className="absolute bottom-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px]"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M8.82305 1.39355V17.524M16.8883 9.45879H0.757812"
            stroke="#8A74FF"
            strokeWidth="0.948851"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Top Connecting Line */}
      <div className="absolute top-1 left-4 right-4 border-t border-solid border-[#8A74FF]/50"></div>

      {/* Bottom Connecting Line */}
      <div className="absolute bottom-1 left-4 right-4 border-t border-solid border-[#8A74FF]/50"></div>

      {/* Left Connecting Line */}
      <div className="absolute top-4 bottom-4 left-1 border-l border-solid border-[#8A74FF]/50"></div>

      {/* Right Connecting Line */}
      <div className="absolute top-4 bottom-4 right-1 border-l border-solid border-[#8A74FF]/50"></div>

      {/* Child Content */}
      <div className="flex items-center justify-center text-white mt-0">
        {children}
      </div>
    </div>
  );
};

export default HighlightPlus;
