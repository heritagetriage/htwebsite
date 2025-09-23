import { supabase } from '../lib/supabase';
import { Event, EventSession, TimeSlot, Booking, ContactFormData } from '../types';

// Events
export const getEvents = async (): Promise<Event[]> => {
  console.log('API: getEvents called - fetching events from database...');
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('display_order');
  
  console.log('API: getEvents response:', { data, error });
  
  if (error) {
    console.error('API: getEvents error:', error);
    throw error;
  }
  
  console.log('API: getEvents returning', data?.length || 0, 'events');
  return data || [];
};

export const createEvent = async (event: Omit<Event, 'id' | 'created_at'>): Promise<Event> => {
  console.log('API: createEvent called with data:', event);
  
  const { data, error } = await supabase
    .from('events')
    .insert(event)
    .select()
    .single();
  
  console.log('API: createEvent response:', { data, error });
  
  if (error) {
    console.error('API: createEvent error:', error);
    throw error;
  }
  
  console.log('API: createEvent success - created event:', data);
  return data;
};

export const deleteEvent = async (eventId: string): Promise<void> => {
  console.log('API: deleteEvent called with ID:', eventId);
  
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', eventId);
  
  console.log('API: deleteEvent response:', { error });
  
  if (error) {
    console.error('API: deleteEvent error:', error);
    throw error;
  }
  
  console.log('API: deleteEvent success - deleted event ID:', eventId);
};

// Event Sessions
export const getEventSessions = async (eventId: string): Promise<EventSession[]> => {
  const { data, error } = await supabase
    .from('event_sessions')
    .select('*')
    .eq('event_id', eventId)
    .eq('is_active', true);
  
  if (error) throw error;
  return data || [];
};

export const createEventSession = async (session: Omit<EventSession, 'id' | 'created_at'>): Promise<EventSession> => {
  const { data, error } = await supabase
    .from('event_sessions')
    .insert(session)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

// Time Slots
export const getTimeSlots = async (sessionId: string): Promise<TimeSlot[]> => {
  const { data, error } = await supabase
    .from('time_slots')
    .select('*')
    .eq('session_id', sessionId)
    .order('start_time');
  
  if (error) throw error;
  return data || [];
};

export const createTimeSlot = async (timeSlot: Omit<TimeSlot, 'id'>): Promise<TimeSlot> => {
  const { data, error } = await supabase
    .from('time_slots')
    .insert(timeSlot)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

// Bookings
export const createBooking = async (booking: Omit<Booking, 'id' | 'created_at'>): Promise<Booking> => {
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getBookings = async (): Promise<Booking[]> => {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      time_slot:time_slots(*)
    `)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data || [];
};

// Contact Forms
export const submitContactForm = async (contactData: Omit<ContactFormData, 'id' | 'created_at' | 'updated_at'>): Promise<ContactFormData> => {
  const { data, error } = await supabase
    .from('contact_forms')
    .insert(contactData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getContactForms = async (): Promise<ContactFormData[]> => {
  const { data, error } = await supabase
    .from('contact_forms')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data || [];
};

// Auth
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};