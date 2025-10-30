import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [

    {
      title: 'Market Entry & FDI Facilitation',
      href: '/market-entry'
    },
    {
      title: 'Program / Project Management',
      href: '/project-management'
    },
    {
      title: 'Digital Transformation Services',
      href: '/digital-transformation'
    },
    {
      title: 'Website Design & Development',
      href: '/website-design'
    },
    {
      title: 'AI Optimization Strategy',
      href: '/ai-optimization'
    },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Strategic Focus', href: '#priorities' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.includes(href) || location.hash === href;
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the current page
    if (href.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
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
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
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
              <img src="/images/heritage-logo.jpg" alt="Heritage Triage Logo" className="h-16 w-auto" />
              <div className="text-2xl font-light text-gray-900">
                heritage<span className="font-bold">triage</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
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
                        className={`text-xl font-medium transition-colors duration-200 flex items-center ${isActive(item.href)
                          ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                          : 'text-gray-700 hover:text-blue-600'
                          }`}
                      >
                        {item.name}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>

                      {/* Services Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-blue-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            onClick={service.href.startsWith('#') ? (e) => handleSmoothScroll(e, service.href.substring(1)) : undefined}
                            className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
                              {service.title}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }

                return item.href === '/' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-xl font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-xl font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-gray-100">
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
                        className={`block text-lg font-medium transition-colors duration-200 ${isActive(item.href)
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                          }`}
                      >
                        {item.name}
                      </a>
                      <div className="pl-4 space-y-2">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            onClick={(e) => {
                              if (service.href.startsWith('#')) {
                                handleSmoothScroll(e, service.href.substring(1));
                              }
                              setIsMenuOpen(false);
                            }}
                            className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                          >
                            {service.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }

                return item.href === '/' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block text-lg font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4">
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;