import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { Booking } from '../../types';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (booking: Omit<Booking, 'id' | 'created_at'>) => void;
  booking?: Booking | null;
  timeSlots?: Array<{ id: string; session_title: string; start_time: string; end_time: string }>;
}

const BookingForm: React.FC<BookingFormProps> = ({
  isOpen,
  onClose,
  onSave,
  booking,
  timeSlots = []
}) => {
  const [formData, setFormData] = useState({
    time_slot_id: '',
    event_id: '',
    session_id: '',
    booking_date: '',
    participant_name: '',
    participant_email: '',
    participant_phone: '',
    status: 'pending' as Booking['status']
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (booking) {
      setFormData({
        time_slot_id: booking.time_slot_id,
        event_id: booking.event_id || '',
        session_id: booking.session_id || '',
        booking_date: booking.booking_date || '',
        participant_name: booking.participant_name,
        participant_email: booking.participant_email,
        participant_phone: booking.participant_phone || '',
        status: booking.status
      });
    } else {
      setFormData({
        time_slot_id: '',
        event_id: '',
        session_id: '',
        booking_date: new Date().toISOString().split('T')[0],
        participant_name: '',
        participant_email: '',
        participant_phone: '',
        status: 'pending'
      });
    }
    setErrors({});
  }, [booking, isOpen]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.time_slot_id) {
      newErrors.time_slot_id = 'Time slot is required';
    }

    if (!formData.participant_name.trim()) {
      newErrors.participant_name = 'Participant name is required';
    }

    if (!formData.participant_email.trim()) {
      newErrors.participant_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.participant_email)) {
      newErrors.participant_email = 'Please enter a valid email address';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const bookingData = {
      time_slot_id: formData.time_slot_id,
      event_id: formData.event_id || undefined,
      session_id: formData.session_id || undefined,
      booking_date: formData.booking_date || undefined,
      participant_name: formData.participant_name.trim(),
      participant_email: formData.participant_email.trim(),
      participant_phone: formData.participant_phone.trim() || undefined,
      status: formData.status
    };

    onSave(bookingData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {booking ? 'Edit Booking' : 'Add New Booking'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Close form"
            aria-label="Close booking form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="time-slot-select" className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot *
              </label>
              <select
                id="time-slot-select"
                value={formData.time_slot_id}
                onChange={(e) => handleInputChange('time_slot_id', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.time_slot_id ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={errors.time_slot_id ? 'time-slot-error' : undefined}
              >
                <option value="">Select a time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot.id} value={slot.id}>
                    {slot.session_title} - {new Date(slot.start_time).toLocaleString()} to {new Date(slot.end_time).toLocaleString()}
                  </option>
                ))}
              </select>
              {errors.time_slot_id && (
                <p className="mt-1 text-sm text-red-600">{errors.time_slot_id}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event ID
              </label>
              <input
                type="text"
                value={formData.event_id}
                onChange={(e) => handleInputChange('event_id', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter event ID (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Session ID
              </label>
              <input
                type="text"
                value={formData.session_id}
                onChange={(e) => handleInputChange('session_id', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter session ID (optional)"
              />
            </div>

            <div>
              <label htmlFor="booking-date-input" className="block text-sm font-medium text-gray-700 mb-1">
                Booking Date
              </label>
              <input
                id="booking-date-input"
                type="date"
                value={formData.booking_date}
                onChange={(e) => handleInputChange('booking_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="status-select" className="block text-sm font-medium text-gray-700 mb-1">
                Status *
              </label>
              <select
                id="status-select"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.status ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={errors.status ? 'status-error' : undefined}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="waitlisted">Waitlisted</option>
                <option value="cancelled">Cancelled</option>
              </select>
              {errors.status && (
                <p className="mt-1 text-sm text-red-600">{errors.status}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <h4 className="text-md font-medium text-gray-900 mb-3 border-t pt-4">
                Participant Information
              </h4>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.participant_name}
                onChange={(e) => handleInputChange('participant_name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.participant_name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter participant name"
              />
              {errors.participant_name && (
                <p className="mt-1 text-sm text-red-600">{errors.participant_name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.participant_email}
                onChange={(e) => handleInputChange('participant_email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.participant_email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email address"
              />
              {errors.participant_email && (
                <p className="mt-1 text-sm text-red-600">{errors.participant_email}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.participant_phone}
                onChange={(e) => handleInputChange('participant_phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter phone number (optional)"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {booking ? 'Update Booking' : 'Create Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
