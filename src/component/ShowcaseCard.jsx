import React from "react";
import { useInView } from 'react-intersection-observer';
import BuildPortfolio from "./BuildPortfolio.jsx";
import Build2 from "./Build2.jsx";

const ShowcaseCard = () => {
  // This hook gives us a `ref` and a boolean `inView`.
  // `ref` is attached to the element we want to watch.
  // `inView` becomes true when the element is on screen.
  // `triggerOnce: true` ensures the animation only runs once.
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Animation starts when 10% of the card is visible
  });

  return (
    // We attach the ref here. Now, the hook will watch this div.
    <div
      ref={ref}
      className="w-full max-w-5xl mx-auto mt-80 border border-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left Section */}
      <BuildPortfolio />
      {/* Right Section - We pass `inView` to it */}
      <Build2 inView={inView} />
    </div>
  );
};

export default ShowcaseCard;
