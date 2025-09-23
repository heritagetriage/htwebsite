import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Carousel images - replace with your actual image URLs
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      title: "International Business",
      subtitle: "Expansion Experts",
      description: "Navigate global markets with confidence. We provide strategic consulting services to help your business expand internationally and succeed in new territories."
    },
    {
      url: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      title: "Strategic Consulting",
      subtitle: "For Global Growth",
      description: "Expert guidance to navigate international markets and regulatory challenges."
    },
    {
      url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      title: "Market Entry",
      subtitle: "Tailored Solutions",
      description: "Customized strategies to help your business thrive in new territories."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), 500); // Match this with the CSS transition duration
  }, [isTransitioning, carouselImages.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), 500); // Match this with the CSS transition duration
  }, [isTransitioning, carouselImages.length]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Carousel Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full carousel-slide ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          data-bg-url={image.url}
          ref={(el) => {
            if (el) {
              // Set background image using CSS custom property instead of inline style
              el.style.setProperty('--bg-image', `url(${image.url})`);
            }
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white" data-aos="fade-up" data-aos-delay="100">
                {image.title}
                <span className="block text-yellow-400">{image.subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-aos="fade-up" data-aos-delay="200">
                {image.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
                <Link
                  to="/booking"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1140 80 720 80C300 80 0 0 0 0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;