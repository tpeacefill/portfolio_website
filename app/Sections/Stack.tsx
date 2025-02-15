'use client'

import React from "react";
import Capsule from "../Components/Capsule";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiFigma, SiHtml5, SiGit, SiFirebase, SiJavascript, SiTailwindcss, SiCss3 } from '@icons-pack/react-simple-icons';

const Stack = () => {
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtextVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full h-auto flex justify-center bg-black mb-32 md:mb-64 overflow-hidden relative">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full h-auto max-w-screen-xl flex flex-col px-4 relative">
        <div className="flex flex-col items-center px-5 text-5xl text-white">
          <motion.p 
            className="max-md:max-w-full text-[32px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-Poppins text-center mb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            Leveraging cutting-edge technologies&nbsp;
            <br className="hidden md:block" />
            to build exceptional digital experiences.
          </motion.p>
          
          <motion.span 
            className="text-violet-500 max-md:max-w-full text-[32px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-Poppins mb-16 max-sm:mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={subtextVariants}
          >
            Transforming ideas into powerful solutions.
          </motion.span>

          <div className="flex w-full min-w-[1170px] h-[310px] flex-col justify-center items-center md:min-w-[980px] sm:min-w-[980px]">
            <div className="flex w-full flex-row mb-14 items-center justify-center">
              <Capsule
                text="React"
                width="sm:139px md:179px lg:219px"
                position="relative"
                rotation={15.4}
                Icon={
                  <SiReact 
                    className="w-[22px] h-[22px] sm:w-[22px] sm:h-[22px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px] transition-colors duration-300"
                  />
                }
              />

              <Capsule
                text="Next.js"
                width="sm:139px md:179px lg:219px"
                position="relative"
                rotation={25.46}
                Icon={
                  <SiNextdotjs 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px] transition-colors duration-300"
                  />
                }
              />

              <Capsule
                text="TypeScript"
                width="sm:159px md:199px lg:239px"
                position="relative"
                rotation={-12.5}
                Icon={
                  <SiTypescript 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="Figma"
                width="sm:139px md:179px lg:219px"
                position="relative"
                rotation={18.7}
                Icon={
                  <SiFigma 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="HTML"
                width="sm:132px md:152px lg:172px"
                position="relative"
                rotation={0}
                Icon={
                  <SiHtml5 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="Git"
                width="sm:112px md:132px lg:152px"
                position="relative"
                rotation={-8.2}
                Icon={
                  <SiGit 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />
            </div>

            <div className="flex w-full flex-row items-center justify-center">
              <Capsule
                text="Firebase"
                width="sm:149px md:169px lg:189px"
                position="relative"
                rotation={7.8}
                Icon={
                  <SiFirebase 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="JavaScript"
                width="sm:159px md:179px lg:219px"
                position="relative"
                rotation={-5.2}
                Icon={
                  <SiJavascript 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="Tailwind"
                width="sm:149px md:169px lg:189px"
                position="relative"
                rotation={-6.5}
                Icon={
                  <SiTailwindcss 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="CSS"
                width="sm:122px md:142px lg:162px"
                position="relative"
                rotation={10.5}
                Icon={
                  <SiCss3 
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[31px] lg:h-[31px]"
                  />
                }
              />

              <Capsule
                text="React Native"
                width="sm:179px md:219px lg:259px"
                position="relative"
                rotation={-7.3}
                Icon={
                  <SiReact 
                    className="w-[22px] h-[22px] sm:w-[22px] sm:h-[22px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px]"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;