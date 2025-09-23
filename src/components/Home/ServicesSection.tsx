import React from 'react';

const services = [
  {
    image: '/images/services/marketentry.png',
    title: 'Market Entry Advisory',
    description: 'Strategic guidance for entering new international markets with confidence and reduced risk.',
    color: 'bg-blue-500'
  },
  {
    image: '/images/services/busmatch.jpg',
    title: 'Business Matchmaking',
    description: 'Connect with the right partners, distributors, and stakeholders in your target markets.',
    color: 'bg-green-500'
  },
  {
    image: '/images/services/intertrade.jpg',
    title: 'International Trade Missions',
    description: 'Organized trade missions to explore opportunities and build relationships globally.',
    color: 'bg-purple-500'
  },
  {
    image: '/images/services/stakeholders.jpg',
    title: 'Trade Event Promotion',
    description: 'Professional event management and promotion for maximum business impact.',
    color: 'bg-orange-500'
  },
  {
    image: '/images/services/globalmarket.jpg',
    title: 'Global Marketing Strategies',
    description: 'Tailored marketing approaches for different cultures and international markets.',
    color: 'bg-red-500'
  },
  {
    image: '/images/services/culturalInt.jpg',
    title: 'Cultural Intelligence',
    description: 'Navigate cultural differences and business practices in international markets.',
    color: 'bg-indigo-500'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive solutions for international business expansion and global trade success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <div className={`${service.color} h-1 w-16 rounded-full mx-auto mb-4`}></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;