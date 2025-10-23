import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 mb-6">
            LEADERSHIP
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Meet Our <span className="font-bold">Founder</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative" data-aos="fade-right">
            <div className="relative">
              <img
                src="/images/ceo 7.jpeg"
                alt="Rita Adwoa Adubra Asante"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Rita Adwoa Adubra Asante
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                Founder & Senior Strategist, Heritage Triage LLC
              </p>
              <p className="text-gray-500">
                EMBA, University of Washington – Foster School of Business (2025)
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Rita Asante is a global growth strategist and commercial diplomacy expert with 10+ years helping organizations expand across borders. She leads Heritage Triage LLC, a boutique consultancy that equips SMEs, investors, and public institutions to enter new markets and scale with strong digital and operational foundations.
              </p>

              <p>
                Heritage Triage delivers end-to-end support—including ERP creation & implementation, website design & development, AI optimization strategy, market entry & FDI facilitation, and program/project management—so clients can trade confidently, build trusted partnerships, and grow sustainably.
              </p>

              <p>
                A 2025 graduate of UW Foster&apos;s Global Executive MBA, Rita blends strategy with execution—turning vision into systems, playbooks, and measurable outcomes across Africa, the Americas, and Asia.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Certifications</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Franchise Certification (franchise development & compliance)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Gazelle.ai Certification (FDI targeting, competitive intelligence, lead scoring)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>FDI Certification (investment promotion, investor aftercare, policy navigation)</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group"
            >
              Contact Rita
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* What Drives Her Work */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12" data-aos="fade-up">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Drives Her Work</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h5 className="font-bold text-gray-900 mb-3">Market Access</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating efficient, compliant pathways for cross-border trade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h5 className="font-bold text-gray-900 mb-3">Digital Foundations</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deploying practical ERPs, modern websites, and AI workflows to streamline operations and improve decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h5 className="font-bold text-gray-900 mb-3">Policy & Partnerships</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigating and shaping enabling regulatory environments while building credible partner networks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
              </div>
              <h5 className="font-bold text-gray-900 mb-3">Inclusive Growth</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empowering small businesses and diaspora-led enterprises to compete globally.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Companies Advised</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Continents</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">2025</div>
            <div className="text-gray-600">EMBA Graduate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;