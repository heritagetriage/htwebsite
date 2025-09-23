import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
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
      <section id="events" className="py-20 bg-gray-50">
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
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Upcoming Events
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Event Videos
          </p> */}
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Upcoming Events</h3>
            <p className="text-gray-500">Check back soon for new events and opportunities.</p>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white max-w-5xl mx-auto">
            {/* Featured Event Video */}
            <div className="relative aspect-video w-full">
              {featuredEvent.video_url ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={featuredEvent.image_url || "/images/events/diaspora-event.jpg"}
                  controls
                >
                  <source src={featuredEvent.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  src={featuredEvent.image_url || "/images/events/diaspora-event.jpg"}
                  alt={featuredEvent.title || "DIASPORA - GHANA BUSINESS EXCHANGE"}
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Event Title Overlay */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">
                  {featuredEvent.title || "DIASPORA - GHANA BUSINESS EXCHANGE"}
                </h3>
              </div>
            </div>
            
            {/* Event Details */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Why Attend */}
                <div>
                  <h4 className="font-bold text-gray-700 mb-4">WHY ATTEND:</h4>
                  <ul className="space-y-2">
                    {featuredEvent.benefits ? (
                      featuredEvent.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Meet 30+ businesses in 60 minutes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Discover new partnership opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Expand your customer and supplier network</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Grow your business beyond your current market</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                {/* Right Column - Location */}
                <div>
                  <h4 className="font-bold text-gray-700 mb-4">LOCATION:</h4>
                  <p className="mb-2">{featuredEvent.location || "PALMS BY EAGLES"}</p>
                  <p className="mb-2">AIRPORT CITY CIRCLE - GHANA</p>
                  <p className="mb-2">Accra, Ghana</p>
                  <p className="mb-4 text-sm text-gray-500">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      http://maps.google.com/PALMSEAGLES
                    </a>
                  </p>
                  
                  {/* Event Date */}
                  <div className="mt-6">
                    <div className="bg-blue-600 text-white text-center py-2 rounded">
                      {featuredEvent.date || "13 OCTOBER, 2025"}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={`/booking/${featuredEvent.id || "diaspora-event"}`}
                  className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href={`mailto:info@heritagetriage.com?subject=Question about ${featuredEvent.title || "DIASPORA - GHANA BUSINESS EXCHANGE"}`}
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Contact Organizer
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;