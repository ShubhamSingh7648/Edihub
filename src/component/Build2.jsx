import React from 'react';

// We accept a new prop: `inView`. It will be true or false.
const Build2 = ({ inView }) => {
  const lines = [
    "Build Your",
    "Portfolio."
  ];

  const subtitle = "create and conquere";

  let wordCount = 0;
  return (
    <div>
      <div className="flex flex-col items-start gap-y-6">
        <h1 className="text-7xl md:text-9xl font-bold">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex flex-wrap gap-x-3 md:gap-x-6">
              {line.split(" ").map((word, wordIndex) => {
                const animationDelay = `${wordCount * 0.19}s`;
                wordCount++;
                return (
                  <div key={wordIndex} className="overflow-hidden">
                    <span
                      className={`inline-block ${inView ? 'animate-rise' : 'opacity-0'}`}
                      style={{ animationDelay: inView ? animationDelay : '0s' }}
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
          className={`flex items-center gap-x-8 w-full ${inView ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: inView ? `${wordCount * 0.19}s` : '0s' }}
        >
          <p className="text-xl text-gray-400">{subtitle}</p>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Build2;
