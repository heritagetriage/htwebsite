import { useState, useCallback, useMemo } from 'react';
import { ContactFormData } from '../../types';

interface UseContactsReturn {
  // State
  contacts: ContactFormData[];
  filteredContacts: ContactFormData[];
  searchTerm: string;
  statusFilter: string;
  showForm: boolean;
  editingContact: ContactFormData | null;
  selectedContact: ContactFormData | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  setSearchTerm: (term: string) => void;
  setStatusFilter: (filter: string) => void;
  handleAddContact: () => void;
  handleEditContact: (contact: ContactFormData) => void;
  handleSaveContact: (contactData: Omit<ContactFormData, 'id' | 'created_at' | 'updated_at'>) => void;
  handleDeleteContact: (contactId: string) => void;
  handleStatusChange: (contactId: string, newStatus: string) => void;
  handleNotesUpdate: (contactId: string, newNotes: string) => void;
  setSelectedContact: (contact: ContactFormData | null) => void;
  closeForm: () => void;
  
  // Computed values
  statusCounts: {
    total: number;
    new: number;
    inProgress: number;
    completed: number;
    closed: number;
  };
}

export const useContacts = (): UseContactsReturn => {
  const [contacts, setContacts] = useState<ContactFormData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState<ContactFormData | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filter contacts based on search and status
  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (contact.company && contact.company.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [contacts, searchTerm, statusFilter]);

  // Calculate status counts
  const statusCounts = useMemo(() => ({
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    inProgress: contacts.filter(c => c.status === 'in-progress').length,
    completed: contacts.filter(c => c.status === 'completed').length,
    closed: contacts.filter(c => c.status === 'closed').length
  }), [contacts]);

  // Actions
  const handleAddContact = useCallback(() => {
    setEditingContact(null);
    setShowForm(true);
    setError(null);
  }, []);

  const handleEditContact = useCallback((contact: ContactFormData) => {
    setEditingContact(contact);
    setShowForm(true);
    setError(null);
  }, []);

  const handleSaveContact = useCallback(async (contactData: Omit<ContactFormData, 'id' | 'created_at' | 'updated_at'>) => {
    setLoading(true);
    setError(null);

    try {
      if (editingContact) {
        // Update existing contact
        setContacts(prev => prev.map(contact => 
          contact.id === editingContact.id 
            ? { ...contact, ...contactData, updated_at: new Date().toISOString() }
            : contact
        ));
      } else {
        // Add new contact
        const newContact: ContactFormData = {
          ...contactData,
          id: `contact_${Date.now()}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setContacts(prev => [...prev, newContact]);
      }
      setShowForm(false);
      setEditingContact(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save contact');
    } finally {
      setLoading(false);
    }
  }, [editingContact]);

  const handleDeleteContact = useCallback(async (contactId: string) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      setContacts(prev => prev.filter(contact => contact.id !== contactId));
      // Close selected contact modal if it's the one being deleted
      if (selectedContact?.id === contactId) {
        setSelectedContact(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete contact');
    } finally {
      setLoading(false);
    }
  }, [selectedContact]);

  const handleStatusChange = useCallback(async (contactId: string, newStatus: string) => {
    setLoading(true);
    setError(null);

    try {
      setContacts(prev => prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, status: newStatus, updated_at: new Date().toISOString() }
          : contact
      ));
      
      // Update selected contact if it's the one being updated
      if (selectedContact?.id === contactId) {
        setSelectedContact(prev => prev ? { ...prev, status: newStatus, updated_at: new Date().toISOString() } : null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update contact status');
    } finally {
      setLoading(false);
    }
  }, [selectedContact]);

  const handleNotesUpdate = useCallback(async (contactId: string, newNotes: string) => {
    setLoading(true);
    setError(null);

    try {
      setContacts(prev => prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, notes: newNotes, updated_at: new Date().toISOString() }
          : contact
      ));
      
      // Update selected contact if it's the one being updated
      if (selectedContact?.id === contactId) {
        setSelectedContact(prev => prev ? { ...prev, notes: newNotes, updated_at: new Date().toISOString() } : null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update contact notes');
    } finally {
      setLoading(false);
    }
  }, [selectedContact]);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setEditingContact(null);
    setError(null);
  }, []);

  return {
    // State
    contacts,
    filteredContacts,
    searchTerm,
    statusFilter,
    showForm,
    editingContact,
    selectedContact,
    loading,
    error,
    
    // Actions
    setSearchTerm,
    setStatusFilter,
    handleAddContact,
    handleEditContact,
    handleSaveContact,
    handleDeleteContact,
    handleStatusChange,
    handleNotesUpdate,
    setSelectedContact,
    closeForm,
    
    // Computed values
    statusCounts
  };
};
