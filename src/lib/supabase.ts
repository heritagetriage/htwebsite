import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          image_url: string;
          video_url: string | null;
          registration_link: string | null;
          is_active: boolean;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['events']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['events']['Insert']>;
      };
      event_sessions: {
        Row: {
          id: string;
          event_id: string;
          title: string;
          description: string | null;
          location: string | null;
          facilitator: string | null;
          max_participants: number | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['event_sessions']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['event_sessions']['Insert']>;
      };
      time_slots: {
        Row: {
          id: string;
          session_id: string;
          start_time: string;
          end_time: string;
        };
        Insert: Omit<Database['public']['Tables']['time_slots']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['time_slots']['Insert']>;
      };
      bookings: {
        Row: {
          id: string;
          time_slot_id: string;
          event_id: string | null;
          session_id: string | null;
          booking_date: string | null;
          participant_name: string;
          participant_email: string;
          participant_phone: string | null;
          status: 'confirmed' | 'cancelled' | 'waitlisted' | 'pending';
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['bookings']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['bookings']['Insert']>;
      };
      contact_forms: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          phone: string | null;
          message: string;
          status: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string | null;
        };
        Insert: Omit<Database['public']['Tables']['contact_forms']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['contact_forms']['Insert']>;
      };
    };
  };
};