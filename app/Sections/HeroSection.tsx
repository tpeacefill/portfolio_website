'use client'

import React, { useState } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Terminal, Layout, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  
  // Adjusted scroll animations for different screen sizes
  const opacity = useTransform(scrollY, 
    [0, 100, 200], 
    [1, 0.8, 0]
  );
  
  const y = useTransform(scrollY, 
    [0, 100, 200], 
    [0, 50, 100]
  );
  
  const scale = useTransform(scrollY, 
    [0, 100, 200], 
    [1, 0.95, 0.9]
  );

  // Card configurations with more concise code examples
  const cards = [
    {
      icon: <Layout className="text-[#8A74FF]" />,
      title: "React",
      code: `const Button = () => {
  const [isHovered, setIsHovered] = 
    useState(false);
    
  return (
    <button
      className={\`btn \${
        isHovered ? 'hover' : ''
      }\`}
    >
      Click me
    </button>
  );
};`,
      hoverPosition: { x: '-80%', y: '-70%' } // Top-left
    },
    {
      icon: <Code2 className="text-[#8A74FF]" />,
      title: "Tailwind",
      code: `.container {
  @apply flex flex-col
  items-center
  justify-center
  min-h-screen
  bg-gradient-to-b;
}`,
      hoverPosition: { x: 0, y: '80%' } // Bottom
    },
    {
      icon: <Terminal className="text-[#8A74FF]" />,
      title: "TypeScript",
      code: `interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({ 
  title,
  onClick 
}: Props) => (
  <button onClick={onClick}>
    {title}
  </button>
);`,
      hoverPosition: { x: '80%', y: '-70%' } // Top-right
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div 
          style={{ opacity }}
          className="pt-32"
        >
          {/* Top bar */}
          <m.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-12 lg:mb-20"
          >
            <m.div 
              className="flex items-center space-x-3 sm:space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white/80 font-light text-base sm:text-lg">Available for work</span>
              <div className="h-2 w-2 rounded-full bg-[#8A74FF] animate-pulse" />
            </m.div>
          </m.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left content */}
            <m.div
              style={{ y }}
              className="order-2 lg:order-1"
            >
              <m.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 sm:mb-8"
              >
                Frontend Engineer
                <span className="text-[#8A74FF]">.</span>
              </m.h1>
              
              <m.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-white/60 font-thin max-w-lg mb-8 sm:mb-10"
              >
                Crafting immersive digital experiences through clean code and modern design principles.
              </m.p>

              <m.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white/90 transition-all"
              >
                <span>Let&apos;s collaborate</span>
                <m.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowUpRight size={20} />
                </m.div>
              </m.button>
            </m.div>

            {/* Card Visualization */}
            <m.div
              style={{ scale }}
              className="order-1 lg:order-2 w-full max-w-xl mx-auto lg:mx-0"
            >
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] lg:mt-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Cards Container */}
                  <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px]">
                    {cards.map((card, index) => (
                      <m.div
                        key={index}
                        className="absolute top-1/2 left-1/2 w-[260px] sm:w-[280px] md:w-[300px]"
                        style={{
                          zIndex: isHovered ? (cards.length - index) : index
                        }}
                        animate={{
                          x: isHovered 
                            ? `calc(${card.hoverPosition.x} - 50%)` 
                            : '-50%',
                          y: isHovered 
                            ? `calc(${card.hoverPosition.y} - 50%)` 
                            : '-50%',
                          rotate: isHovered ? 0 : -index * 2,
                          scale: isHovered 
                            ? 1 
                            : 1 - index * (window.innerWidth < 768 ? 0.03 : 0.05)
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="bg-black/80 backdrop-blur-xl border border-[#8A74FF]/20 rounded-lg overflow-hidden shadow-xl">
                          {/* Title bar */}
                          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/5">
                            <div className="flex gap-1 sm:gap-1.5">
                              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F57]" />
                              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#28C840]" />
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-white/60 text-xs sm:text-sm">
                              {card.icon}
                              <span>{card.title}</span>
                            </div>
                          </div>
                          {/* Code content */}
                          <m.div 
                            className="p-3 sm:p-4 overflow-x-auto"
                            initial={false}
                            animate={{
                              height: isHovered 
                                ? window.innerWidth < 768 
                                  ? '180px' 
                                  : '200px'
                                : '160px'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <pre className="text-white/80 text-xs sm:text-sm font-mono">
                              <code>{card.code}</code>
                            </pre>
                          </m.div>
                        </div>
                      </m.div>
                    ))}
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </m.div>

        {/* Scroll indicator */}
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ opacity: useTransform(scrollY, [0, 50], [1, 0]) }}
          className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-1 rounded-full bg-white/50" />
          </m.div>
        </m.div>
      </div>
    </div>
  );
};

export default HeroSection;