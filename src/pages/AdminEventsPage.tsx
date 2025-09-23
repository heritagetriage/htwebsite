import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Calendar, Video } from 'lucide-react';
import { useEvents } from '../hooks/admin/useEvents';
import EventForm from '../components/Admin/EventForm';
import DeleteConfirmDialog from '../components/Admin/DeleteConfirmDialog';
import { Event } from '../types';

const AdminEventsPage: React.FC = () => {
  const {
    filteredEvents,
    showForm,
    editingEvent,
    loading,
    handleAddEvent,
    handleEditEvent,
    handleDeleteEvent,
    closeForm
  } = useEvents();

  // Delete confirmation dialog state
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Debug logging
  console.log('AdminEventsPage Debug:', {
    filteredEventsCount: filteredEvents.length,
    filteredEvents,
    loading,
    showForm,
    editingEvent
  });

  // Handle delete button click - show confirmation dialog
  const handleDeleteClick = (event: Event) => {
    console.log('AdminEventsPage: Delete clicked for event:', event);
    setEventToDelete(event);
    setShowDeleteDialog(true);
  };

  // Handle confirmed delete
  const handleConfirmDelete = async () => {
    if (!eventToDelete) return;
    
    console.log('AdminEventsPage: Confirming delete for event:', eventToDelete);
    setDeleteLoading(true);
    
    try {
      await handleDeleteEvent(eventToDelete.id);
      console.log('AdminEventsPage: Delete successful');
      setShowDeleteDialog(false);
      setEventToDelete(null);
    } catch (error) {
      console.error('AdminEventsPage: Delete failed:', error);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Handle cancel delete
  const handleCancelDelete = () => {
    console.log('AdminEventsPage: Delete cancelled');
    setShowDeleteDialog(false);
    setEventToDelete(null);
  };

  if (loading) {
    return (
      <div className="flex-1 p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events Management</h1>
          <p className="text-gray-600">Create and manage your events</p>
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Event
        </button>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Yet</h3>
          <p className="text-gray-500 mb-6">Create your first event to get started</p>
          <button
            onClick={handleAddEvent}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Create First Event
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Media
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={event.image_url}
                          alt={event.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{event.title}</div>
                          {event.description && (
                            <div className="text-sm text-gray-500 line-clamp-1">{event.description}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="h-4 w-4 mr-1" />
                          Image
                        </div>
                        {event.video_url && (
                          <div className="flex items-center text-sm text-blue-600">
                            <Video className="h-4 w-4 mr-1" />
                            Video
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {event.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {event.display_order}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(event.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={() => handleEditEvent(event)}
                          className="text-blue-600 hover:text-blue-800" 
                          title="Edit event"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(event)}
                          className="text-red-600 hover:text-red-800" 
                          title="Delete event"
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
        </div>
      )}

      {showForm && (
        <EventForm
          event={editingEvent}
          onClose={closeForm}
        />
      )}

      <DeleteConfirmDialog
        isOpen={showDeleteDialog}
        title="Delete Event"
        message="Are you sure you want to delete this event? This will permanently remove the event and all associated data."
        itemName={eventToDelete?.title}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        loading={deleteLoading}
      />
    </div>
  );
};

export default AdminEventsPage;