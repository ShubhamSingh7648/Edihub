import React from "react";

// This component handles your front-page animation
const ShowAnimation = () => {
  const lines = [
    "show smooth &",
    "Get hired."
  ];

  const subtitle = "The best way to create portfolio";

  let wordCount = 0;

  return (
    <div className="flex flex-col items-start gap-y-6">
      <h1 className="text-7xl md:text-9xl font-bold">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap gap-x-3 md:gap-x-6">
            {line.split(" ").map((word, wordIndex) => {
              const animationDelay = `${wordCount * 0.29}s`;
              wordCount++;
              return (
                <div key={wordIndex} className="overflow-hidden">
                  <span
                    className="inline-block animate-rise"
                    style={{ animationDelay }}
                  >
                    {word}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </h1>

      <div
        className="flex items-center gap-x-8 animate-fade-in w-full"
        style={{ animationDelay: `${wordCount * 0.19}s` }}
      >
        <p className="text-xl text-gray-400">{subtitle}</p>
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">
          Get started
        </button>
      </div>
    </div>
  );
};

export default ShowAnimation;
