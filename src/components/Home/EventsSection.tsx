import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight, Play, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../services/api';
import { Event } from '../../types';

// Extended Event interface to include additional properties needed for the UI
interface ExtendedEvent extends Event {
  date?: string;
  location?: string;
  attendees?: string;
  benefits?: string[];
}

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<ExtendedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data.slice(0, 3)); // Show only first 3 events
    } catch (error) {
      console.error('Error loading events:', error);
      // Use fallback event data if API fails
      setEvents([{
        id: "diaspora-event",
        title: "DIASPORA - GHANA BUSINESS EXCHANGE",
        description: "Join an exchange that's expertly by speed dating! In just a few minutes per round, you will meet potential clients, collaborators and growth partners from various industries. This is your chance to pitch, listen, connect and grow.",
        date: "13 OCTOBER, 2025",
        location: "PALMS BY EAGLES, AIRPORT CITY CIRCLE - GHANA",
        image_url: "/images/events/diaspora-event.jpg",
        video_url: "https://example.com/videos/diaspora-event.mp4",
        attendees: "Meet 30+ businesses in 60 minutes",
        benefits: [
          "Meet 30+ businesses in 60 minutes",
          "Discover new partnership opportunities",
          "Expand your customer and supplier network",
          "Grow your business beyond your current market"
        ],
        is_active: true,
        display_order: 1,
        created_at: new Date().toISOString()
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="events" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Use the first event as the featured event
  const featuredEvent = events[0];

  return (
    <section id="events" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 mb-6">
            UPCOMING EVENTS
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Connect & <span className="font-bold">Grow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our exclusive networking events and business exchanges
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Upcoming Events</h3>
            <p className="text-gray-600 mb-8">Check back soon for new events and opportunities.</p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Get Notified
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Event Visual */}
            <div className="relative" data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {featuredEvent.video_url ? (
                  <video
                    ref={videoRef}
                    className="w-full aspect-video object-cover"
                    poster={featuredEvent.image_url || "/images/events/diaspora-event.jpg"}
                    controls
                  >
                    <source src={featuredEvent.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative">
                    <img
                      src={featuredEvent.image_url || "/images/events/diaspora-event.jpg"}
                      alt={featuredEvent.title || "DIASPORA - GHANA BUSINESS EXCHANGE"}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Event Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-900 shadow-lg">
                    Featured Event
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-8" data-aos="fade-left">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {featuredEvent.title || "DIASPORA - GHANA BUSINESS EXCHANGE"}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredEvent.description || "Join an exchange that's expertly by speed dating! In just a few minutes per round, you will meet potential clients, collaborators and growth partners from various industries."}
                </p>
              </div>

              {/* Event Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-500">DATE</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {featuredEvent.date || "13 OCTOBER, 2025"}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-500">LOCATION</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {featuredEvent.location || "Accra, Ghana"}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Why Attend:</h4>
                <ul className="space-y-3">
                  {(featuredEvent.benefits || [
                    "Meet 30+ businesses in 60 minutes",
                    "Discover new partnership opportunities",
                    "Expand your customer and supplier network",
                    "Grow your business beyond your current market"
                  ]).map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/booking/${featuredEvent.id || "diaspora-event"}`}
                  className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center group"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;