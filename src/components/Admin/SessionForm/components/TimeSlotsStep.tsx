import React from 'react';
import { Plus, Edit, Trash2, Clock } from 'lucide-react';
import { TimeSlotsStepProps } from '../types';
import TimeSlotForm from '../../TimeSlotForm';

const TimeSlotsStep: React.FC<TimeSlotsStepProps> = ({
  timeSlots,
  showTimeSlotForm,
  editingTimeSlot,
  timeSlotError,
  newTimeSlot,
  newTimeSlotErrors,
  onSaveTimeSlot,
  onEditTimeSlot,
  onDeleteTimeSlot,
  onNewTimeSlotChange,
  setShowTimeSlotForm,
  setEditingTimeSlot
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Time Slots</h3>
        <p className="text-sm text-gray-600 mb-4">
          Add time slots for this session. You can add multiple time slots if the session runs at different times.
        </p>
      </div>

      {/* Display existing time slots */}
      {timeSlots.length > 0 && (
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-2">Scheduled Time Slots</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-3">
              {timeSlots.map((slot) => (
                <div key={slot.id} className="flex items-center justify-between bg-white p-3 rounded-lg border">
                  <div className="flex items-center">
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
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => onEditTimeSlot(slot)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit time slot"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteTimeSlot(slot.id!)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete time slot"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add new time slot button */}
      <div>
        <button
          type="button"
          onClick={() => setShowTimeSlotForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Time Slot
        </button>
      </div>

      {/* Time slot error */}
      {timeSlotError && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-sm text-red-600">{timeSlotError}</p>
        </div>
      )}

      {/* Time slot form modal */}
      {showTimeSlotForm && (
        <TimeSlotForm
          isOpen={showTimeSlotForm}
          onClose={() => {
            setShowTimeSlotForm(false);
            setEditingTimeSlot(null);
          }}
          onSave={onSaveTimeSlot}
          timeSlot={editingTimeSlot as any}
        />
      )}

      {/* Simple inline time slot form for quick add */}
      {!showTimeSlotForm && timeSlots.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-md font-medium text-gray-900 mb-4">Quick Add Time Slot</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time *
              </label>
              <input
                type="datetime-local"
                value={newTimeSlot.start_time}
                onChange={(e) => onNewTimeSlotChange('start_time', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  newTimeSlotErrors.start_time ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {newTimeSlotErrors.start_time && (
                <p className="mt-1 text-sm text-red-600">{newTimeSlotErrors.start_time}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time *
              </label>
              <input
                type="datetime-local"
                value={newTimeSlot.end_time}
                onChange={(e) => onNewTimeSlotChange('end_time', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  newTimeSlotErrors.end_time ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {newTimeSlotErrors.end_time && (
                <p className="mt-1 text-sm text-red-600">{newTimeSlotErrors.end_time}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                if (newTimeSlot.start_time && newTimeSlot.end_time) {
                  onSaveTimeSlot({
                    start_time: newTimeSlot.start_time,
                    end_time: newTimeSlot.end_time
                  });
                }
              }}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              disabled={!newTimeSlot.start_time || !newTimeSlot.end_time}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add This Time Slot
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotsStep;
