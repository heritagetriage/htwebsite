import { useState, useMemo, useCallback, useEffect } from 'react';
import { Event } from '../../types';
import { getEvents, deleteEvent } from '../../services/api';

interface UseEventsReturn {
  // State
  events: Event[];
  searchTerm: string;
  statusFilter: string;
  showForm: boolean;
  editingEvent: Event | null;
  loading: boolean;
  error: string | null;
  
  // Filtered data
  filteredEvents: Event[];
  
  // Actions
  setSearchTerm: (term: string) => void;
  setStatusFilter: (filter: string) => void;
  handleAddEvent: () => void;
  handleEditEvent: (event: Event) => void;
  handleSaveEvent: (eventData: Omit<Event, 'id' | 'created_at'>) => void;
  handleDeleteEvent: (eventId: string) => void;
  handleToggleStatus: (eventId: string) => void;
  handleReorderEvent: (eventId: string, newOrder: number) => void;
  closeForm: () => void;
  
  // Computed values
  statusCounts: {
    total: number;
    active: number;
    inactive: number;
  };
}

// Events will be loaded from API

export const useEvents = (): UseEventsReturn => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load events from API on mount
  useEffect(() => {
    const loadEvents = async () => {
      console.log('useEvents: Starting to load events...');
      setLoading(true);
      setError(null);
      
      try {
        const eventsData = await getEvents();
        console.log('useEvents: Loaded events from API:', eventsData);
        setEvents(eventsData);
      } catch (err: any) {
        console.error('useEvents: Error loading events:', err);
        setError(err.message || 'Failed to load events');
      } finally {
        setLoading(false);
        console.log('useEvents: Loading complete');
      }
    };

    loadEvents();
  }, []);

  // Filter events based on search and status
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || 
                           (statusFilter === 'active' && event.is_active) ||
                           (statusFilter === 'inactive' && !event.is_active);
      return matchesSearch && matchesStatus;
    });
  }, [events, searchTerm, statusFilter]);

  // Calculate status counts
  const statusCounts = useMemo(() => ({
    total: events.length,
    active: events.filter(e => e.is_active).length,
    inactive: events.filter(e => !e.is_active).length
  }), [events]);

  // Actions
  const handleAddEvent = useCallback(() => {
    setEditingEvent(null);
    setShowForm(true);
    setError(null);
  }, []);

  const handleEditEvent = useCallback((event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
    setError(null);
  }, []);

  const handleSaveEvent = useCallback(async (eventData: Omit<Event, 'id' | 'created_at'>) => {
    setLoading(true);
    setError(null);

    try {
      if (editingEvent) {
        // Update existing event
        setEvents(prev => prev.map(event => 
          event.id === editingEvent.id 
            ? { ...event, ...eventData }
            : event
        ));
      } else {
        // Add new event
        const newEvent: Event = {
          ...eventData,
          id: Date.now().toString(),
          created_at: new Date().toISOString()
        };
        setEvents(prev => [...prev, newEvent]);
      }
      setShowForm(false);
      setEditingEvent(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save event');
    } finally {
      setLoading(false);
    }
  }, [editingEvent]);

  const handleDeleteEvent = useCallback(async (eventId: string) => {
    console.log('useEvents: handleDeleteEvent called with ID:', eventId);
    setLoading(true);
    setError(null);

    try {
      // Call API to delete from database
      await deleteEvent(eventId);
      console.log('useEvents: Event deleted from database, updating local state');
      
      // Update local state to remove the deleted event
      setEvents(prev => prev.filter(event => event.id !== eventId));
      console.log('useEvents: Local state updated, event removed');
    } catch (err) {
      console.error('useEvents: Error deleting event:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete event');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleToggleStatus = useCallback(async (eventId: string) => {
    setLoading(true);
    setError(null);

    try {
      setEvents(prev => prev.map(event => 
        event.id === eventId 
          ? { ...event, is_active: !event.is_active }
          : event
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update event status');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleReorderEvent = useCallback(async (eventId: string, newOrder: number) => {
    setLoading(true);
    setError(null);

    try {
      setEvents(prev => prev.map(event => 
        event.id === eventId 
          ? { ...event, display_order: newOrder }
          : event
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reorder event');
    } finally {
      setLoading(false);
    }
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setEditingEvent(null);
    setError(null);
  }, []);

  return {
    // State
    events,
    searchTerm,
    statusFilter,
    showForm,
    editingEvent,
    loading,
    error,
    
    // Filtered data
    filteredEvents,
    
    // Actions
    setSearchTerm,
    setStatusFilter,
    handleAddEvent,
    handleEditEvent,
    handleSaveEvent,
    handleDeleteEvent,
    handleToggleStatus,
    handleReorderEvent,
    closeForm,
    
    // Computed values
    statusCounts
  };
};
