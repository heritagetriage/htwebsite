import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { getEvents, getEventSessions, getTimeSlots, createBooking } from '../services/api';
import { Event, EventSession, TimeSlot } from '../types';

interface BookingForm {
  eventId: string;
  sessionId: string;
  timeSlotId: string;
  participantName: string;
  participantEmail: string;
  participantPhone: string;
}

const BookingPage: React.FC = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  const [events, setEvents] = useState<Event[]>([]);
  const [sessions, setSessions] = useState<EventSession[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<BookingForm>({
    eventId: eventId || '',
    sessionId: '',
    timeSlotId: '',
    participantName: '',
    participantEmail: '',
    participantPhone: ''
  });

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    if (formData.eventId) {
      loadSessions(formData.eventId);
    }
  }, [formData.eventId]);

  useEffect(() => {
    if (formData.sessionId) {
      loadTimeSlots(formData.sessionId);
    }
  }, [formData.sessionId]);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSessions = async (eventId: string) => {
    try {
      const data = await getEventSessions(eventId);
      setSessions(data);
      setFormData(prev => ({ ...prev, sessionId: '', timeSlotId: '' }));
    } catch (error) {
      console.error('Error loading sessions:', error);
    }
  };

  const loadTimeSlots = async (sessionId: string) => {
    try {
      const data = await getTimeSlots(sessionId);
      setTimeSlots(data);
      setFormData(prev => ({ ...prev, timeSlotId: '' }));
    } catch (error) {
      console.error('Error loading time slots:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await createBooking({
        time_slot_id: formData.timeSlotId,
        event_id: formData.eventId,
        session_id: formData.sessionId,
        participant_name: formData.participantName,
        participant_email: formData.participantEmail,
        participant_phone: formData.participantPhone,
        status: 'pending'
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error creating booking:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for booking with Heritage Triage. We've received your booking request and will 
              confirm the details within 24 hours. You'll receive an email confirmation shortly.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Back to Home
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    eventId: '',
                    sessionId: '',
                    timeSlotId: '',
                    participantName: '',
                    participantEmail: '',
                    participantPhone: ''
                  });
                }}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book Another Session
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-6">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Session
          </h1>
          <p className="text-xl text-gray-600">
            Reserve your spot for our international business consulting services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Selection */}
            <div>
              <label htmlFor="event-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select Event *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  id="event-select"
                  required
                  value={formData.eventId}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventId: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose an event...</option>
                  {events.map(event => (
                    <option key={event.id} value={event.id}>{event.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Session Selection */}
            {formData.eventId && (
              <div>
                <label htmlFor="session-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Session *
                </label>
                <select
                  id="session-select"
                  required
                  value={formData.sessionId}
                  onChange={(e) => setFormData(prev => ({ ...prev, sessionId: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose a session...</option>
                  {sessions.map(session => (
                    <option key={session.id} value={session.id}>{session.title}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Time Slot Selection */}
            {formData.sessionId && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time Slot *
                </label>
                <div className="grid gap-2">
                  {timeSlots.map(slot => (
                    <label key={slot.id} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot.id}
                        checked={formData.timeSlotId === slot.id}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeSlotId: e.target.value }))}
                        className="mr-3"
                      />
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span>
                        {new Date(slot.start_time).toLocaleDateString()} - {' '}
                        {new Date(slot.start_time).toLocaleTimeString()} to {' '}
                        {new Date(slot.end_time).toLocaleTimeString()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Participant Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.participantName}
                      onChange={(e) => setFormData(prev => ({ ...prev, participantName: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.participantEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, participantEmail: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.participantPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, participantPhone: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !formData.eventId || !formData.sessionId || !formData.timeSlotId}
              className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block"></div>
                  Processing...
                </>
              ) : (
                'Confirm Booking'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;