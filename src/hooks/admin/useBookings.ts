import { useState, useCallback, useMemo } from 'react';
import { Booking } from '../../types';

interface UseBookingsReturn {
  // State
  bookings: Booking[];
  filteredBookings: Booking[];
  searchTerm: string;
  statusFilter: string;
  showForm: boolean;
  editingBooking: Booking | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  setSearchTerm: (term: string) => void;
  setStatusFilter: (filter: string) => void;
  handleAddBooking: () => void;
  handleEditBooking: (booking: Booking) => void;
  handleSaveBooking: (bookingData: Omit<Booking, 'id' | 'created_at'>) => void;
  handleDeleteBooking: (bookingId: string) => void;
  handleStatusChange: (bookingId: string, newStatus: Booking['status']) => void;
  closeForm: () => void;
  
  // Computed values
  statusCounts: {
    total: number;
    confirmed: number;
    pending: number;
    waitlisted: number;
    cancelled: number;
  };
}

// Bookings will be loaded from API

// Time slots will be loaded from API

export const useBookings = (): UseBookingsReturn => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filter bookings based on search and status
  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const matchesSearch = booking.participant_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           booking.participant_email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [bookings, searchTerm, statusFilter]);

  // Calculate status counts
  const statusCounts = useMemo(() => ({
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    waitlisted: bookings.filter(b => b.status === 'waitlisted').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  }), [bookings]);

  // Actions
  const handleAddBooking = useCallback(() => {
    setEditingBooking(null);
    setShowForm(true);
    setError(null);
  }, []);

  const handleEditBooking = useCallback((booking: Booking) => {
    setEditingBooking(booking);
    setShowForm(true);
    setError(null);
  }, []);

  const handleSaveBooking = useCallback(async (bookingData: Omit<Booking, 'id' | 'created_at'>) => {
    setLoading(true);
    setError(null);

    try {
      if (editingBooking) {
        // Update existing booking
        setBookings(prev => prev.map(booking => 
          booking.id === editingBooking.id 
            ? { ...booking, ...bookingData }
            : booking
        ));
      } else {
        // Add new booking
        const newBooking: Booking = {
          ...bookingData,
          id: `booking_${Date.now()}`,
          created_at: new Date().toISOString()
        };
        setBookings(prev => [...prev, newBooking]);
      }
      setShowForm(false);
      setEditingBooking(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save booking');
    } finally {
      setLoading(false);
    }
  }, [editingBooking]);

  const handleDeleteBooking = useCallback(async (bookingId: string) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      setBookings(prev => prev.filter(booking => booking.id !== bookingId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete booking');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleStatusChange = useCallback(async (bookingId: string, newStatus: Booking['status']) => {
    setLoading(true);
    setError(null);

    try {
      setBookings(prev => prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: newStatus }
          : booking
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update booking status');
    } finally {
      setLoading(false);
    }
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setEditingBooking(null);
    setError(null);
  }, []);

  return {
    // State
    bookings,
    filteredBookings,
    searchTerm,
    statusFilter,
    showForm,
    editingBooking,
    loading,
    error,
    
    // Actions
    setSearchTerm,
    setStatusFilter,
    handleAddBooking,
    handleEditBooking,
    handleSaveBooking,
    handleDeleteBooking,
    handleStatusChange,
    closeForm,
    
    // Computed values
    statusCounts
  };
};
