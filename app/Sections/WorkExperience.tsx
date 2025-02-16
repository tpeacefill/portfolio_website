'use client'


import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const WorkExperience: React.FC = () => {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize particles with random positions
      const newParticles = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticles(newParticles);
    }
  }, []);

  return (
    <div className="w-full h-auto flex justify-center bg-black pb-48 relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <m.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="w-full h-auto max-w-screen-xl flex flex-col px-4 relative z-10">
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <h1 className="w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] lg:mb-24 md:mb-24 font-Poppins font-light text-white relative">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            Years of Professional
          </m.span>
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            Growth & Excellence
          </m.span>
        </h1>

        {/* Show this on medium and small screens */}
        <div className="lg:hidden flex flex-col items-center mt-24 w-full">
          <m.h1 
            className="text-white text-opacity-50 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2020
          </m.h1>
          
          {/* Vertical Road Timeline Container */}
          <div className="relative flex flex-col items-center w-full h-[400px]">
            {/* Vertical Road SVG */}
            <m.svg 
              width="100" 
              height="400" 
              viewBox="0 0 100 400" 
              className="absolute"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Road Outer Edge (shadow) */}
              <m.path
                d="M 50,0 C 70,100 30,200 50,300 C 70,400 50,400 50,400"
                fill="none"
                stroke="rgba(0,0,0,0.5)"
                strokeWidth="24"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Road Base */}
              <m.path
                d="M 50,0 C 70,100 30,200 50,300 C 70,400 50,400 50,400"
                fill="none"
                stroke="#2A2A42"
                strokeWidth="20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Road Edges */}
              <m.path
                d="M 50,0 C 70,100 30,200 50,300 C 70,400 50,400 50,400"
                fill="none"
                stroke="#8a74ff66"
                strokeWidth="22"
                strokeDasharray="2,20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              {/* Center Line */}
              <m.path
                d="M 50,0 C 70,100 30,200 50,300 C 70,400 50,400 50,400"
                fill="none"
                stroke="#8a74ff"
                strokeWidth="2"
                strokeDasharray="10,10"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </m.svg>

            {/* Timeline Points */}
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
                  <p className="text-white text-opacity-50 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-Poppins font-thin absolute right-full mr-20">
                    2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          <m.h1 
            className="text-white text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins mt-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2024
          </m.h1>
        </div>

        {/* Show this on large screens */}
        <div className="hidden lg:flex flex-col items-center justify-between mt-24 w-full lg:flex-row mb-56">
          <m.h1 
            className="text-white text-opacity-50 text-[128px] font-Poppins -ml-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2021
          </m.h1>
          
          {/* Horizontal Road Timeline Container */}
          <div className="relative flex flex-col items-center justify-center w-full h-32">
            {/* Horizontal Road SVG */}
            <m.svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 128" 
              className="absolute"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Road Outer Edge (shadow) */}
              <m.path
                d="M 100,64 C 250,64 300,32 500,64 C 700,96 750,64 900,64"
                fill="none"
                stroke="rgba(0,0,0,0.5)"
                strokeWidth="24"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Road Base */}
              <m.path
                d="M 100,64 C 250,64 300,32 500,64 C 700,96 750,64 900,64"
                fill="none"
                stroke="#2A2A42"
                strokeWidth="20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Road Edges */}
              <m.path
                d="M 100,64 C 250,64 300,32 500,64 C 700,96 750,64 900,64"
                fill="none"
                stroke="#8a74ff66"
                strokeWidth="22"
                strokeDasharray="2,20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              {/* Center Line */}
              <m.path
                d="M 100,64 C 250,64 300,32 500,64 C 700,96 750,64 900,64"
                fill="none"
                stroke="#8a74ff"
                strokeWidth="2"
                strokeDasharray="10,10"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </m.svg>

            {/* Timeline Points */}
            <m.div 
              className="absolute w-[26px] h-[26px] bg-[#8a74ff] rounded-full left-[20%] flex items-center justify-center -translate-x-1/2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <m.div 
                className="absolute w-0.5 h-[70px] bg-[#8a74ff] bottom-[-70px]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
              <m.p 
                className="text-white text-opacity-50 text-[20px] font-Poppins font-thin absolute top-[100px] -ml-0 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                2022
              </m.p>
            </m.div>

            <m.div 
              className="absolute w-[26px] h-[26px] bg-[#8a74ff] rounded-full left-[50%] flex items-center justify-center -translate-x-1/2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <m.div 
                className="absolute w-0.5 h-[70px] bg-[#8a74ff] top-[-70px]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              />
              <m.p 
                className="text-white text-opacity-50 text-[20px] font-Poppins font-thin absolute bottom-[100px] -ml-0 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                2023
              </m.p>
            </m.div>

            <m.div 
              className="absolute w-[26px] h-[26px] bg-[#8a74ff] rounded-full left-[80%] flex items-center justify-center -translate-x-1/2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <m.div 
                className="absolute w-0.5 h-[70px] bg-[#8a74ff] bottom-[-70px]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              />
              <m.p 
                className="text-white text-opacity-50 text-[20px] font-Poppins font-thin absolute top-[100px] -ml-1 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                2024
              </m.p>
            </m.div>
          </div>

          <m.h1 
            className="text-white text-[128px] font-Poppins"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2025
          </m.h1>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;