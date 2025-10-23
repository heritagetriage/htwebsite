import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 mb-6">
            LEADERSHIP
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Meet Our <span className="font-bold">Founder</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative" data-aos="fade-right">
            <div className="relative">
              <img
                src="/images/ceo.jpeg"
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
              <p className="text-lg text-gray-600 mb-4">
                Founder & Senior Strategist, Heritage Triage LLC
              </p>
              <p className="text-gray-500">
                EMBA, University of Washington – Foster School of Business
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Rita is a global strategist and commercial diplomacy expert with over a decade of
                experience helping companies expand across borders and industries. She empowers
                businesses, governments, and investors to enter new markets and unlock sustainable
                growth through strategic partnerships.
              </p>

              <p>
                A 2025 graduate of the Global Executive MBA program at the University of Washington's
                Foster School of Business, Rita brings sharpened leadership and innovation capabilities
                to her work, supporting high-impact, cross-border initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Quote className="w-8 h-8 text-gray-400 mb-4" />
              <blockquote className="text-xl italic text-gray-800 mb-4">
                "Strategy should be clear, actionable, and transformational."
              </blockquote>
              <cite className="text-sm text-gray-500">— Rita's founding conviction for Heritage Triage (2022)</cite>
            </div>

            <button className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group">
              Read Full Biography
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm" data-aos="fade-up">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h4>
            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-gray-200 pl-6">
                <h5 className="font-semibold text-gray-900 mb-2">U.S. Department of Commerce</h5>
                <p className="text-sm text-gray-500 mb-2">U.S. Commercial Service • Nearly a decade</p>
                <p>
                  Advised more than 500 U.S. companies on market expansion strategies across
                  Sub-Saharan Africa, organizing presidential-level trade missions and launching
                  public-private investment platforms.
                </p>
              </div>

              <div className="border-l-4 border-gray-200 pl-6">
                <h5 className="font-semibold text-gray-900 mb-2">Ghana Civil Aviation Authority</h5>
                <p className="text-sm text-gray-500 mb-2">Early Career</p>
                <p>
                  Supported regulatory modernization and stakeholder engagement in one of
                  West Africa's busiest aviation hubs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Current Impact</h4>
            <div className="space-y-6 text-gray-700">
              <p>
                Through engagements in the U.S., Africa, and the Middle East, Rita continues to
                advise companies on market access, policy influence, and international joint ventures.
              </p>

              <p>
                Whether supporting U.S. firms expanding into Africa or helping African businesses
                structure global partnerships, Rita drives high-impact outcomes rooted in commercial
                diplomacy and purpose-driven leadership.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Currently authoring:</strong> <em>Adubra's Journey</em> - a memoir chronicling
                  her rise from modest beginnings in Ghana to influencing boardrooms and bilateral
                  deals around the world.
                </p>
              </div>
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