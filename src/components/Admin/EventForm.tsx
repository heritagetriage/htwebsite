import React, { useState } from 'react';
import { X, Upload, Video, Save } from 'lucide-react';
import { createEvent } from '../../services/api';
import { Event } from '../../types';

interface EventFormProps {
  event?: Event | null;
  onClose: () => void;
  onEventCreated?: (event: Event) => void;
}

const EventForm: React.FC<EventFormProps> = ({ event, onClose, onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    image_url: event?.image_url || '',
    video_url: event?.video_url || '',
    registration_link: event?.registration_link || '',
    display_order: event?.display_order || 1,
    is_active: event?.is_active ?? true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('EventForm: Form submitted with data:', formData);
    setLoading(true);
    setError('');

    try {
      if (event) {
        // Edit mode - would call updateEvent API when available
        console.log('EventForm: Updating event:', { ...formData, id: event.id });
        // TODO: Implement updateEvent API call
      } else {
        // Create mode
        console.log('EventForm: Creating new event with data:', formData);
        const newEvent = await createEvent(formData);
        console.log('EventForm: Event created successfully:', newEvent);
        onEventCreated?.(newEvent);
        console.log('EventForm: onEventCreated callback called');
      }
      console.log('EventForm: Closing form');
      onClose();
    } catch (error: unknown) {
      console.error('EventForm: Error during submission:', error);
      const errorMessage = error instanceof Error ? error.message : `Failed to ${event ? 'update' : 'create'} event`;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{event ? 'Edit Event' : 'Create New Event'}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Close form"
            aria-label="Close event form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter event title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Enter event description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Image *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImageFile(file);
                    // Create a URL for preview (in a real app, you'd upload to server)
                    const url = URL.createObjectURL(file);
                    setFormData(prev => ({ ...prev, image_url: url }));
                  }
                }}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm font-medium text-gray-900">
                    {imageFile ? imageFile.name : 'Click to upload image'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </label>
              {imageFile && (
                <div className="mt-4">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="max-w-full h-32 object-cover rounded-lg mx-auto"
                  />
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              This image will be used as the poster/thumbnail for the event
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Video (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setVideoFile(file);
                    // Create a URL for preview (in a real app, you'd upload to server)
                    const url = URL.createObjectURL(file);
                    setFormData(prev => ({ ...prev, video_url: url }));
                  }
                }}
                className="hidden"
                id="video-upload"
              />
              <label htmlFor="video-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Video className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm font-medium text-gray-900">
                    {videoFile ? videoFile.name : 'Click to upload video'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    MP4, MOV, AVI up to 100MB
                  </p>
                </div>
              </label>
              {videoFile && (
                <div className="mt-4">
                  <video
                    src={formData.video_url}
                    controls
                    className="max-w-full h-32 rounded-lg mx-auto"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              If provided, visitors can play this video over the event image
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registration Link
            </label>
            <input
              type="url"
              value={formData.registration_link}
              onChange={(e) => setFormData(prev => ({ ...prev, registration_link: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/register"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="display-order-input" className="block text-sm font-medium text-gray-700 mb-2">
                Display Order
              </label>
              <input
                id="display-order-input"
                type="number"
                min="1"
                value={formData.display_order}
                onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 1 }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Active Event</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Create Event
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;