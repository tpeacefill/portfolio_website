'use client'

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  year: string;
  category: string;
  title: string;
  gradient: string;
  index: number;
  scrollYProgress: number;
  projectsLength: number;
}

const CARD_SPACING = 70;

const ProjectCard: React.FC<ProjectCardProps> = ({
  year,
  category,
  title,
  gradient,
  index,
  scrollYProgress,
  projectsLength
}) => {
  const [yPosition, setYPosition] = useState(0); // Initialize with 0
  const [windowHeight, setWindowHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set window height after component mounts
    setWindowHeight(window.innerHeight);
    setYPosition(window.innerHeight);

    // Optional: Handle window resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (index === 0 || !windowHeight) return;
    
    const calculatePosition = () => {
      const startScroll = 0.1 + ((index - 1) * 0.2);
      const endScroll = Math.min(0.95, 0.3 + ((index - 1) * 0.2));
      
      if (scrollYProgress < startScroll) {
        setYPosition(windowHeight);
      } else if (scrollYProgress > endScroll) {
        setYPosition(index * CARD_SPACING);
      } else {
        const progress = (scrollYProgress - startScroll) / (endScroll - startScroll);
        const newPosition = windowHeight - (progress * (windowHeight - (index * CARD_SPACING)));
        setYPosition(newPosition);
      }
    };

    calculatePosition();
  }, [scrollYProgress, index, windowHeight]);

  const CardContent = () => (
    <div
      className="flex flex-col px-8 py-6 text-white rounded-xl max-md:px-5"
      style={{ 
        background: gradient
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-5 justify-between font-extralight max-md:flex-wrap">
        <p className="text-white font-thin text-[16px] md:text-[18px] lg:text-[20px]">{year}</p>
        <p className="text-white font-thin text-[16px] md:text-[18px] lg:text-[20px]">{category}</p>
      </div>
      <div className="flex items-center mt-2 justify-between">
        <h1 className="text-[24px] md:text-[42px] lg:text-[64px] font-thin">{title}</h1>
        <motion.div
          animate={{ rotate: isHovered ? -45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="ml-4 w-8 h-8 lg:w-16 lg:h-16 text-white" strokeWidth={1.2} />
        </motion.div>
      </div>
      <div className="shrink-0 mt-0 border-t border-white border-opacity-70" style={{ height: "0.5px" }} />
      <div className="shrink-0 mt-3 bg-white h-[640px]" />
    </div>
  );

  if (index === 0) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "98%",
          zIndex: 0,
        }}
      >
        <CardContent />
      </div>
    );
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        width: "98%",
        zIndex: index,
        y: yPosition,
      }}
      initial={false}
      animate={{ y: yPosition }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <CardContent />
    </motion.div>
  );
};

const ProjectsPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setCurrentProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  const projects = [
    { 
      year: "2024", 
      category: "Mobile", 
      title: "GridGuard", 
      gradient: "linear-gradient(135deg, #11D8F9, #0066FF)"
    },
    { 
      year: "2024", 
      category: "Web App", 
      title: "Airstate", 
      gradient: "linear-gradient(135deg, #AE1729, #FF4D4D)"
    },
    { 
      year: "2025", 
      category: "Web", 
      title: "VitalNeoCare", 
      gradient: "linear-gradient(135deg, #366D61, #2AAF74)"
    },
    { 
      year: "2025", 
      category: "Web", 
      title: "Debuggers", 
      gradient: "linear-gradient(135deg, #027B7F, #00B4D8)"
    }
  ];

  return (
    <div className="w-full h-[300vh] flex justify-center bg-black mb-48 mt-24 relative" ref={containerRef}>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      <div className="w-full max-w-screen-xl flex flex-col px-4 sticky top-0 h-screen">
        <div className="relative h-full flex justify-center items-start pt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              scrollYProgress={currentProgress}
              projectsLength={projects.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;