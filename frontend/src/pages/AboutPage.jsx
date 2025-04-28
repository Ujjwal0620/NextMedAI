import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-16 text-black">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About <span className="text-pink-700">NextMedAI</span></h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Revolutionizing healthcare with Artificial Intelligence to create a smarter, healthier world.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Mission</h2>
        <p className="text-gray-800 leading-relaxed">
          At NextMedAI, our mission is to blend cutting-edge AI technology with healthcare expertise to deliver
          faster, smarter, and more accurate diagnosis and treatment solutions. We believe that every patient deserves
          personalized and efficient care, powered by intelligent systems that never rest.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Vision</h2>
        <p className="text-gray-800 leading-relaxed">
          We envision a world where Artificial Intelligence bridges the gap between healthcare providers and patients,
          making healthcare accessible, affordable, and effective for all. Our vision is a future where AI doctors are
          available 24/7 to assist and improve human lives.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">What We Offer</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-800">
          <li><span className="font-semibold">AI Doctor:</span> Instant, accurate, AI-driven consultations and diagnosis.</li>
          <li><span className="font-semibold">Lab Integration:</span> Smart analysis of lab reports and scans with AI recommendations.</li>
          <li><span className="font-semibold">Meditation & Mental Health:</span> AI-assisted therapy sessions and mental well-being tools.</li>
          <li><span className="font-semibold">24/7 Support:</span> Connect anytime with our smart bots and human doctors.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Meet Our Team</h2>
        <p className="text-gray-800 leading-relaxed">
          Our team is a fusion of experienced doctors, AI researchers, software engineers, and healthcare innovators,
          all working together to create a seamless, efficient healthcare experience for you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Get In Touch</h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          Want to learn more? Collaborate with us? Join our mission to transform healthcare?
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
