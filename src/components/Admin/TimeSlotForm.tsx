import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { TimeSlot } from '../../types';

interface TimeSlotFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (timeSlot: Omit<TimeSlot, 'id' | 'session_id'>) => void;
  timeSlot?: TimeSlot | null;
}

const TimeSlotForm: React.FC<TimeSlotFormProps> = ({
  isOpen,
  onClose,
  onSave,
  timeSlot
}) => {
  const [formData, setFormData] = useState({
    start_time: '',
    end_time: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (timeSlot) {
      setFormData({
        start_time: timeSlot.start_time,
        end_time: timeSlot.end_time
      });
    } else {
      const now = new Date();
      const startTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Tomorrow
      const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
      
      setFormData({
        start_time: startTime.toISOString().slice(0, 16),
        end_time: endTime.toISOString().slice(0, 16)
      });
    }
    setErrors({});
  }, [timeSlot, isOpen]);

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

    if (!formData.start_time) {
      newErrors.start_time = 'Start time is required';
    }

    if (!formData.end_time) {
      newErrors.end_time = 'End time is required';
    }

    if (formData.start_time && formData.end_time) {
      const startTime = new Date(formData.start_time);
      const endTime = new Date(formData.end_time);
      
      if (endTime <= startTime) {
        newErrors.end_time = 'End time must be after start time';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    
    if (!validateForm()) {
      return;
    }

    const timeSlotData = {
      start_time: new Date(formData.start_time).toISOString(),
      end_time: new Date(formData.end_time).toISOString()
    };

    onSave(timeSlotData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {timeSlot ? 'Edit Time Slot' : 'Add New Time Slot'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Close form"
            aria-label="Close time slot form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="start-time-input" className="block text-sm font-medium text-gray-700 mb-1">
                Start Time *
              </label>
              <input
                id="start-time-input"
                type="datetime-local"
                value={formData.start_time}
                onChange={(e) => handleInputChange('start_time', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.start_time ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={errors.start_time ? 'start-time-error' : undefined}
              />
              {errors.start_time && (
                <p id="start-time-error" className="mt-1 text-sm text-red-600">{errors.start_time}</p>
              )}
            </div>

            <div>
              <label htmlFor="end-time-input" className="block text-sm font-medium text-gray-700 mb-1">
                End Time *
              </label>
              <input
                id="end-time-input"
                type="datetime-local"
                value={formData.end_time}
                onChange={(e) => handleInputChange('end_time', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.end_time ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={errors.end_time ? 'end-time-error' : undefined}
              />
              {errors.end_time && (
                <p id="end-time-error" className="mt-1 text-sm text-red-600">{errors.end_time}</p>
              )}
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Duration:</strong> {
                formData.start_time && formData.end_time ? 
                  Math.round((new Date(formData.end_time).getTime() - new Date(formData.start_time).getTime()) / (1000 * 60)) + ' minutes'
                  : 'Select start and end times'
              }
            </p>
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
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {timeSlot ? 'Update Time Slot' : 'Create Time Slot'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotForm;
