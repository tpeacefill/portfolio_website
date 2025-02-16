'use client'

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileDown } from "lucide-react";

const AboutMe: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for scroll-based animations
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <div 
        className="absolute inset-0 w-full h-[calc(100%+12rem)]" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div 
        className="w-full h-auto flex justify-center bg-transparent pt-24 pb-24"
        style={{ opacity }}
      >
        <div className="w-full max-w-screen-xl flex px-4">
          <div className="flex w-full flex-col-reverse md:flex-row md:justify-between md:items-center gap-12 md:gap-8">
            <motion.div 
              className="flex flex-col w-full md:w-[59%] px-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ y: textY }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="font-light text-left text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white">
                  About <span className="text-white">Me</span>
                </h1>
              </motion.div>
              
              <motion.div 
                className="border-t border-white border-opacity-50 mt-4 mb-8 w-24"
                variants={fadeInUp}
              />

              <motion.div 
                className="relative"
                variants={fadeInUp}
              >
                <p className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-thin text-white leading-relaxed">
                  Based in <span className="text-gray-400">Accra, Ghana</span>, with{" "}
                  <span className="text-gray-400">4+ years</span> of experience in{" "}
                  <span className="text-gray-400">UI/UX Design & Front-end Development</span>.
                </p>
                <p className="mt-6 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-thin text-white leading-relaxed">
                  A passionate designer and developer with an appeal for aesthetics and good user experience.
                </p>
              </motion.div>

              {/* Stats section */}
              <motion.div 
                className="grid grid-cols-2 gap-8 mt-12"
                variants={fadeInUp}
              >
                <div className="flex flex-col">
                  <span className="text-white text-4xl md:text-5xl font-light">4+</span>
                  <span className="text-gray-400 mt-2 text-sm md:text-base">Years of Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-4xl md:text-5xl font-light">10+</span>
                  <span className="text-gray-400 mt-2 text-sm md:text-base">Projects Completed</span>
                </div>
              </motion.div>

              {/* Resume Download Button */}
              <motion.div
                variants={fadeInUp}
                className="mt-12"
              >
                <motion.a
                  href="/Resume.pdf" 
                  onClick={(e) => {
                    // Verify file exists first
                    fetch('/Resume.pdf')
                      .then(response => {
                        if (response.status === 404) {
                          e.preventDefault();
                          alert('Resume file is currently unavailable. Please try again later.');
                        }
                      })
                      .catch(error => {
                        e.preventDefault();
                        alert('Unable to download resume. Please try again later.');
                      });
                  }}
                  download="Resume.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-white text-lg font-light">Download Resume</span>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <FileDown className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image container with animations */}
            <motion.div 
              className="relative px-5 lg:px-0 md:w-[41%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{
                scale: imageScale,
                rotate: imageRotate
              }}
            >
              <motion.div
                className="relative z-10"
                variants={imageAnimation}
              >
                <Image
                  src="/profile.svg"
                  alt="about-me"
                  width={445}
                  height={595}
                  className="rounded-xl aspect-[0.75] w-full object-cover"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-violet-500 opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-violet-500 opacity-50" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;