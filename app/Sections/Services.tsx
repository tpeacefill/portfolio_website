'use client'
import React, { useRef, useState, useEffect, UIEvent } from "react";
import Image from "next/image";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null); // Reference to a card to get its width
  const [isEnd, setIsEnd] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  // Function to check if the div is within max-w-[1140px]
  const checkShowButton = () => {
    if (scrollRef.current && cardRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const shouldShowButton = window.innerWidth <= 1140 && containerWidth <= 1140;
      setShowButton(shouldShowButton);
    }
  };

  // Function to update the card width
  const updateCardWidth = () => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  };

  // Check window width on resize and update state accordingly
  useEffect(() => {
    const handleResize = () => {
      checkShowButton();
      updateCardWidth();
    };

    // Set initial button visibility and card width
    handleResize();

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scroll = () => {
    if (scrollRef.current) {
      if (isEnd) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { current } = scrollRef;
    if (current) {
      const isAtEnd = current.scrollWidth - current.scrollLeft === current.clientWidth;
      setIsEnd(isAtEnd);
    }
  };

  useEffect(() => {
    // Update button visibility on scrollRef div resize
    checkShowButton();
  }, [scrollRef.current?.offsetWidth]);

  return (
    <div className="w-full h-auto flex justify-center bg-black mb-48">
      <div className="w-full max-w-screen-xl flex flex-col px-4">
        <div className="flex flex-col px-5">
          <h1 className="w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-Poppins font-light text-white">
            I’ll be glad to be of your help
          </h1>
          <h1 className="mt-0.5 w-full text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-Poppins font-light text-white text-opacity-50">
            with the services I provide
          </h1>
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="self-center mt-40 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full ml-auto mr-auto overflow-x-auto overflow-y-hidden scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-5 max-md:flex-nowrap">
                {[
                  {
                    bgColor: "bg-violet-500",
                    bgImage: "url('/pattern1.svg')",
                    number: "01.",
                    title: "Web Application Development",
                    description:
                      "I can get your website or web application up and running with code. Maintaining usability and aesthetics.",
                  },
                  {
                    bgColor: "bg-zinc-500",
                    bgImage: "url('/pattern2.svg')",
                    number: "02.",
                    title: "UI/UX Design & Prototype",
                    description:
                      "Let me put your thoughts together in a design that looks visually appealing and solves a problem while creating a slick experience.",
                  },
                  {
                    bgColor: "bg-neutral-500",
                    bgImage: "url('/pattern3.svg')",
                    number: "03.",
                    title: "Mobile Application Development",
                    description:
                      "As part of the services I provide, I’m well vested into developing mobile app development with simple back-end integration.",
                  },
                  {
                    bgColor: "bg-neutral-600",
                    bgImage: "url('/pattern4.svg')",
                    number: "04.",
                    title: "Web Design Refactoring",
                    description:
                      "Elevate the web experience for your users when they visit your website or web application. Let’s make the old new.",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    ref={index === 0 ? cardRef : null} // Assign ref to the first card only
                    className="flex flex-col w-[270px] flex-shrink-0"
                  >
                    <div className={`flex flex-col grow justify-center w-full text-white rounded-xl ${card.bgColor} max-md:mt-8`}>
                      <div
                        className="flex relative flex-col px-4 py-9 w-full h-full rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: card.bgImage }}
                      >
                        <h1 className="relative text-[40px] font-normal font-Poppins text-white">
                          {card.number}
                        </h1>
                        <p className="relative mt-7 text-[24px] font-semibold text-white font-Poppins">
                          {card.title}
                        </p>
                        <p className="relative mt-8 text-[16px] text-white font-Poppins font-extralight">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {showButton && (
              <button
                onClick={scroll}
                className={`absolute top-1/2 transform -translate-y-1/2 right-4 bg-[#585858] text-black rounded-full p-3 ${isEnd ? "left-4 right-auto" : ""}`}
              >
                {isEnd ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 43" fill="none">
                    <path d="M21.0576 42.1155L24.3333 38.6059L7.01913 21.0578L24.3333 3.50968L21.0576 5.91278e-05L-0.000103058 21.0578L21.0576 42.1155Z" fill="white"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 43" fill="none">
                    <path d="M3.27564 0.884521L0 4.39414L17.3141 21.9422L0 39.4903L3.27564 42.9999L24.3334 21.9422L3.27564 0.884521Z" fill="white"/>
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
