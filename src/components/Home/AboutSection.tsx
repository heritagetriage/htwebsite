import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            About Our Founder
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="100"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-right">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 max-w-md">
              <img 
                src="/images/ceo.jpeg"
                alt="Rita Adwoa Adubra Asante"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rita Adwoa Adubra Asante</h3>
              <p className="text-lg text-blue-700 font-semibold mb-1">Founder & Senior Strategist, Heritage Triage LLC</p>
              <p className="text-gray-600">EMBA, University of Washington – Foster School of Business</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Rita Adwoa Adubra Asante is a global strategist and commercial diplomacy expert with over a decade of 
              experience helping companies expand across borders and industries. She is the Founder and Senior 
              Strategist of Heritage Triage LLC, a boutique consulting firm that empowers businesses, governments, and 
              investors to enter new markets, shape enabling policy environments, and unlock sustainable growth through 
              strategic partnerships.
            </p>

            <p className="text-gray-700 leading-relaxed">
              A 2025 graduate of the Global Executive MBA program at the University of Washington's Foster School of 
              Business, Rita brings sharpened leadership and innovation capabilities to her work. Through this program, 
              she deepened her global business acumen and expanded her toolkit for supporting high-impact, cross-border initiatives.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">What Drives Her Work:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Access:</strong> Opening doors to high-growth, underrepresented markets</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Policy Influence:</strong> Helping businesses navigate and shape regulatory environments</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Inclusive Development:</strong> Advancing women entrepreneurs, small businesses, and diaspora-led enterprises</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <blockquote className="text-lg italic text-gray-800 mb-3">
                "Strategy should be clear, actionable, and transformational."
              </blockquote>
              <p className="text-sm text-gray-600">— Rita's founding conviction for Heritage Triage (2022)</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Professional Journey</h4>
            <div className="space-y-4 text-gray-700">
              <p>
                Rita's professional journey spans the public, private, and regulatory sectors. Early in her career, she worked 
                with the Ghana Civil Aviation Authority, supporting regulatory modernization and stakeholder engagement in one of 
                West Africa's busiest aviation hubs.
              </p>
              <p>
                She later served nearly a decade at the U.S. Department of Commerce (U.S. Commercial Service), where she advised 
                more than 500 U.S. companies on market expansion strategies across Sub-Saharan Africa. From organizing presidential-level 
                trade missions to launching public-private investment platforms, Rita played a pivotal role in helping firms like 
                Marriot, Pizza Hut, Cisco, and Zipline establish new market footholds.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Current Impact</h4>
            <div className="space-y-4 text-gray-700">
              <p>
                Through engagements in the U.S., Africa, and the Middle East, she continues to advise companies on market access, 
                policy influence, and international joint ventures. Whether supporting U.S. firms expanding into Africa or helping 
                African businesses structure global partnerships, Rita drives high-impact outcomes rooted in commercial diplomacy 
                and purpose-driven leadership.
              </p>
              <p>
                She is currently authoring <em>Adubra's Journey</em>, a memoir chronicling her rise from modest beginnings in Ghana 
                to influencing boardrooms and bilateral deals around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h5 className="font-semibold text-gray-900">10+ Years</h5>
              <p className="text-sm text-gray-600">International Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h5 className="font-semibold text-gray-900">500+</h5>
              <p className="text-sm text-gray-600">Companies Advised</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h5 className="font-semibold text-gray-900">3 Continents</h5>
              <p className="text-sm text-gray-600">Active Operations</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h5 className="font-semibold text-gray-900">EMBA</h5>
              <p className="text-sm text-gray-600">University of Washington</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;