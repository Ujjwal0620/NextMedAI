import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const plans = [
  {
    title: 'Medical consultations',
    tags: ['Telemedicine', 'Distance Medicine'],
    description:
      'Discuss your questions and concerns and get treatment and diagnostic recommendations.',
    price: 'Rs 50',
  },
  {
    title: 'Medical consultations',
    tags: ['Telemedicine', 'Distance Medicine'],
    description:
      'Discuss your questions and concerns and get treatment and diagnostic recommendations.',
    price: 'RS 60',
  },
  {
    title: 'Educational Resources',
    tags: ['Educational Resources', 'Prevention'],
    description:
      'Learn information about disease, prevention and healthy living on our educational portal.',
    price: 'Free',
  },
  {
    title: 'Psychological support',
    tags: ['Online therapy', 'Mental health'],
    description:
      'Receive confidential consultations from our psychologists and psychiatrists.',
    price: 'Rs 80',
  },
];

const Plans = () => {
  return (
    <section id='plan' className="px-6 py-16 bg-gray-50 text-gray-800">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-2">Our Plans</h2>
        <button className="text-sm text-blue-600 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full transition">
          Choose a Plan
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 shadow-sm border hover:shadow-md hover:border-blue-100 transition relative group"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {plan.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
            <hr className="mb-4 border-gray-200" />
            <div className="text-base font-semibold text-gray-700">
              From{' '}
              <span className="text-2xl text-gray-900">
                {plan.price}
              </span>
              {plan.price !== 'Free' && <span className="text-sm text-gray-500"> /session</span>}
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
