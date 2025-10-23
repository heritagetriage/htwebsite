import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    image: '/images/services/erp-creation.png',
    title: 'ERP Creation & Implementation',
    description: 'Design and deploy right-sized ERP systems that streamline workflows, integrate data, and improve visibility.',
    number: '01'
  },
  {
    image: '/images/services/website-design.png',
    title: 'Website Design & Development',
    description: 'Build modern, fast, and secure websites that convert visitors into customers and support growth.',
    number: '02'
  },
  {
    image: '/images/services/ai-optimization.png',
    title: 'AI Optimization Strategy',
    description: 'Identify high-impact use cases and implement practical AI to automate work and surface insights.',
    number: '03'
  },
  {
    image: '/images/services/market-entry.png',
    title: 'Market Entry & FDI Facilitation',
    description: 'Navigate regulations, partnerships, and financing to enter new markets and unlock cross-border investment.',
    number: '04'
  },
  {
    image: '/images/services/project-management.png',
    title: 'Program / Project Management',
    description: 'Plan, execute, and govern complex initiatives with clear milestones, owners, and measurable outcomes.',
    number: '05'
  }
];

const ServicesSection: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 96; // Account for sticky header height (h-24 = 96px)
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
              WHO ARE WE
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Strategic Business
              <br />
              <span className="font-bold">Consultancy</span>
            </h2>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <p className="text-lg text-gray-600 leading-relaxed">
              Heritage Triage is a strategic business consultancy that helps organizations enter new markets, streamline operations, and grow sustainably. Beyond business advisory and FDI facilitation, we build the digital foundations companies need to scale—pairing practical systems with clear execution.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: understand each client&apos;s goals and deliver tailored solutions that boost efficiency, profitability, and market reach—anywhere in the world.
            </p>



            {/* Target Markets */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Target Markets</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">Africa</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">Mexico</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">Canada</span>
                <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">Middle East</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
              OUR SERVICES
            </div>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Core <span className="font-bold">Capabilities</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for digital transformation and international business expansion
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <a
                key={service.title}
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="group cursor-pointer block"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-3 py-1 bg-white bg-opacity-90 rounded-full text-sm font-bold text-gray-900">
                      {service.number}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
                    <span className="mr-2">Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;