import React from 'react';

const MeditationsPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-6 md:p-16 text-black">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 mb-6">
          Find Your Inner Peace
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Relax, recharge, and reconnect with your mind and soul through our AI-guided meditations.
        </p>
      </div>

      {/* Section: Meditation Benefits */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-teal-700 mb-8 text-center">Why Meditation?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">Stress Relief</h3>
            <p className="text-gray-700">
              Calm your mind and lower your stress levels with soothing mindfulness techniques.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Better Sleep</h3>
            <p className="text-gray-700">
              Gently drift into deep, peaceful sleep with guided evening meditations.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">Emotional Healing</h3>
            <p className="text-gray-700">
              Heal from within and embrace emotional balance with therapeutic sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Meditation Types */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-teal-700 mb-8 text-center">Our Meditation Sessions</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Meditation 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="h-48 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
              {/* Image Placeholder */}
              <span className="text-gray-500">[Image Here]</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Morning Mindfulness</h3>
            <p className="text-gray-700">
              Start your day with clarity and energy. Gentle breathing and gratitude practice.
            </p>
          </div>

          {/* Meditation 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="h-48 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
              {/* Image Placeholder */}
              <span className="text-gray-500">[Image Here]</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Evening Relaxation</h3>
            <p className="text-gray-700">
              Unwind from the chaos. Calm your body, release tension, and prepare for restful sleep.
            </p>
          </div>

          {/* Meditation 3 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="h-48 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
              {/* Image Placeholder */}
              <span className="text-gray-500">[Image Here]</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Healing Journey</h3>
            <p className="text-gray-700">
              Deep emotional healing sessions that soothe your heart and strengthen your spirit.
            </p>
          </div>

          {/* Meditation 4 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="h-48 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
              {/* Image Placeholder */}
              <span className="text-gray-500">[Image Here]</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Focus & Productivity Boost</h3>
            <p className="text-gray-700">
              Supercharge your mind and improve concentration with AI-enhanced focus meditations.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold text-pink-700 mb-6">Ready to Transform Your Mind?</h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
          Join thousands who are finding peace, happiness, and clarity with NextMedAI guided meditations.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg transition-all">
          Start Your Journey
        </button>
      </section>

    </div>
  );
};

export default MeditationsPage;
