import React from 'react'

const GetInTouch = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-5 text-center text-white max-w-[874px]">
        <div className="self-stretch w-full text-7xl max-md:max-w-full max-md:text-4xl">
          Let me transform your
          <br />
          ideas into reality.
        </div>
        <div className="mt-11 text-xl font-light text-white text-opacity-50 max-md:mt-10 max-md:max-w-full">
          The only bridge between you and your ideas and reality is me. <br />
          Please do well to get in touch with me and let’s get this started.
        </div>
        <div className="flex gap-5 py-2.5 pr-3 pl-12 mt-10 text-2xl font-medium bg-violet-500 rounded-[50px] max-md:pl-5">
          <div className="flex-auto my-auto">Get In Touch</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1cbd93aa455e2fd8f98f8a9813e5904f27567766770890554a6341dafcd20a8?apiKey=66a94ed6cd6e4c1eabac5d438e3a12c1&&apiKey=66a94ed6cd6e4c1eabac5d438e3a12c1"
            className="shrink-0 aspect-square w-[60px]"
          />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch