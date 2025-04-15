'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[80px] flex items-center justify-center fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/portfolio_logo.svg" alt="logo" width={40} height={40} />
          <p className="hidden sm:block text-white  text-[16px] font-normal font-weight-500">
            Peacefill Tawiah
          </p>
        </div>
        <button 
          onClick={onOpenModal}
          className="w-40 h-11 rounded-full bg-gradient-to-r from-[#8A74FF] via-[#1A1632] to-[#8A74FF] p-[1px]"
        >
          <div className="flex items-center justify-center h-full w-full bg-black rounded-full">
            <span className="text-white  text-[15px] font-normal">
              Get In Touch
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
