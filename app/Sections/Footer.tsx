'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/peacefill-tawiah/"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/TPeacefill"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
      href: "https://www.instagram.com/tpeacefill/"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      href: "https://github.com/tpeacefill"
    }
  ];

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
              {socialLinks.map((social, index) => (
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
                    className="cursor-pointer text-white opacity-50 hover:opacity-90 transition-all duration-300"
                  >
                    {social.icon}
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white opacity-50">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM9 9h6v2H9V9zm0 4h6v2H9v-2z" clipRule="evenodd" />
                </svg>
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