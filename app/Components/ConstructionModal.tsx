import GlitchText from './GlitchText';
import Noise from './Noise';
import PortfolioLogo from './../../public/portfolio_logo.svg';
import Image from 'next/image';

const ConstructionModal = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-purple-500/[0.02]" />
      <Noise
        patternSize={100}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={8}
        patternAlpha={35}
      />
      {/* Development Pattern SVG */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dev-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M10 10h30v30h-30z" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M25 15l5 5-5 5M20 25l-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="25" cy="25" r="2" fill="currentColor"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dev-pattern)"/>
        </svg>
      </div>
      {/* Logo positioned in top left corner */}
      <div className="absolute top-4 left-4">
        <Image
          src={PortfolioLogo}
          alt="Portfolio Logo"
          width={50}
          height={50}
          className="opacity-75"
        />
      </div>
      <div className="relative max-w-2xl w-full mx-4">
        <div className="text-center space-y-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <GlitchText
                speed={2}
                enableShadows={true}
                enableOnHover={false}
                className="text-6xl md:text-7xl font-bold tracking-tight leading-relaxed"
              >
                Under Development
              </GlitchText>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
          </div>
          
          <p className="text-zinc-300 font-thin text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            This portfolio website is currently being built. Some features might be incomplete or not working as intended.
          </p>
          
          <button
            onClick={onContinue}
            className="mt-8 px-8 py-3 bg-purple-800/30 hover:bg-purple-700/30 border border-purple-600/30 rounded-lg text-white font-medium transition-all hover:scale-105 backdrop-blur-sm group flex items-center gap-2 mx-auto"
          >
            <span className="text-base">Enter Site</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionModal;