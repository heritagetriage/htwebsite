import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Strategic Focus', href: '#priorities' },
    { name: 'Industries', href: '/industries' },
    { name: 'Market Insights', href: '/market-insights' },
  ];

  const services = [
    {
      title: 'Market Entry & FDI Facilitation',
      href: '/services/market-entry'
    },
    {
      title: 'Program / Project Management',
      href: '/services/project-management'
    },
    {
      title: 'Digital Transformation Services',
      href: '/services/digital-transformation'
    },
    {
      title: 'Website Design & Development',
      href: '/services/website-design'
    },
    {
      title: 'AI Optimization Strategy',
      href: '/services/ai-optimization'
    }
  ];

  const strategicFocus = [
    {
      title: 'Client-Centric Solutions',
      href: '/strategic-focus/client-centric-solutions'
    },
    {
      title: 'Innovation & Efficiency',
      href: '/strategic-focus/innovation-efficiency'
    },
    {
      title: 'Data-Driven Insights',
      href: '/strategic-focus/data-driven-insights'
    },
    {
      title: 'Compliance & Risk Mitigation',
      href: '/strategic-focus/compliance-risk'
    },
    {
      title: 'Long-Term Partnerships',
      href: '/strategic-focus/long-term-partnerships'
    }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Use setTimeout to allow navigation to complete before scrolling
        setTimeout(() => {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const headerHeight = 96; // Account for sticky header height (h-24 = 96px)
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // We're already on the home page, scroll directly
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = 96; // Account for sticky header height (h-24 = 96px)
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                navigate('/');
                // Also scroll to top if already on home page
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center space-x-4 cursor-pointer focus:outline-none hover:opacity-80 transition-opacity"
            >
              <img src="/images/heritage-logo.jpg" alt="Heritage Triage Logo" className="h-12 w-auto" />
              <div className="text-xl font-light text-white">
                heritage<span className="font-bold">triage</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => {
                if (item.name === 'Services') {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 flex items-center cursor-pointer"
                      >
                        {item.name}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>

                      {/* Services Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
                          >
                            <div className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                              {service.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.name === 'Strategic Focus') {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 flex items-center cursor-pointer"
                      >
                        {item.name}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>

                      {/* Strategic Focus Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {strategicFocus.map((focus, index) => (
                          <Link
                            key={index}
                            to={focus.href}
                            className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
                          >
                            <div className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                              {focus.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Handle different types of links
                if (item.href === '/' || item.href.startsWith('/')) {
                  // Use Link for page navigation
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  );
                } else {
                  // Use anchor with smooth scroll for hash links
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>
          </div>

          {/* Get in Touch Button - Far Right */}
          <div className="hidden lg:block flex-shrink-0 ml-auto">
            <a
              href="/contact"
              className="bg-white text-gray-900 px-6 py-2.5 rounded-full text-base font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button - Far Right (Mobile Only) */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-gray-800 border-t border-gray-700">
              {navigation.map((item) => {
                if (item.name === 'Services') {
                  return (
                    <div key={item.name} className="space-y-2">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.href);
                          setIsMenuOpen(false);
                        }}
                        className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                      <div className="pl-4 space-y-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.name === 'Strategic Focus') {
                  return (
                    <div key={item.name} className="space-y-2">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.href);
                          setIsMenuOpen(false);
                        }}
                        className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                      <div className="pl-4 space-y-2">
                        {strategicFocus.map((focus, index) => (
                          <Link
                            key={index}
                            to={focus.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                          >
                            {focus.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Handle different types of links for mobile
                if (item.href === '/' || item.href.startsWith('/')) {
                  // Use Link for page navigation
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                } else {
                  // Use anchor with smooth scroll for hash links
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setIsMenuOpen(false);
                      }}
                      className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
              <div className="pt-4">
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-white text-gray-900 px-6 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header >
  );
};

export default Header;