'use client'

import HeroSection from "./Sections/HeroSection";
import Navbar from "./Sections/Navbar";
import Expertise from "./Sections/Expertise";
import WorkExperience from "./Sections/WorkExperience";
import Stack from "./Sections/Stack";
import Services from "./Sections/Services";
import ProjectsDisplaytext from "./Sections/ProjectsDisplaytext";
import ProjectsPortfolio from "./Sections/ProjectsPortfolio";
import GetInTouch from "./Sections/GetInTouch";
import AboutMe from "./Sections/AboutMe";
import Footer from "./Sections/Footer";
// import ConstructionModal from "./Components/ConstructionModal";
import { useState, useRef, useEffect } from 'react';

// In Home component
export default function Home() {
  // const [showModal, setShowModal] = useState(true);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = portfolioRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activate when the section is at least 50% visible
        const isVisible = entry.intersectionRatio >= 0.5;
        setIsPortfolioVisible(isVisible);
      },
      {
        root: null,
        rootMargin: '-100px 0px', // Add some margin to trigger earlier
        threshold: [0.5] // Trigger at 50% visibility
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // const handleContinue = () => {
  //   setShowModal(false);
  // };

  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      {/* {showModal && <ConstructionModal onContinue={handleContinue} />} */}
      <div className={`transition-opacity duration-500 opacity-100`}>
        <Navbar />
        <HeroSection />
        <div id="expertise" className="relative"><Expertise /></div>
        <div id="work-experience"><WorkExperience /></div>
        <div id="tech-stack"><Stack/></div>
        <div id="services"><Services /></div>
        <div id="projects"><ProjectsDisplaytext /></div>
        <div id="portfolio" ref={portfolioRef}>
          <ProjectsPortfolio isVisible={isPortfolioVisible} />
        </div>
        <div id="get-in-touch"><GetInTouch /></div>
        <div id="about-me"><AboutMe /></div>
        <Footer />
      </div>
    </main>
  );
}
