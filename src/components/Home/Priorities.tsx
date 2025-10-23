import React from 'react';
import { Target, Lightbulb, PieChart, Shield, Clock } from 'lucide-react';

const priorities = [
  {
    icon: Target,
    title: 'Client-Centric Solutions',
    description: 'Always putting the client\'s business goals and outcomes first.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Efficiency',
    description: 'Continuously exploring creative solutions that drive sustainable growth.'
  },
  {
    icon: PieChart,
    title: 'Data-Driven Insights',
    description: 'Leveraging data and analytics to guide decisions and deliver impactful strategies.'
  },
  {
    icon: Shield,
    title: 'Compliance and Risk Mitigation',
    description: 'Ensuring that all strategies are aligned with industry regulations, reducing risks for clients and following international host country\'s local content and public policy.'
  },
  {
    icon: Clock,
    title: 'Long-Term Partnerships',
    description: 'Moving beyond short-term fixes to build long-lasting, meaningful relationships with clients.'
  }
];

const Priorities = () => {
  return (
    <section id="priorities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Prioritize for Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused approaches that drive sustainable growth
          </p>
        </div>

        {/* Priorities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {priorities.slice(0, 3).map((priority, index) => {
            const IconComponent = priority.icon;
            return (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {priority.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {priority.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Row - 2 Items Centered */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {priorities.slice(3, 5).map((priority, index) => {
            const IconComponent = priority.icon;
            return (
              <div
                key={index + 3}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 100}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {priority.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {priority.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Priorities;