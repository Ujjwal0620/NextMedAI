import React from 'react';

const LabPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen p-6 md:p-16 text-black">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 mb-6">
          NextGen Lab Diagnostics
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Empowering Health Through Innovation. Discover cutting-edge testing and personalized insights.
        </p>
      </div>

      {/* Section: Our Services */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">Our Lab Services</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">Blood Analysis</h3>
            <p className="text-gray-700">
              Full panel blood tests with AI-backed interpretations to ensure you stay ahead of potential risks.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Genetic Testing</h3>
            <p className="text-gray-700">
              Unlock your genetic code for preventive care, risk management, and wellness optimization.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Microbiology</h3>
            <p className="text-gray-700">
              Rapid pathogen detection and antibiotic sensitivity testing for quicker, targeted treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Technology */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">State-of-the-Art Technology</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technology 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="h-48 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
              {/* Image Placeholder */}
              <span className="text-gray-500">[Image Here]</span>
            </div>
            <h3 className="text-2xl font-bold text-cyan-600 mb-2">AI Diagnostic Engines</h3>
            <p className="text-gray-700">
              Machine-learning algorithms that enhance accuracy and predict potential health issues early.
            </p>
          </div>

          {/* Technology 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="h-48 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
              {/* Image Placeholder */}
              <span className="text-gray-500">[Image Here]</span>
            </div>
            <h3 className="text-2xl font-bold text-cyan-600 mb-2">Robotic Sample Processing</h3>
            <p className="text-gray-700">
              Precision-driven robotic systems ensuring ultra-fast and contamination-free test results.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section className="mb-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">Why Choose NextMedAI Labs?</h2>
        <p className="text-gray-800 max-w-2xl mx-auto text-lg">
          <span className="font-bold text-indigo-600">✓</span> Results you can trust.  
          <br />
          <span className="font-bold text-indigo-600">✓</span> Faster turnaround times.  
          <br />
          <span className="font-bold text-indigo-600">✓</span> Personalized care with every test.
          <br />
          <span className="font-bold text-indigo-600">✓</span> Globally certified standards.
        </p>
      </section>

      {/* Section: Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold text-teal-700 mb-6">Book Your Lab Test Today!</h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
          Secure, accurate, and easy. Experience the future of diagnostics with NextMedAI.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all">
          Schedule Now
        </button>
      </section>

    </div>
  );
};

export default LabPage;
