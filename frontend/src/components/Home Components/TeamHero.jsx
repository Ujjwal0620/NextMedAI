import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TeamHero = () => {
  return (
    <section className="mt-9 mb-3 flex flex-col lg:flex-row items-center justify-between px-6 py-16 md:py-12 bg-gradient-to-br from-blue-50 via-white to-slate-100 gap-10 rounded-2xl shadow-md">
      {/* Left side: image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/online-medical-conference_23-2148904246.jpg?semt=ais_hybrid&w=740"
          alt="Medical team"
          className="w-4/5 max-w-md rounded-2xl shadow-lg"
        />
      </div>

      {/* Right side: content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
          Our Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            At NextMed AI Hospital
          </span>, our success<br />
          is driven by expert care and<br />
          a committed medical team.
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Our doctors are compassionate healers,<br className="hidden md:block" />
          dedicated to your health and well-being.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow hover:opacity-90 transition-all">
            Our team <ArrowUpRight size={16} />
          </button>
          <button className="text-gray-700 hover:text-blue-600 font-medium transition">
            Labs
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
