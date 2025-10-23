import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <Link to="/" className="inline-block mb-6">
                <div className="text-3xl font-light text-white">
                  heritage<span className="font-bold">triage</span>
                </div>
              </Link>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Professional & modern, a consultancy designed to help your business stand out from the rest.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your e-mail"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-slate-600 hover:bg-slate-500 border border-slate-600 rounded-r-lg transition-colors flex items-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Us */}
            <div>
              <h4 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">
                Contact us:
              </h4>
              <div className="space-y-3">
                <div>
                  <a
                    href="mailto:adwoa-adubra@heritagetriage.com"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    adwoa-adubra@heritagetriage.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+14257611874"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    +1 234 5678 9999
                  </a>
                </div>
              </div>
            </div>

            {/* Our Address */}
            <div>
              <h4 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">
                Our address:
              </h4>
              <div className="text-slate-300">
                <p>Heritage Triage LLC</p>
                <p>Sammamish, WA 98074</p>
                <p>United States</p>
              </div>
            </div>

            {/* Our Social */}
            <div>
              <h4 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">
                Our social:
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/heritage-triage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/heritagetriage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/heritagetriage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <nav className="flex flex-wrap gap-8 text-slate-400">
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/events" className="hover:text-white transition-colors">
              Events
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/booking" className="hover:text-white transition-colors">
              Book Consultation
            </Link>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700 text-slate-400 text-sm">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms and conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
          </div>
          <div>
            © 2025 Heritage Triage LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;