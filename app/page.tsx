import HeroSection from "./Sections/HeroSection";
import Navbar from "./Sections/Navbar";
import Expertise from "./Sections/Expertise";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      <Navbar />
      <HeroSection />
      <Expertise />
    </div>
  );
}
