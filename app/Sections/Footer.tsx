'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Twitter, Instagram, Github, Copyright } from "lucide-react";

const Footer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

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

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black/10"
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-5" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF 0.5px, transparent 0.5px), linear-gradient(to right, #8A74FF 0.5px, transparent 0.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <motion.div 
        className="w-full h-auto flex justify-center bg-transparent py-16"
        style={{ opacity, y }}
      >
        <div className="w-full max-w-screen-xl px-6">
          <motion.div 
            className="flex flex-col items-center space-y-12"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand and Contact Section */}
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/portfolio_logo.svg"
                  alt="logo"
                  width={48}
                  height={48}
                  className="animate-pulse"
                />
                <h2 className="text-white text-opacity-90 text-xl font-light">
                  Peacefill Tawiah
                </h2>
              </div>
              
              <div className="text-white text-opacity-60 space-y-2 mb-8">
                <p className="text-sm font-light hover:text-opacity-90 transition-all">
                  peacefilltawiah123@gmail.com
                </p>
                <p className="text-sm font-light hover:text-opacity-90 transition-all">
                  +(233) 550 745 627
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-8"
              variants={fadeInUp}
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/peacefill-tawiah/" },
                { icon: Twitter, href: "https://x.com/TPeacefill" },
                { icon: Instagram, href: "https://www.instagram.com/tpeacefill/" },
                { icon: Github, href: "https://github.com/tpeacefill" }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    className="cursor-pointer"
                  >
                    <social.icon 
                      size={24}
                      className="text-white opacity-50 hover:opacity-90 transition-all duration-300" 
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Copyright Section */}
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Copyright size={16} className="text-white opacity-50" />
                <p className="text-sm text-white text-opacity-50 font-light">
                  2024 Peacefill Tawiah
                </p>
              </div>
              <p className="text-sm text-white text-opacity-50 font-light max-w-md">
                PT is a personal brand by Peacefill Tawiah.
                Newly curated with a Logo as trademark to be registered.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;