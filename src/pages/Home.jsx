import React from "react";
import ShowAnimation from "../component/ShowAnimation.jsx";
import ShowcaseCard from "../component/ShowcaseCard.jsx";

const Home = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col items-center pt-24 p-4">
      <ShowAnimation />
      <ShowcaseCard />
      <div className="size-100">
      
      </div>
    </div>
  );
};

export default Home;
