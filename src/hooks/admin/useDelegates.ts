import { useState, useCallback } from 'react';
import { Delegate } from '../../types';

interface UseDelegatesReturn {
  // State
  delegates: Delegate[];
  showDelegateForm: boolean;
  editingDelegate: Delegate | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  handleAddDelegate: (sessionId: string) => void;
  handleEditDelegate: (delegate: Delegate) => void;
  handleSaveDelegate: (delegateData: Omit<Delegate, 'id' | 'created_at'>) => void;
  handleDeleteDelegate: (delegateId: string) => void;
  closeDelegateForm: () => void;
  
  // For admin dashboard
  addDelegate: (delegateData: Omit<Delegate, 'id' | 'created_at'>) => void;
  updateDelegate: (id: string, delegateData: Omit<Delegate, 'id' | 'created_at'>) => void;
  deleteDelegate: (id: string) => void;
  filterDelegates: (searchTerm: string) => void;
  
  // Session-specific delegates
  getDelegatesBySession: (sessionId: string) => Delegate[];
}

// Mock implementation - in a real app, this would connect to an API
const useDelegates = (): UseDelegatesReturn => {
  const [delegates, setDelegates] = useState<Delegate[]>([]);
  const [allDelegates, setAllDelegates] = useState<Delegate[]>([]);
  const [showDelegateForm, setShowDelegateForm] = useState(false);
  const [editingDelegate, setEditingDelegate] = useState<Delegate | null>(null);
  const [, setCurrentSessionId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Used in the return value

  // Get delegates for a specific session
  const getDelegatesBySession = useCallback((sessionId: string): Delegate[] => {
    return delegates.filter(delegate => delegate.session_id === sessionId);
  }, [delegates]);

  // Add a new delegate
  const handleAddDelegate = useCallback((sessionId: string): void => {
    setCurrentSessionId(sessionId);
    setEditingDelegate(null);
    setShowDelegateForm(true);
  }, []);

  // Edit an existing delegate
  const handleEditDelegate = useCallback((delegate: Delegate): void => {
    setEditingDelegate(delegate);
    setShowDelegateForm(true);
  }, []);

  // Save delegate (create or update)
  const handleSaveDelegate = useCallback((delegateData: Omit<Delegate, 'id' | 'created_at'>): void => {
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      if (editingDelegate) {
        // Update existing delegate
        const updatedDelegates = delegates.map(d => 
          d.id === editingDelegate.id 
            ? { ...d, ...delegateData, updated_at: new Date().toISOString() } 
            : d
        );
        setDelegates(updatedDelegates);
      } else {
        // Create new delegate
        const newDelegate: Delegate = {
          ...delegateData,
          id: `delegate_${Date.now()}`,
          created_at: new Date().toISOString()
        };
        setDelegates(prev => [...prev, newDelegate]);
      }
      
      setShowDelegateForm(false);
      setEditingDelegate(null);
      setLoading(false);
    }, 500);
  }, [delegates, editingDelegate]);

  // Filter delegates by search term
  const filterDelegates = useCallback((searchTerm: string): void => {
    if (!searchTerm.trim()) {
      setDelegates(allDelegates);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = allDelegates.filter(delegate => 
      delegate.name.toLowerCase().includes(term) ||
      delegate.email.toLowerCase().includes(term) ||
      (delegate.organization && delegate.organization.toLowerCase().includes(term)) ||
      (delegate.position && delegate.position.toLowerCase().includes(term))
    );
    
    setDelegates(filtered);
  }, [allDelegates]);
  
  // Add a new delegate (for admin dashboard)
  const addDelegate = useCallback((delegateData: Omit<Delegate, 'id' | 'created_at'>): void => {
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      const newDelegate: Delegate = {
        ...delegateData,
        id: `delegate_${Date.now()}`,
        created_at: new Date().toISOString()
      };
      
      setDelegates(prev => [...prev, newDelegate]);
      setAllDelegates(prev => [...prev, newDelegate]);
      setLoading(false);
    }, 500);
  }, []);
  
  // Update an existing delegate (for admin dashboard)
  const updateDelegate = useCallback((id: string, delegateData: Omit<Delegate, 'id' | 'created_at'>): void => {
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      const updatedDelegates = delegates.map(d => 
        d.id === id 
          ? { ...d, ...delegateData, updated_at: new Date().toISOString() } 
          : d
      );
      
      setDelegates(updatedDelegates);
      setAllDelegates(updatedDelegates);
      setLoading(false);
    }, 500);
  }, [delegates]);
  
  // Delete a delegate (for admin dashboard)
  const deleteDelegate = useCallback((id: string): void => {
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      const filteredDelegates = delegates.filter(d => d.id !== id);
      setDelegates(filteredDelegates);
      setAllDelegates(filteredDelegates);
      setLoading(false);
    }, 500);
  }, [delegates]);

  // Delete a delegate
  const handleDeleteDelegate = useCallback((delegateId: string): void => {
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      setDelegates(prev => prev.filter(d => d.id !== delegateId));
      setLoading(false);
    }, 500);
  }, []);

  // Close delegate form
  const closeDelegateForm = useCallback((): void => {
    setShowDelegateForm(false);
    setEditingDelegate(null);
  }, []);

  return {
    delegates,
    showDelegateForm,
    editingDelegate,
    loading,
    error,
    handleAddDelegate,
    handleEditDelegate,
    handleSaveDelegate,
    handleDeleteDelegate,
    closeDelegateForm,
    getDelegatesBySession,
    // Admin dashboard functions
    addDelegate,
    updateDelegate,
    deleteDelegate,
    filterDelegates
  };
};

export default useDelegates;
