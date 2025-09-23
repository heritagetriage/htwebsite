import { useState, useEffect, useCallback } from 'react';
import { Event, Delegate, TimeSlot } from '../../../../types';
import { getEvents } from '../../../../services/api';
import { 
  SessionFormState, 
  SessionFormActions, 
  SessionFormData, 
  DelegateData, 
  TimeSlotData 
} from '../types';

export const useSessionForm = (
  isOpen: boolean,
  session: any,
  onSave: (session: any) => void,
  onClose: () => void
) => {
  // ALL HOOKS DECLARED AT TOP LEVEL IN CONSISTENT ORDER
  // State hooks
  const [formData, setFormData] = useState<SessionFormData>({
    event_id: '',
    title: '',
    description: '',
    location: '',
    facilitator: '',
    max_participants: '20',
    is_active: true
  });
  
  const [delegateData, setDelegateData] = useState<DelegateData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    position: ''
  });
  
  const [timeSlots, setTimeSlots] = useState<TimeSlotData[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showTimeSlotForm, setShowTimeSlotForm] = useState(false);
  const [editingTimeSlot, setEditingTimeSlot] = useState<TimeSlotData | null>(null);
  
  // Events state
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventsError, setEventsError] = useState<string | null>(null);
  
  // Delegates state
  const [allDelegates, setAllDelegates] = useState<Delegate[]>([]);
  const [eventDelegates, setEventDelegates] = useState<Delegate[]>([]);
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [delegateErrors, setDelegateErrors] = useState<Record<string, string>>({});
  const [timeSlotError, setTimeSlotError] = useState<string>('');
  
  // New time slot form state
  const [newTimeSlot, setNewTimeSlot] = useState({
    start_time: '',
    end_time: ''
  });
  const [newTimeSlotErrors, setNewTimeSlotErrors] = useState<Record<string, string>>({});

  // ALL useEffect hooks come after all useState hooks
  // Load events from database
  useEffect(() => {
    const loadEvents = async () => {
      setEventsLoading(true);
      setEventsError(null);
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (err) {
        setEventsError(err instanceof Error ? err.message : 'Failed to load events');
      } finally {
        setEventsLoading(false);
      }
    };

    if (isOpen) {
      loadEvents();
    }
  }, [isOpen]);

  // Initialize form data when editing an existing session
  useEffect(() => {
    if (session) {
      setFormData({
        event_id: session.event_id,
        title: session.title,
        description: session.description || '',
        location: session.location || '',
        facilitator: session.facilitator || '',
        max_participants: session.max_participants?.toString() || '20',
        is_active: session.is_active
      });
      setCurrentStep(4);
    } else {
      setFormData({
        event_id: '',
        title: '',
        description: '',
        location: '',
        facilitator: '',
        max_participants: '20',
        is_active: true
      });
      setCurrentStep(1);
    }
    
    setErrors({});
    setDelegateErrors({});
    setTimeSlotError('');
  }, [session, isOpen]);

  // Handler functions (all useCallback hooks come after useEffect)
  const handleInputChange = useCallback((field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when field is edited
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
    
    // Handle event selection
    if (field === 'event_id' && typeof value === 'string') {
      const filteredDelegates = allDelegates.filter(delegate => 
        delegate.session_id.startsWith(value)
      );
      setEventDelegates(filteredDelegates);
    }
  }, [errors, allDelegates]);

  const handleDelegateInputChange = useCallback((field: string, value: string) => {
    setDelegateData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when field is edited
    if (delegateErrors[field]) {
      setDelegateErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [delegateErrors]);

  const handleAddDelegate = useCallback((eventId: string) => {
    console.log('Add delegate clicked for event:', eventId);
  }, []);

  const handleEditDelegate = useCallback((delegate: Delegate) => {
    console.log('Edit delegate:', delegate);
  }, []);

  const handleDeleteDelegate = useCallback((delegateId: string) => {
    console.log('Delete delegate:', delegateId);
    setAllDelegates(prev => prev.filter(d => d.id !== delegateId));
  }, []);

  const handleSaveTimeSlot = useCallback((timeSlotData: Omit<TimeSlot, 'id' | 'session_id'>) => {
    if (editingTimeSlot && editingTimeSlot.id) {
      // Update existing time slot
      setTimeSlots(prev => 
        prev.map(slot => 
          slot.id === editingTimeSlot.id 
            ? { ...timeSlotData, id: editingTimeSlot.id } 
            : slot
        )
      );
    } else {
      // Add new time slot
      const newTimeSlotItem = {
        ...timeSlotData,
        id: `slot_${Date.now()}`
      };
      setTimeSlots(prev => [...prev, newTimeSlotItem]);
    }
    setShowTimeSlotForm(false);
    setEditingTimeSlot(null);
    setTimeSlotError('');
  }, [editingTimeSlot]);

  const handleEditTimeSlot = useCallback((timeSlot: TimeSlotData) => {
    const timeSlotWithSessionId = {
      ...timeSlot,
      session_id: timeSlot.session_id || ''
    };
    setEditingTimeSlot(timeSlotWithSessionId);
    setShowTimeSlotForm(true);
  }, []);

  const handleDeleteTimeSlot = useCallback((timeSlotId: string) => {
    setTimeSlots(prev => prev.filter(slot => slot.id !== timeSlotId));
  }, []);

  const handleNewTimeSlotChange = useCallback((field: string, value: string) => {
    setNewTimeSlot(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (newTimeSlotErrors[field]) {
      setNewTimeSlotErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [newTimeSlotErrors]);

  // Validation functions
  const validateSessionDetails = useCallback(() => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.event_id) {
      newErrors.event_id = 'Event is required';
    }
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const validateDelegateDetails = useCallback(() => {
    // If we have existing delegates for this event, no need to validate new delegate form
    if (eventDelegates.length > 0) {
      return true;
    }
    
    const newErrors: Record<string, string> = {};
    
    if (!delegateData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!delegateData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(delegateData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setDelegateErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [eventDelegates.length, delegateData]);

  const validateTimeSlots = useCallback(() => {
    if (timeSlots.length === 0) {
      setTimeSlotError('At least one time slot is required');
      return false;
    }
    setTimeSlotError('');
    return true;
  }, [timeSlots.length]);

  // Navigation functions
  const handleNextStep = useCallback(() => {
    if (currentStep === 1) {
      if (validateSessionDetails()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateDelegateDetails()) {
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      if (validateTimeSlots()) {
        setCurrentStep(4);
      }
    }
  }, [currentStep, validateSessionDetails, validateDelegateDetails, validateTimeSlots]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  // Form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 4) {
      // Final submission
      const sessionData = {
        event_id: formData.event_id,
        title: formData.title.trim(),
        description: formData.description.trim() || undefined,
        location: formData.location.trim() || undefined,
        facilitator: formData.facilitator.trim() || undefined,
        max_participants: formData.max_participants ? Number(formData.max_participants) : undefined,
        is_active: formData.is_active
      };
      
      onSave(sessionData);
      onClose();
    } else {
      handleNextStep();
    }
  }, [currentStep, formData, onSave, onClose, handleNextStep]);

  // Return state and actions
  const state: SessionFormState = {
    formData,
    delegateData,
    timeSlots,
    currentStep,
    showTimeSlotForm,
    editingTimeSlot,
    events,
    eventsLoading,
    eventsError,
    allDelegates,
    eventDelegates,
    errors,
    delegateErrors,
    timeSlotError,
    newTimeSlot,
    newTimeSlotErrors
  };

  const actions: SessionFormActions = {
    handleNextStep,
    handlePrevStep,
    setCurrentStep,
    handleInputChange,
    handleDelegateInputChange,
    handleAddDelegate,
    handleEditDelegate,
    handleDeleteDelegate,
    handleSaveTimeSlot,
    handleEditTimeSlot,
    handleDeleteTimeSlot,
    handleNewTimeSlotChange,
    handleSubmit,
    validateSessionDetails,
    validateDelegateDetails,
    validateTimeSlots
  };

  return { state, actions, setShowTimeSlotForm, setEditingTimeSlot };
};
