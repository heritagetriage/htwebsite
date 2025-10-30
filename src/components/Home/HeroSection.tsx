import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optimize video loading
      const handleLoadedData = () => setVideoLoaded(true);

      // Handle Safari-specific issues with error handling
      const handleCanPlayThrough = () => {
        video.play().catch(() => {
          // Silently handle autoplay failures (common in browsers)
        });
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplaythrough', handleCanPlayThrough);

      // Preload video on user interaction for mobile
      const handleUserInteraction = () => {
        if (video.readyState < 2) {
          video.load();
        }
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('click', handleUserInteraction);
      };

      document.addEventListener('touchstart', handleUserInteraction, { passive: true });
      document.addEventListener('click', handleUserInteraction);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
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
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/services/hero-poster.jpg"
          className="w-full h-full object-cover"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/70"></div>
      </div>

      {/* Main Content - Centered Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          {/* Professional Badge */}
          <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-md rounded-full px-6 py-3 border border-blue-300/30 mb-8" data-aos="fade-up">
            <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
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
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="inline-flex items-center justify-center border-2 border-blue-300/50 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-500/20 hover:border-blue-300/70 transition-all duration-300 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10" data-aos="fade-up" data-aos-delay="800">
        <button
          onClick={() => {
            const targetElement = document.getElementById('services');
            if (targetElement) {
              const headerHeight = 96;
              const targetPosition = targetElement.offsetTop - headerHeight;
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }}
          className="flex flex-col items-center cursor-pointer group focus:outline-none"
        >
          <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;