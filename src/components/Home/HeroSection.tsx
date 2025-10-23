import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optimize video loading
      video.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });

      // Handle Safari-specific issues
      video.addEventListener('canplaythrough', () => {
        video.play().catch(console.error);
      });

      // Preload video on user interaction for mobile
      const handleUserInteraction = () => {
        video.load();
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('click', handleUserInteraction);
      };

      document.addEventListener('touchstart', handleUserInteraction);
      document.addEventListener('click', handleUserInteraction);

      return () => {
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('click', handleUserInteraction);
      };
    }
  }, []);
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* Fallback background - shows immediately while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/services/hero-poster.jpg"
          className="w-full h-full object-cover"
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        >
          {/* Multiple source formats for better browser compatibility */}
          <source src="/images/services/hero.webm" type="video/webm" />
          <source src="/images/services/hero.mp4" type="video/mp4" />

          {/* Fallback for browsers that don't support video */}
          <img
            src="/images/services/hero-fallback.jpg"
            alt="Strategic Consulting Background"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Professional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Main Content - Centered Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          {/* Professional Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-8" data-aos="fade-up">
            <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
            <span className="text-sm font-medium tracking-wide text-white">STRATEGIC BUSINESS CONSULTANCY</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 mb-8" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-light leading-tight text-white">
              Strategic Consulting
            </h1>
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white/90">
              For Global Growth
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="400">
            Expert guidance to navigate international markets and regulatory challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="600">
            <Link
              to="#contact"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10" data-aos="fade-up" data-aos-delay="800">
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;