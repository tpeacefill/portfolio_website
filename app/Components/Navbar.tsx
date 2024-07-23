import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black flex h-[80px] items-center justify-center">
      <div className="w-full max-w-screen-xl flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Image src="/portfolio_logo.svg" alt="logo" width={40} height={40} />
          <p className="hidden sm:block text-white font-Poppins text-[16px] font-normal font-weight-500">Peacefill Tawiah</p>
        </div>
        <button className="w-40 h-11 rounded-full bg-gradient-to-r from-[#8A74FF] via-[#1A1632] to-[#8A74FF] p-[1px]">
          <div className="flex items-center justify-center h-full w-full bg-black rounded-full">
            <span className="text-white font-Poppins text-[15px] font-normal">Get In Touch</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
