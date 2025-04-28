import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="mt-3 mb-3 flex flex-col items-center justify-center h-64 bg-white px-4">
      <div className="self-start mb-4">
        <h2 className="border-2 border-pink-600 rounded-full px-4 py-1 text-sm text-pink-600 font-semibold">
          OUR APPROACH
        </h2>
      </div>
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">NextMed AI,</span> we are
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          using AI and ML to predict your disease and also provides you the cure.
        </p>
        <p className="text-red-800 font-bold mt-6 text-4xl">Do not depend on it completely</p>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
