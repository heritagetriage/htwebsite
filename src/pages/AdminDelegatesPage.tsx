import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Delegate } from '../types';
import DelegateForm from '../components/Admin/DelegateForm';
import useDelegates from '../hooks/admin/useDelegates';

const AdminDelegatesPage: React.FC = () => {
  const { 
    delegates, 
    loading, 
    error, 
    addDelegate, 
    updateDelegate, 
    deleteDelegate, 
    filterDelegates 
  } = useDelegates();

  // Add some mock data when the component mounts if delegates array is empty
  useEffect(() => {
    if (delegates.length === 0) {
      // Add sample delegates for testing
      const sampleDelegates = [
        {
          name: 'John Smith',
          email: 'john.smith@example.com',
          phone: '+1-555-123-4567',
          organization: 'Global Health Initiative',
          position: 'Health Policy Advisor',
          bio: 'Expert in global health policy with 10+ years of experience.',
          session_id: 'session_123',
          photo_url: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          name: 'Sarah Johnson',
          email: 'sarah.j@example.com',
          phone: '+1-555-987-6543',
          organization: 'Community Health Partners',
          position: 'Program Director',
          bio: 'Leading community health initiatives in underserved areas.',
          session_id: 'session_124',
          photo_url: 'https://randomuser.me/api/portraits/women/44.jpg'
        }
      ];
      
      // Add sample delegates one by one
      sampleDelegates.forEach(delegate => {
        addDelegate(delegate);
      });
    }
  }, [delegates.length, addDelegate]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentDelegate, setCurrentDelegate] = useState<Delegate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<{type: 'success' | 'error'; message: string} | null>(null);
  
  // Auto-hide notifications after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterDelegates(term);
  };

  // Open form to add new delegate
  const handleAddNew = () => {
    setCurrentDelegate(null);
    setIsFormOpen(true);
  };

  // Open form to edit delegate
  const handleEdit = (delegate: Delegate) => {
    setCurrentDelegate(delegate);
    setIsFormOpen(true);
  };

  // Handle save delegate
  const handleSave = (delegateData: Omit<Delegate, 'id' | 'created_at'>) => {
    try {
      if (currentDelegate) {
        updateDelegate(currentDelegate.id, delegateData);
        setNotification({ type: 'success', message: `Delegate ${delegateData.name} updated successfully` });
      } else {
        addDelegate(delegateData);
        setNotification({ type: 'success', message: `Delegate ${delegateData.name} added successfully` });
      }
      setIsFormOpen(false);
    } catch (error) {
      setNotification({ type: 'error', message: `Failed to save delegate: ${error}` });
    }
  };

  // Handle delete confirmation
  const handleDeleteConfirm = (id: string) => {
    setConfirmDelete(id);
  };

  // Handle delete delegate
  const handleDelete = () => {
    if (confirmDelete) {
      try {
        // Find delegate name before deletion for notification
        const delegateToDelete = delegates.find(d => d.id === confirmDelete);
        deleteDelegate(confirmDelete);
        setNotification({ 
          type: 'success', 
          message: `Delegate ${delegateToDelete?.name || ''} deleted successfully` 
        });
        setConfirmDelete(null);
      } catch (error) {
        setNotification({ type: 'error', message: `Failed to delete delegate: ${error}` });
      }
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Notification Toast */}
        {notification && (
          <div 
            className={`mb-4 p-4 rounded-md ${notification.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} flex justify-between items-center`}
            role="alert"
          >
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <span>{notification.message}</span>
            </div>
            <button 
              onClick={() => setNotification(null)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Delegates</h1>
          <button
            onClick={handleAddNew}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Delegate
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search delegates..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-2 text-gray-600">Loading delegates...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-red-500">Error loading delegates: {error}</p>
            </div>
          ) : delegates.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No delegates found. Add your first delegate!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Organization
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {delegates.map((delegate) => (
                    <tr key={delegate.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {delegate.photo_url ? (
                            <img
                              className="h-10 w-10 rounded-full mr-3"
                              src={delegate.photo_url}
                              alt={delegate.name}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                              <span className="text-gray-500 font-medium">
                                {delegate.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                          <div className="text-sm font-medium text-gray-900">
                            {delegate.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {delegate.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {delegate.organization || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {delegate.position || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleEdit(delegate)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit delegate"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteConfirm(delegate.id)}
                            className="text-red-600 hover:text-red-900"
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
          )}
        </div>
      </div>

      {/* Delegate Form Modal */}
      {isFormOpen && (
        <DelegateForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSave={handleSave}
          delegate={currentDelegate}
          sessionId=""
        />
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this delegate? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDelegatesPage;
