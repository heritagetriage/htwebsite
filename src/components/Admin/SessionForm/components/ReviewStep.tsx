import React from 'react';
import { Clock, User, MapPin, Users } from 'lucide-react';
import { ReviewStepProps } from '../types';

const ReviewStep: React.FC<ReviewStepProps> = ({
  formData,
  delegateData,
  timeSlots,
  events
}) => {
  const selectedEvent = events.find(event => event.id === formData.event_id);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Review Session Details</h3>
        <p className="text-sm text-gray-600 mb-6">
          Please review all the information below before saving the session.
        </p>
      </div>

      {/* Session Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Session Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event</label>
            <p className="mt-1 text-sm text-gray-900">{selectedEvent?.title || 'Not selected'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Session Title</label>
            <p className="mt-1 text-sm text-gray-900">{formData.title || 'Not provided'}</p>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <p className="mt-1 text-sm text-gray-900">{formData.description || 'No description provided'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <div className="flex items-center mt-1">
              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
              <p className="text-sm text-gray-900">{formData.location || 'Not specified'}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Facilitator</label>
            <div className="flex items-center mt-1">
              <User className="h-4 w-4 text-gray-400 mr-1" />
              <p className="text-sm text-gray-900">{formData.facilitator || 'Not specified'}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Participants</label>
            <div className="flex items-center mt-1">
              <Users className="h-4 w-4 text-gray-400 mr-1" />
              <p className="text-sm text-gray-900">{formData.max_participants || 'Not specified'}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <p className="mt-1">
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                formData.is_active 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {formData.is_active ? 'Active' : 'Inactive'}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Delegate Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Delegate Information</h4>
        {delegateData.name ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-sm text-gray-900">{delegateData.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{delegateData.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">{delegateData.phone || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Organization</label>
              <p className="mt-1 text-sm text-gray-900">{delegateData.organization || 'Not provided'}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <p className="mt-1 text-sm text-gray-900">{delegateData.position || 'Not provided'}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No new delegate information provided</p>
        )}
      </div>

      {/* Time Slots */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Time Slots</h4>
        {timeSlots.length > 0 ? (
          <div className="space-y-3">
            {timeSlots.map((slot, index) => (
              <div key={slot.id || index} className="flex items-center bg-white p-3 rounded-lg border">
                <Clock className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(slot.start_time).toLocaleDateString()} from{' '}
                    {new Date(slot.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to{' '}
                    {new Date(slot.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  <p className="text-xs text-gray-500">
                    Duration: {Math.round((new Date(slot.end_time).getTime() - new Date(slot.start_time).getTime()) / (1000 * 60))} minutes
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No time slots added</p>
        )}
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-md font-semibold text-blue-900 mb-2">Summary</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Session will be created for "{selectedEvent?.title || 'Selected Event'}"</li>
          <li>• Title: "{formData.title}"</li>
          <li>• {timeSlots.length} time slot{timeSlots.length !== 1 ? 's' : ''} scheduled</li>
          <li>• Status: {formData.is_active ? 'Active' : 'Inactive'}</li>
          {formData.max_participants && (
            <li>• Maximum {formData.max_participants} participants allowed</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewStep;
