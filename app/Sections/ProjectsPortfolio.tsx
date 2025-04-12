'use client'

import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
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
  projectsLength
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate dynamic values for animations
  const progress = (scrollYProgress - (index * 0.25)) * 4;
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  
  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-[98vw] mx-auto relative px-0 sm:px-2 md:px-4"
      style={{
        scale: 0.6 + (clampedProgress * 0.4),
        opacity: 0.3 + (clampedProgress * 0.7),
        y: 100 - (clampedProgress * 100),
        zIndex: projectsLength - index,
        marginTop: index === 0 ? '0' : '-100px'
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
                  width: `${clampedProgress * 100}%`
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
  const [scrollY, setScrollY] = useState(0);
  
  // Smoothed scroll progress using Framer Motion's useSpring
  const smoothProgress = useSpring(0, { 
    stiffness: 50, 
    damping: 20, 
    restDelta: 0.001 
  });

  // Project data
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

  // Set up the section height
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // This will determine the overall scroll distance
        sectionHeight.current = window.innerHeight * 5;
        containerRef.current.style.height = `${sectionHeight.current}px`;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle scroll with improved smoothness
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      // Store raw scroll position
      setScrollY(window.scrollY);
      
      // Calculate progress based on how far the section has been scrolled
      const totalScrollDistance = sectionHeight.current - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      
      // Update the smooth spring animation
      smoothProgress.set(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [smoothProgress]);

  return (
    <div 
      ref={containerRef}
      className="relative bg-black"
      style={{ 
        height: '500vh' // Ensure enough scroll space
      }}
    >
      {/* Sticky container for portfolio content */}
      <div 
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Vertical layout for small screens */}
        <div className="md:hidden max-w-[2000px] w-full mx-auto relative pt-20 pb-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              scrollYProgress={smoothProgress.get()}
              projectsLength={projects.length}
            />
          ))}
        </div>

        {/* Horizontal layout for medium screens and above - PROPERLY CENTERED */}
        <div className="hidden md:block h-screen w-full overflow-hidden">
          <div className="h-full flex items-center justify-center relative">
            {projects.map((project, index) => {
              // Get smooth progress from spring animation
              const progress = smoothProgress.get();
              const totalCards = projects.length;
              
              // Calculate total scroll distance as percentage of viewport
              // The total travel needs to move from first card centered to last card centered
              const totalTravelDistance = (totalCards - 1) * 100;
                            
              // Apply the scroll progress to determine current position
              // When progress is 0, we should see first card (index 0) centered
              // When progress is 1, we should see last card (index = totalCards-1) centered
              const positionOffset = progress * totalTravelDistance;
              
              // Calculate the target position for this card
              // For the first card (index 0):
              //   When progress = 0: position will be 0 (centered)
              //   When progress = 1: position will be -totalTravelDistance (far left)
              // For the last card (index = totalCards-1):
              //   When progress = 0: position will be +totalTravelDistance (far right)
              //   When progress = 1: position will be 0 (centered)
              const xPosition = (index * 100) - positionOffset;
              
              // Calculate how close this card is to the center
              // When a card is at position 0, it's perfectly centered
              const distanceFromCenter = Math.abs(xPosition) / 80;
              const clampedDistance = Math.min(distanceFromCenter, 1);
              
              // Scale and opacity based on distance from center
              const scale = 1 - (clampedDistance * 0.3);
              const opacity = 1 - (clampedDistance * 0.7);
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-[80vw] max-w-[1000px]"
                  style={{
                    left: '50%',
                    x: `calc(${xPosition}% - 40vw)`, // Properly center the card
                    scale: Math.max(0.7, scale),
                    opacity: Math.max(0.3, opacity),
                    zIndex: 10 - Math.round(clampedDistance * 5),
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
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
                            style={{
                              width: `${Math.max(0, 100 - (clampedDistance * 100))}%`
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.16, 1, 0.3, 1]
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

        {/* Progress visualization (optional) */}
        <div className="absolute bottom-4 right-4 text-white/50 text-sm">
          {Math.round(smoothProgress.get() * 100)}%
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;