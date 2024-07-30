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

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      <Navbar />
      <HeroSection />
      <Expertise />
      <WorkExperience />
      <Stack/>
      <Services />
      <ProjectsDisplaytext />
      <ProjectsPortfolio/>
      <GetInTouch />
      <AboutMe />
      <Footer />
    </div>
  );
}
