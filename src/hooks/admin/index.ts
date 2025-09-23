// Export all admin hooks for easy importing
export { useSessions } from './useSessions';
export { useBookings } from './useBookings';
export { useContacts } from './useContacts';
export { useEvents } from './useEvents';
export { useSettings } from './useSettings';

// Re-export types for convenience
export type { Event, EventSession, Booking, ContactFormData, TimeSlot } from '../../types';
