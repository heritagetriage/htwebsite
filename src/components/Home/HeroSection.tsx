import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="International Business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white" data-aos="fade-right">
              <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
                STRATEGIC BUSINESS CONSULTANCY
              </div>

              <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                Navigate Global
                <br />
                <span className="font-bold">Markets</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-lg">
                Expert guidance to expand your business internationally with confidence and strategic precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/booking"
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="inline-flex items-center text-white border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 group">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </button>
              </div>
            </div>

            {/* Right Column - Stats/Features */}
            <div className="text-white space-y-8" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-300">Companies Advised</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3</div>
                  <div className="text-gray-300">Continents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Heritage Triage?</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Strategic market entry guidance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Digital transformation expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Cross-border investment facilitation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm mt-2">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;