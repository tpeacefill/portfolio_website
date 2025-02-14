"use client";

import React from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const WorkExperience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-auto flex justify-center bg-black py-24"
    >
      <div className="w-full max-w-screen-xl flex flex-col items-center px-4">
        <m.h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-Poppins font-light text-white mb-16">
          My years of experience
        </m.h1>

        <div className="relative w-full flex items-center justify-between">
          <m.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-opacity-50 text-[48px] sm:text-[64px] md:text-[96px] font-Poppins"
          >
            2020
          </m.h2>

          <m.div
            style={{ width }}
            className="absolute left-0 h-1 bg-gradient-to-r from-[#8a74ff] to-[#a099ff]"
          ></m.div>

          {[2021, 2022, 2023, 2024].map((year, index) => (
            <m.div
              key={year}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="absolute flex flex-col items-center"
              style={{ left: `${25 * (index + 1)}%` }}
            >
              <div className="w-4 h-4 rounded-full bg-[#8a74ff]"></div>
              <p className="text-white text-opacity-50 text-[20px] font-Poppins mt-2">
                {year}
              </p>
            </m.div>
          ))}

          <m.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-[48px] sm:text-[64px] md:text-[96px] font-Poppins"
          >
            2025
          </m.h2>
        </div>
      </div>
    </m.div>
  );
};

export default WorkExperience;
