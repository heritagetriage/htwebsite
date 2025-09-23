import { useState, useCallback, useMemo, useEffect } from 'react';
import { EventSession } from '../../types';
import { sessionsService, CreateSessionData } from '../../services/sessionsService';

interface UseSessionsReturn {
  // State
  sessions: EventSession[];
  filteredSessions: EventSession[];
  searchTerm: string;
  statusFilter: string;
  showForm: boolean;
  editingSession: EventSession | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  setSearchTerm: (term: string) => void;
  setStatusFilter: (filter: string) => void;
  handleAddSession: () => void;
  handleEditSession: (session: EventSession) => void;
  handleSaveSession: (sessionData: Omit<EventSession, 'id' | 'created_at'>) => void;
  handleDeleteSession: (sessionId: string) => void;
  handleToggleStatus: (sessionId: string) => void;
  closeForm: () => void;
  
  // Computed values
  stats: {
    total: number;
    active: number;
    totalCapacity: number;
    uniqueLocations: number;
  };
}

export const useSessions = (): UseSessionsReturn => {
  const [sessions, setSessions] = useState<EventSession[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingSession, setEditingSession] = useState<EventSession | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load sessions from database on mount
  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await sessionsService.getSessions();
      setSessions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load sessions');
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter sessions based on search and status
  const filteredSessions = useMemo(() => {
    return sessions.filter(session => {
      const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (session.facilitator && session.facilitator.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || 
                           (statusFilter === 'active' && session.is_active) ||
                           (statusFilter === 'inactive' && !session.is_active);
      return matchesSearch && matchesStatus;
    });
  }, [sessions, searchTerm, statusFilter]);

  // Calculate stats
  const stats = useMemo(() => ({
    total: sessions.length,
    active: sessions.filter(s => s.is_active).length,
    totalCapacity: sessions.reduce((sum, session) => sum + (session.max_participants || 0), 0),
    uniqueLocations: new Set(sessions.map(s => s.location).filter(Boolean)).size
  }), [sessions]);

  // Actions
  const handleAddSession = useCallback(() => {
    setEditingSession(null);
    setShowForm(true);
    setError(null);
  }, []);

  const handleEditSession = useCallback((session: EventSession) => {
    setEditingSession(session);
    setShowForm(true);
    setError(null);
  }, []);

  const handleSaveSession = useCallback(async (sessionData: Omit<EventSession, 'id' | 'created_at'>) => {
    setLoading(true);
    setError(null);

    try {
      if (editingSession) {
        // Update existing session
        const updatedSession = await sessionsService.updateSession(editingSession.id, sessionData);
        setSessions(prev => prev.map(session => 
          session.id === editingSession.id ? updatedSession : session
        ));
      } else {
        // Create new session (without related data for now)
        // Note: This is a simplified version. For full SessionForm integration,
        // you'll need to pass delegates and timeSlots data here
        const createData: CreateSessionData = {
          sessionData,
          timeSlots: [], // TODO: Get from SessionForm
          delegates: []  // TODO: Get from SessionForm
        };
        const newSession = await sessionsService.createSession(createData);
        setSessions(prev => [...prev, newSession]);
      }
      setShowForm(false);
      setEditingSession(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save session');
    } finally {
      setLoading(false);
    }
  }, [editingSession]);

  const handleDeleteSession = useCallback(async (sessionId: string) => {
    if (!window.confirm('Are you sure you want to delete this session?')) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await sessionsService.deleteSession(sessionId);
      setSessions(prev => prev.filter(session => session.id !== sessionId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete session');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleToggleStatus = useCallback(async (sessionId: string) => {
    setLoading(true);
    setError(null);

    try {
      const updatedSession = await sessionsService.toggleSessionStatus(sessionId);
      setSessions(prev => prev.map(session => 
        session.id === sessionId ? updatedSession : session
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update session status');
    } finally {
      setLoading(false);
    }
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setEditingSession(null);
    setError(null);
  }, []);

  return {
    // State
    sessions,
    filteredSessions,
    searchTerm,
    statusFilter,
    showForm,
    editingSession,
    loading,
    error,
    
    // Actions
    setSearchTerm,
    setStatusFilter,
    handleAddSession,
    handleEditSession,
    handleSaveSession,
    handleDeleteSession,
    handleToggleStatus,
    closeForm,
    
    // Computed values
    stats
  };
};
