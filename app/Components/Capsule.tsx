'use client'

import React from 'react';
import { motion } from 'framer-motion';

type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

interface CapsuleProps {
  text: string;
  Icon: JSX.Element;
  width?: string;
  position?: PositionType;
  rotation?: number;
}

const getBrandGradient = (techName: string): string => {
  const gradients: { [key: string]: string } = {
    'Figma': 'linear-gradient(45deg, #0ACF83, #1ABCFE, #A259FF, #F24E1E, #FF7262)',
    'Firebase': 'linear-gradient(45deg, #A52714, #F57C00, #FFA000, #FFCA28)',
    'CSS': 'linear-gradient(45deg, #0277BD, #1572B6)',
    'React': 'linear-gradient(45deg, #61DAFB, #61DAFB)',
    'Next.js': 'linear-gradient(45deg, #000000, #FFFFFF)',
    'TypeScript': 'linear-gradient(45deg, #3178C6, #3178C6)',
    'HTML': 'linear-gradient(45deg, #E44D26, #E44D26)',
    'Git': 'linear-gradient(45deg, #F34F29, #F34F29)',
    'JavaScript': 'linear-gradient(45deg, #F7DF1E, #F7DF1E)',
    'Tailwind': 'linear-gradient(45deg, #44A8B3, #44A8B3)',
    'React Native': 'linear-gradient(45deg, #61DAFB, #61DAFB)'
  };
  return gradients[techName] || 'linear-gradient(45deg, #FFFFFF, #FFFFFF)';
};

const getRandomDuration = () => {
  // Generate a random duration between 2.5 and 3.5 seconds
  return Math.random() * (3.5 - 2.5) + 2.5;
};

const Capsule: React.FC<CapsuleProps> = ({
  text,
  Icon,
  width = "auto",
  position = "relative",
  rotation = 0,
}) => {
  const animationDuration = React.useMemo(() => getRandomDuration(), []);

  return (
    <motion.div
      className="relative flex h-16 justify-center items-center px-4 gap-2 rounded-full m-1 cursor-pointer backdrop-blur-sm overflow-hidden"
      style={{ 
        width,
        position,
      }}
      animate={{
        y: [-8, 8],
        rotate: rotation,
      }}
      transition={{
        y: {
          duration: animationDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        rotate: {
          duration: 0,
          ease: "linear",
        }
      }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: getBrandGradient(text),
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-full bg-black/50" />
      </div>

      {/* Content container */}
      <div className="relative flex items-center gap-2">
        <p className="text-base md:text-xl lg:text-2xl font-thin text-white">
          {text}
        </p>

        <div className="transition-all duration-300">
          {Icon}
        </div>
      </div>
    </motion.div>
  );
};

export default Capsule;