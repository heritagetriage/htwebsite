import { supabase } from '../lib/supabase';
import { EventSession, TimeSlot, Delegate } from '../types';

export interface SessionWithRelations extends EventSession {
  timeSlots?: TimeSlot[];
  delegates?: Delegate[];
}

export interface CreateSessionData {
  sessionData: Omit<EventSession, 'id' | 'created_at'>;
  timeSlots: Omit<TimeSlot, 'id' | 'session_id'>[];
  delegates: Omit<Delegate, 'id' | 'session_id' | 'created_at'>[];
}

class SessionsService {
  // Get all sessions
  async getSessions(): Promise<EventSession[]> {
    const { data, error } = await supabase
      .from('event_sessions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch sessions: ${error.message}`);
    }

    return data || [];
  }

  // Get session with related data
  async getSessionWithRelations(sessionId: string): Promise<SessionWithRelations | null> {
    const { data: session, error: sessionError } = await supabase
      .from('event_sessions')
      .select('*')
      .eq('id', sessionId)
      .single();

    if (sessionError) {
      throw new Error(`Failed to fetch session: ${sessionError.message}`);
    }

    if (!session) return null;

    // Get time slots
    const { data: timeSlots, error: timeSlotsError } = await supabase
      .from('time_slots')
      .select('*')
      .eq('session_id', sessionId)
      .order('start_time');

    if (timeSlotsError) {
      console.warn('Failed to fetch time slots:', timeSlotsError.message);
    }

    // Get delegates
    const { data: delegates, error: delegatesError } = await supabase
      .from('delegates')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at');

    if (delegatesError) {
      console.warn('Failed to fetch delegates:', delegatesError.message);
    }

    return {
      ...session,
      timeSlots: timeSlots || [],
      delegates: delegates || []
    };
  }

  // Create session with related data (transaction-like operation)
  async createSession(data: CreateSessionData): Promise<EventSession> {
    const { sessionData, timeSlots, delegates } = data;

    // Insert session first
    const { data: newSession, error: sessionError } = await supabase
      .from('event_sessions')
      .insert([sessionData])
      .select()
      .single();

    if (sessionError) {
      throw new Error(`Failed to create session: ${sessionError.message}`);
    }

    const sessionId = newSession.id;

    // Insert time slots if any
    if (timeSlots.length > 0) {
      const timeSlotsWithSessionId = timeSlots.map(slot => ({
        ...slot,
        session_id: sessionId
      }));

      const { error: timeSlotsError } = await supabase
        .from('time_slots')
        .insert(timeSlotsWithSessionId);

      if (timeSlotsError) {
        // Rollback session creation if time slots fail
        await this.deleteSession(sessionId);
        throw new Error(`Failed to create time slots: ${timeSlotsError.message}`);
      }
    }

    // Insert delegates if any
    if (delegates.length > 0) {
      const delegatesWithSessionId = delegates.map(delegate => ({
        ...delegate,
        session_id: sessionId
      }));

      const { error: delegatesError } = await supabase
        .from('delegates')
        .insert(delegatesWithSessionId);

      if (delegatesError) {
        // Rollback session and time slots creation if delegates fail
        await this.deleteSession(sessionId);
        throw new Error(`Failed to create delegates: ${delegatesError.message}`);
      }
    }

    return newSession;
  }

  // Update session
  async updateSession(sessionId: string, sessionData: Partial<Omit<EventSession, 'id' | 'created_at'>>): Promise<EventSession> {
    const { data, error } = await supabase
      .from('event_sessions')
      .update(sessionData)
      .eq('id', sessionId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update session: ${error.message}`);
    }

    return data;
  }

  // Delete session (cascades to time_slots and delegates due to foreign key constraints)
  async deleteSession(sessionId: string): Promise<void> {
    const { error } = await supabase
      .from('event_sessions')
      .delete()
      .eq('id', sessionId);

    if (error) {
      throw new Error(`Failed to delete session: ${error.message}`);
    }
  }

  // Toggle session status
  async toggleSessionStatus(sessionId: string): Promise<EventSession> {
    // First get current status
    const { data: currentSession, error: fetchError } = await supabase
      .from('event_sessions')
      .select('is_active')
      .eq('id', sessionId)
      .single();

    if (fetchError) {
      throw new Error(`Failed to fetch session status: ${fetchError.message}`);
    }

    // Update with opposite status
    const { data, error } = await supabase
      .from('event_sessions')
      .update({ is_active: !currentSession.is_active })
      .eq('id', sessionId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to toggle session status: ${error.message}`);
    }

    return data;
  }

  // Add time slot to existing session
  async addTimeSlot(sessionId: string, timeSlotData: Omit<TimeSlot, 'id' | 'session_id'>): Promise<TimeSlot> {
    const { data, error } = await supabase
      .from('time_slots')
      .insert([{ ...timeSlotData, session_id: sessionId }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to add time slot: ${error.message}`);
    }

    return data;
  }

  // Add delegate to existing session
  async addDelegate(sessionId: string, delegateData: Omit<Delegate, 'id' | 'session_id' | 'created_at'>): Promise<Delegate> {
    const { data, error } = await supabase
      .from('delegates')
      .insert([{ ...delegateData, session_id: sessionId }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to add delegate: ${error.message}`);
    }

    return data;
  }
}

export const sessionsService = new SessionsService();
