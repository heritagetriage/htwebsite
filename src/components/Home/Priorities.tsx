import React from 'react';
import { Target, Lightbulb, PieChart, Shield, Handshake } from 'lucide-react';

const priorities = [
  {
    icon: Target,
    title: 'Client-Centric Solutions',
    description: 'Always putting the client business goals and outcomes first.',
    number: '01'
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Efficiency',
    description: 'Continuously exploring creative solutions that drive sustainable growth.',
    number: '02'
  },
  {
    icon: PieChart,
    title: 'Data-Driven Insights',
    description: 'Leveraging data and analytics to guide decisions and deliver impactful strategies.',
    number: '03'
  },
  {
    icon: Shield,
    title: 'Compliance and Risk Mitigation',
    description: 'Ensuring that all strategies are aligned with industry regulations, reducing risks for clients and following international host country local content and public policy.',
    number: '04'
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description: 'Moving beyond short-term fixes to build long-lasting, meaningful relationships with clients.',
    number: '05'
  }
];

const Priorities = () => {
  return (
    <section id="priorities" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            OUR APPROACH
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            What We <span className="font-bold">Prioritize</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Focused approaches that drive sustainable growth and lasting success
          </p>
        </div>

        {/* Priorities Grid */}
        <div className="space-y-16">
          {priorities.map((priority, index) => {
            const IconComponent = priority.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl font-light text-gray-200">{priority.number}</span>
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {priority.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {priority.description}
                  </p>

                  <div className="pt-4">
                    <div className="w-16 h-1 bg-gray-900 rounded-full"></div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="aspect-square bg-gray-50 rounded-3xl flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20" data-aos="fade-up">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Approach?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our prioritized methodology can drive your business forward
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;