import React from 'react';
import { SessionDetailsStepProps } from '../types';

const SessionDetailsStep: React.FC<SessionDetailsStepProps> = ({
  formData,
  events,
  eventsLoading,
  eventsError,
  errors,
  onInputChange
}) => {
  return (
    <div className="space-y-4">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Event *
        </label>
        <select
          value={formData.event_id}
          onChange={(e) => onInputChange('event_id', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.event_id ? 'border-red-500' : 'border-gray-300'
          }`}
          aria-label="Select event"
          disabled={eventsLoading}
        >
          <option value="">
            {eventsLoading ? 'Loading events...' : 'Select an event'}
          </option>
          {!eventsLoading && events.map(event => (
            <option key={event.id} value={event.id}>
              {event.title}
            </option>
          ))}
        </select>
        {errors.event_id && (
          <p className="mt-1 text-sm text-red-600">{errors.event_id}</p>
        )}
        {eventsError && (
          <p className="mt-1 text-sm text-red-600">Error loading events: {eventsError}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Session Title *
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onInputChange('title', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter session title"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => onInputChange('description', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter session description"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => onInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Facilitator
          </label>
          <input
            type="text"
            value={formData.facilitator}
            onChange={(e) => onInputChange('facilitator', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter facilitator name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Participants
          </label>
          <input
            type="number"
            value={formData.max_participants}
            onChange={(e) => onInputChange('max_participants', e.target.value)}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter maximum participants"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="is_active"
                checked={formData.is_active}
                onChange={() => onInputChange('is_active', true)}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="is_active"
                checked={!formData.is_active}
                onChange={() => onInputChange('is_active', false)}
                className="mr-2"
              />
              Inactive
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsStep;
