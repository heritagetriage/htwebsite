import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Strategic Focus', href: '#priorities' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img src="/images/heritage-logo.jpg" alt="Heritage Triage Logo" className="h-16 w-auto" />
              <div className="text-2xl font-light text-gray-900">
                heritage<span className="font-bold">triage</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                item.href === '/' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-base font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200"
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
              {navigation.map((item) => (
                item.href === '/' ? (
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
                )
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSmoothScroll(e, '#contact');
                    setIsMenuOpen(false);
                  }}
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