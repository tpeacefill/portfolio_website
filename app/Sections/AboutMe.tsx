import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 max-md:flex-col">
      <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-5 mt-72 max-md:mt-10 max-md:max-w-full">
          <div className="text-4xl font-light text-center text-white text-opacity-50 max-md:max-w-full">
            About Me
          </div>
          <div className="mt-20 text-2xl text-white font-light max-md:mt-10 max-md:max-w-full">
            Based in Accra, Ghana, with 4+ years of experience in
            <br />
            UI/UX Design & Front-end Development. A passionate
            <br />
            designer and developer with an appeal for aesthetics.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
