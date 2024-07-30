import React from "react";

interface CapsuleProps {
  text: string;
  Icon: JSX.Element;
  width?: string; // Optional width prop
  position?: any; // Optional position prop
  rotation?: number; // Optional rotation prop in degrees
}

const Capsule: React.FC<CapsuleProps> = ({ text, Icon, width = "auto", position = "static", rotation = 0 }) => {
  return (
    <div
      className="flex h-[68px] justify-center items-center   px-4 gap-2 border-2 border-white/50 rounded-[39.53px] m-1"
      style={{ width, position, transform: `rotate(${rotation}deg)` }}
    >
      <p className="text-white/50 text-[16px] md:text-[22px] lg:text-[28px] font-Poppins font-thin">{text}</p>
      <div className="text-white/50 text-[22px] md:text-[24px] lg:text-[28px]">
        {Icon}
      </div>
    </div>
  );
};

export default Capsule;
