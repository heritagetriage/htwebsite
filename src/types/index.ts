export interface Event {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  video_url?: string;
  registration_link?: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

export interface EventSession {
  id: string;
  event_id: string;
  title: string;
  description?: string;
  location?: string;
  facilitator?: string;
  max_participants?: number;
  is_active: boolean;
  created_at: string;
}

export interface TimeSlot {
  id: string;
  session_id: string;
  start_time: string;
  end_time: string;
}

export interface Booking {
  id: string;
  time_slot_id: string;
  event_id?: string;
  session_id?: string;
  booking_date?: string;
  participant_name: string;
  participant_email: string;
  participant_phone?: string;
  status: 'confirmed' | 'cancelled' | 'waitlisted' | 'pending';
  created_at: string;
  time_slot?: TimeSlot;
}

export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  status?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Delegate {
  id: string;
  session_id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  position?: string;
  bio?: string;
  photo_url?: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
}