import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import AboutSection from '../components/Home/AboutSection';
import ContactForm from '../components/Home/ContactForm';
import Priorities from '../components/Home/Priorities';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Priorities />
      <TestimonialsSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;