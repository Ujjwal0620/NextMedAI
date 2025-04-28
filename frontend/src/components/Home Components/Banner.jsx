import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800">
          Compassionate Care, Advanced Medicine With AI
        </h1>
        <p className="text-lg text-gray-600">
          Your health is our priority. Get access to world-class doctors, advanced diagnostics, and personalized care—all under one roof.
        </p>
        <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-pink-700 transition duration-300">
          Book Appointment
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://t4.ftcdn.net/jpg/06/32/90/79/360_F_632907942_M6CVHD1ivhUrWK1X49PkBlSH3ooNPsog.jpg"
          alt="Hospital Banner"
          className="w-full max-w-md rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
