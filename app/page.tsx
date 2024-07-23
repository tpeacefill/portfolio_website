import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
      </div>
    </div>
  );
}
