import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="mt-28 text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-light text-white max-md:mt-10 max-md:max-w-full font-Poppins text-center">
        Hey there, let me put your ideas together!
      </h1>
      <h1 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-light text-white text-opacity-50 max-md:max-w-full font-Poppins text-center">
        Each piece of idea becomes a unit
      </h1>
      <div className="mt-10 w-full max-w-[569px] aspect-[0.98] max-md:mt-10">
        <Image
          src="/HeroImage.png"
          alt="hero"
          width={569}
          height={569}
          layout="responsive"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;
