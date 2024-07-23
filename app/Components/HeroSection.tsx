import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='justify-center items-center flex flex-col'>
      <div className="mt-28 text-4xl max-md:mt-10 max-md:max-w-full">
        Hey there, let me put your ideas together!
      </div>
      <div className="mt-5 text-4xl text-white text-opacity-50 max-md:max-w-full">
        Each piece of idea becomes a unit
      </div>
      <Image src={"/HeroImage.png"} alt="hero" className="mt-16 max-w-full aspect-[0.98] w-[569px] max-md:mt-10" width={569} height={569}/>
    </div>
  );
}

export default HeroSection;
