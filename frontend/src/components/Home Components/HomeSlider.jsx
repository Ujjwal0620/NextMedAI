import React from 'react';

const slides = [
  {
    id: '01',
    title: 'Probiotics',
    image: "https://t4.ftcdn.net/jpg/05/52/40/47/360_F_552404734_KnNgYHqN31eQK8o7Y6lJq4vrXFyWoqE2.jpg",
    description: "Probiotics are live microorganisms that promote a healthy gut. They help improve digestion and strengthen the immune system."
  },
  {
    id: '02',
    title: 'Synbiotics',
    image: "https://www.gutmicrobiotaforhealth.com/wp-content/uploads/2020/09/new-definition-synbiotic.png",
    description: "Synbiotics combine probiotics and prebiotics to enhance gut flora. They work together to boost overall digestive health."
  },
  {
    id: '03',
    title: 'Antibodies',
    image: "https://media.istockphoto.com/id/1358868801/photo/antibodies-background.jpg?s=612x612&w=0&k=20&c=Nhm_hy2qUxSHqkij2swr1ajo0v-Sw2yYKC-G4LXzx7s=",
    description: "Antibodies are proteins that detect and neutralize harmful pathogens. They are key defenders in your body's immune response."
  },
  {
    id: '04',
    title: 'Vitamin D',
    image: "https://media.istockphoto.com/id/1128987268/photo/vitamin-d-keeps-you-healthy-while-lack-of-sun-yellow-soft-shell-d-vitamin-capsule-against-sun.jpg?s=612x612&w=0&k=20&c=e_GutXDerrpw7vHyBlYCLBIW_qt4-kVLikH0lHpx_DA=",
    description: "Vitamin D supports bone health and immune function. It's naturally produced when your skin is exposed to sunlight."
  },
  {
    id: '05',
    title: 'Multivitamins',
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2211514.jpg",
    description: "Multivitamins provide essential nutrients your body needs. They help fill dietary gaps and boost overall wellness."
  }
];


const HomeSlider = () => {
  return (
    <div className="h-fit flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-4">
      {slides.map((slide, idx) => (
        <section
          key={idx}
          className="snap-center shrink-0 w-[90vw] md:w-[1000px] mt-3 mb-3 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-orange-400 to-white rounded-2xl p-6 md:p-8 h-auto md:h-[400px] shadow-md relative overflow-hidden"
        >
          {/* Left Side: Text */}
          <div className="flex flex-col max-w-full md:max-w-md mb-4 md:mb-0">
            <span className="text-sm text-gray-500 mb-2">{slide.id}</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              {slide.title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Center: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl"
            />
          </div>

          {/* Right Side: Vertical Button */}
          <div className="absolute right-2 md:right-4 top-2 md:top-1/2 md:-translate-y-1/2 transform">
            <button className="border border-black rounded-md px-2 py-1 text-xs text-gray-900 rotate-0 md:rotate-90">
              MORE INFO
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeSlider;
