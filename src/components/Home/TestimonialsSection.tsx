import React from 'react';
import { Star, Quote, Linkedin } from 'lucide-react';

const testimonials = [
  {
    name: 'Pious Ali',
    role: 'Councilor, Portland, Maine',
    image: '/images/Pious.jpeg',
    content: 'Heritage Triage partnered with us to lead our first black elected officials to Ghana with excellent executive support before, during and after.',
    stars: 5,
    linkedin: 'https://www.linkedin.com/in/clrpiousaali/',
    company: 'Portland City Council'
  },
  {
    name: 'Mr. Kwadwo Saka',
    role: 'C.E.O, Saka Homes Gh Ltd',
    image: '/images/Saka.jpeg',
    content: "Heritage Triage transformed our business strategy. Their insights helped us expand into new markets with confidence. The team's dedication to sustainable growth strategies aligned perfectly with our vision.",
    stars: 5,
    linkedin: 'https://www.linkedin.com/in/ebenezer-kwadwo-saka-addo-mensah-62b58357/',
    company: 'Saka Homes Ghana'
  },
  {
    name: 'Kelvis Quaynor',
    role: 'President and Founder, BOH Concepts',
    image: '/images/kelvis.jpeg',
    content: 'Heritage Triage was instrumental in shaping our GTM strategy for Ghana. Their team opened doors to government officials and industry stakeholders we wouldn\'t have reached on our own.',
    stars: 5,
    company: 'BOH Concepts'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Success <span className="font-bold">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our valued clients about their transformative experiences
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gray-50 rounded-3xl p-8 h-full hover:bg-gray-100 transition-colors duration-300">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-gray-400" />
                </div>

                {/* Content */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8">
                  "{testimonial.content}"
                </blockquote>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                  {testimonial.linkedin && (
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
          <Quote className="w-12 h-12 text-gray-400 mx-auto mb-8" />

          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 max-w-4xl mx-auto">
            "Heritage Triage doesn't just provide consulting services – they become your strategic partner,
            understanding your vision and helping you navigate complex international markets with confidence."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <img
              src="/images/Saka.jpeg"
              alt="Kwadwo Saka"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-lg">Kwadwo Saka</div>
              <div className="text-gray-300">CEO, Saka Homes Ghana</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;