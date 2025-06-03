'use client'

import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, useSpring, useTransform, useScroll, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  year: string;
  category: string;
  title: string;
  gradient: string;
  index: number;
  scrollYProgress: number;
  projectsLength: number;
  link: string;
}

interface ProjectsPortfolioProps {
  isVisible: boolean;
}

const getImagePath = (title: string) => {
  switch(title) {
    case "GridGuard":
      return "/GridGuard.svg";
    case "Airstate":
      return "/airstate.svg";
    case "VitalNeoCare":
      return "/vitalneocare.svg";
    default:
      return `/${title}.svg`;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  year,
  category,
  title,
  gradient,
  index,
  scrollYProgress,
  projectsLength,
  link
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(cardScrollProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(cardScrollProgress, [0, 0.5, 1], [50, 0, -50]);
  const scale = useTransform(cardScrollProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-[98vw] mx-auto relative px-0 sm:px-2 md:px-4 mb-8"
      style={{
        scale: scale,
        opacity: opacity,
        y: y,
        zIndex: projectsLength - index,
      }}
    >
      <div
        className="rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: gradient,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="p-3 sm:p-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-3 sm:mb-4">
            <div>
              <p className="text-white text-lg sm:text-xl font-thin mb-1 sm:mb-2">{category}</p>
              <h2 className="text-white text-3xl sm:text-4xl font-light tracking-tight">{title}</h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -45 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-2 sm:p-3 rounded-full cursor-pointer"
              onClick={() => window.open(link, '_blank')}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={1.5} />
            </motion.div>
          </div>
          
          <div className="mt-3 sm:mt-4 rounded-2xl overflow-hidden">
            <div 
              className="relative aspect-[16/9] w-full h-full"
              style={{
                background: 'linear-gradient(135deg, #2A2A2A, #0A0A0A)'
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={getImagePath(title)}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, (max-width: 1280px) 85vw, 80vw"
                  className="object-contain"
                  loading="eager"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <p className="text-white text-lg sm:text-xl font-thin">{year}</p>
            <div className="h-2 w-24 sm:w-28 bg-transparent border border-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ 
                  width: `${scrollYProgress * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ isVisible }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionHeight = useRef(0);
  const rafId = useRef<number>();
  const [currentProgress, setCurrentProgress] = useState(0);
  
  // Smoothed scroll progress with optimized spring settings
  const smoothProgress = useSpring(0, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Memoize project data to prevent re-creation
  const projects = useMemo(() => [
    { 
      year: "2024", 
      category: "Mobile", 
      title: "GridGuard", 
      gradient: "linear-gradient(135deg, #11D8F9, #0066FF)",
      link: "https://github.com/3dots-Studios/GridGuard1.1.git"
    },
    { 
      year: "2024", 
      category: "Web App", 
      title: "Airstate", 
      gradient: "linear-gradient(135deg, #AE1729, #FF4D4D)",
      link: "https://airstatefinder.web.app/"
    },
    { 
      year: "2025", 
      category: "Web", 
      title: "VitalNeoCare", 
      gradient: "linear-gradient(135deg, #366D61, #2AAF74)",
      link: "https://www.vitalneocare.com/"
    },
    { 
      year: "2025", 
      category: "Web", 
      title: "SynBio4ALL", 
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      link: "https://syn-bio4-all-new.vercel.app/"
    }
  ], []);

  // Memoized resize handler
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      if (window.innerWidth >= 768) {
        sectionHeight.current = window.innerHeight * 5;
        containerRef.current.style.height = `${sectionHeight.current}px`;
      } else {
        containerRef.current.style.height = 'auto';
      }
    }
  }, []);

  // Set up the section height
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Optimized scroll handler with RAF throttling
  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollDistance = sectionHeight.current - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      
      // Update both the smooth progress and current progress
      smoothProgress.set(progress);
      setCurrentProgress(progress);
    });
  }, [smoothProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  // Memoized card calculation function
  const calculateCardProps = useCallback((index: number, progress: number) => {
    const totalCards = projects.length;
    const totalTravelDistance = (totalCards - 1) * 100;
    const positionOffset = progress * totalTravelDistance;
    const xPosition = (index * 100) - positionOffset;
    const distanceFromCenter = Math.abs(xPosition) / 80;
    const clampedDistance = Math.min(distanceFromCenter, 1);
    
    return {
      xPosition,
      scale: Math.max(0.7, 1 - (clampedDistance * 0.3)),
      opacity: Math.max(0.3, 1 - (clampedDistance * 0.7)),
      zIndex: 10 - Math.round(clampedDistance * 5),
      progressWidth: Math.max(0, 100 - (clampedDistance * 100))
    };
  }, [projects.length]);

  return (
    <div 
      ref={containerRef}
      className="relative bg-black"
    >
      {/* Container for portfolio content */}
      <div 
        className="w-full md:sticky md:top-0 md:left-0 md:h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Vertical layout for small screens */}
        <div className="md:hidden w-full">
          <div className="max-w-[98vw] mx-auto py-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                index={index}
                scrollYProgress={0}
                projectsLength={projects.length}
              />
            ))}
          </div>
        </div>

        {/* Horizontal layout for medium screens and above */}
        <div className="hidden md:block h-screen w-full overflow-hidden">
          <div className="h-full flex items-center justify-center relative">
            {projects.map((project, index) => {
              const progress = currentProgress;
              const cardProps = calculateCardProps(index, progress);
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-[80vw] max-w-[1000px] will-change-transform"
                  animate={{
                    x: `calc(${cardProps.xPosition}% - 40vw)`,
                    scale: cardProps.scale,
                    opacity: cardProps.opacity,
                  }}
                  style={{
                    left: '50%',
                    zIndex: cardProps.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    mass: 0.8
                  }}
                >
                  <div
                    className="rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      background: project.gradient,
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="p-6 relative z-10">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-white text-xl font-thin mb-2">{project.category}</p>
                          <h2 className="text-white text-4xl font-light tracking-tight">{project.title}</h2>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -45 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white p-3 rounded-full cursor-pointer"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ArrowRight className="w-6 h-6 text-black" strokeWidth={1.5} />
                        </motion.div>
                      </div>
                      
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <div 
                          className="relative aspect-[16/9] w-full h-full"
                          style={{
                            background: 'linear-gradient(135deg, #2A2A2A, #0A0A0A)'
                          }}
                        >
                          <div className="absolute inset-0 w-full h-full">
                            <Image 
                              src={getImagePath(project.title)}
                              alt={project.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, (max-width: 1280px) 85vw, 80vw"
                              className="object-contain"
                              loading="eager"
                              quality={100}
                              priority
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-white text-xl font-thin">{project.year}</p>
                        <div className="h-2 w-28 bg-transparent border border-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-white"
                            animate={{
                              width: `${cardProps.progressWidth}%`
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 25
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress visualization */}
        <div className="absolute bottom-4 right-4 text-white/50 text-sm hidden md:block">
          {Math.round(currentProgress * 100)}%
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;