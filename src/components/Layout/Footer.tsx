import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src="/images/heritage-logo.jpg" alt="Heritage Triage Logo" className="h-16 w-auto" />
              <span className="text-xl font-bold text-white">Heritage Triage</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner in international business expansion and trade services.
              We help businesses navigate global markets with expertise and strategic guidance.
            </p>
            <div className="flex space-x-4">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">info@heritagetriage.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Market Entry Advisory</li>
              <li>Business Matchmaking</li>
              <li>Trade Missions</li>
              <li>Event Promotion</li>
              <li>Global Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1(425)-761-1874</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Sammamish, WA 98074</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Heritage Triage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;