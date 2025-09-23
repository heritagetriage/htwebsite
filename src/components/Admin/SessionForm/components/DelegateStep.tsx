import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { DelegateStepProps } from '../types';

const DelegateStep: React.FC<DelegateStepProps> = ({
  delegateData,
  eventDelegates,

  delegateErrors,
  formData,
  onDelegateInputChange,
  onAddDelegate,
  onEditDelegate,
  onDeleteDelegate
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Delegate Information</h3>
        <p className="text-sm text-gray-600 mb-4">
          Add or select delegates who will participate in this session.
        </p>
      </div>

      {/* Show existing delegates for the selected event */}
      {eventDelegates.length > 0 && (
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-2">Existing Delegates for this Event</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-700">Name</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-700">Email</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-700">Organization</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {eventDelegates.map((delegate) => (
                  <tr key={delegate.id} className="border-b border-gray-100">
                    <td className="py-2 text-sm text-gray-900">{delegate.name}</td>
                    <td className="py-2 text-sm text-gray-600">{delegate.email}</td>
                    <td className="py-2 text-sm text-gray-600">{delegate.organization || '-'}</td>
                    <td className="py-2">
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => onEditDelegate(delegate)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit delegate"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteDelegate(delegate.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete delegate"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => onAddDelegate(formData.event_id)}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add New Delegate
            </button>
          </div>
        </div>
      )}

      {/* Form to create a new delegate if none exist */}
      {eventDelegates.length === 0 && (
        <>
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Create New Delegate</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={delegateData.name}
                  onChange={(e) => onDelegateInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    delegateErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter full name"
                />
                {delegateErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{delegateErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={delegateData.email}
                  onChange={(e) => onDelegateInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    delegateErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter email address"
                />
                {delegateErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{delegateErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={delegateData.phone || ''}
                  onChange={(e) => onDelegateInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  value={delegateData.organization || ''}
                  onChange={(e) => onDelegateInputChange('organization', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter organization"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position/Title
                </label>
                <input
                  type="text"
                  value={delegateData.position || ''}
                  onChange={(e) => onDelegateInputChange('position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter position/title"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DelegateStep;
