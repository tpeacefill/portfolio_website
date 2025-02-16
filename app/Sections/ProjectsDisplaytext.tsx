'use client'
import React from "react";
import { motion } from "framer-motion";

const ProjectsDisplaytext = () => {
  return (
    <div className="overflow-hidden w-full relative py-10">
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

          .gradient-text-1 {
            background: linear-gradient(45deg, #8A74FF, #C4B5FF);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 8s ease infinite, marquee 20s linear infinite;
          }

          .gradient-text-2 {
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 8s ease infinite, marquee 20s linear infinite;
          }

          .gradient-text-3 {
            background: linear-gradient(45deg, #6C55E0, #8A74FF);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 8s ease infinite, marquee 20s linear infinite;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }

          .marquee-inner {
            display: flex;
            white-space: nowrap;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          .marquee span {
            margin-right: 50px;
            transition: transform 0.3s ease;
          }

          .marquee span:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <motion.div 
        className="marquee-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="marquee">
          <span className="gradient-text-1 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light cursor-default">PROJECTS</span>
          <span className="gradient-text-2 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light cursor-default">PROJECTS</span>
          <span className="gradient-text-3 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light cursor-default">PROJECTS</span>
        </div>
        <div className="marquee">
          <span className="gradient-text-1 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light cursor-default">PROJECTS</span>
          <span className="gradient-text-2 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light cursor-default">PROJECTS</span>
          <span className="gradient-text-3 text-[88px] sm:text-[88px] md:text-[108px] lg:text-[128px] font-Poppins font-light cursor-default">PROJECTS</span>
        </div>
      </motion.div>

      {/* Gradient Overlay for Smooth Edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default ProjectsDisplaytext;