'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HighlightPlus from "../Components/HighlightPlus";

const GetInTouch = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Grid background wrapper */}
      <div 
        className="absolute inset-0 w-full h-[calc(100%+12rem)] md:h-[calc(100%+16rem)] lg:h-[calc(100%+24rem)]" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main content */}
      <div 
        ref={containerRef}
        className="w-full h-auto flex justify-center bg-transparent pt-12 sm:pt-16 md:pt-24 lg:pt-24 pb-12 sm:pb-16 md:pb-48 lg:pb-48"
      >
        <motion.div
          className="flex flex-col items-center px-5 text-center text-white relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            opacity,
            scale
          }}
        >
          <motion.h1 
            className="self-stretch w-full text-[40px] sm:text-[40px] md:text-[50px] lg:text-[80px] max-md:max-w-full"
            variants={itemVariants}
            style={{ y: headerY }}
          >
            Let me transform your&nbsp;
            <br className="hidden md:block" />
            ideas into
            <HighlightPlus>reality.</HighlightPlus>
          </motion.h1>

          <motion.p 
            className="mt-11 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extralight text-white text-opacity-50 max-md:mt-7 max-md:max-w-full"
            variants={itemVariants}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [50, -50])
            }}
          >
            The only bridge between you, your ideas, and reality is me.
            <br className="hidden md:block" />
            Please do well to get in touch with me and let&apos;s get things started.
          </motion.p>

          <motion.div
            className="flex gap-5 py-2.5 pr-3 pl-12 mt-10 text-2xl font-medium bg-violet-500 rounded-[50px] max-md:pl-5 cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -30]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
            }}
          >
            <p className="flex-auto my-auto font-light">Get In Touch</p>
            <div className="relative flex items-center justify-center bg-white rounded-full w-[60px] h-[60px]">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <ArrowRight className="w-8 h-8 text-black" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;