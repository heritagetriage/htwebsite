import { EventSession, Event, Delegate, TimeSlot } from '../../../types';

export interface SessionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (session: Omit<EventSession, 'id' | 'created_at'>) => void;
  session?: EventSession | null;
}

export interface SessionFormData {
  event_id: string;
  title: string;
  description: string;
  location: string;
  facilitator: string;
  max_participants: string;
  is_active: boolean;
}

export interface DelegateData {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  position?: string;
}

export interface TimeSlotData {
  id?: string;
  start_time: string;
  end_time: string;
  session_id?: string;
}

export interface SessionFormState {
  // Form data
  formData: SessionFormData;
  delegateData: DelegateData;
  timeSlots: TimeSlotData[];
  
  // UI state
  currentStep: number;
  showTimeSlotForm: boolean;
  editingTimeSlot: TimeSlotData | null;
  
  // Events data
  events: Event[];
  eventsLoading: boolean;
  eventsError: string | null;
  
  // Delegates data
  allDelegates: Delegate[];
  eventDelegates: Delegate[];
  
  // Validation errors
  errors: Record<string, string>;
  delegateErrors: Record<string, string>;
  timeSlotError: string;
  
  // New time slot form
  newTimeSlot: {
    start_time: string;
    end_time: string;
  };
  newTimeSlotErrors: Record<string, string>;
}

export interface SessionFormActions {
  // Form navigation
  handleNextStep: () => void;
  handlePrevStep: () => void;
  setCurrentStep: (step: number) => void;
  
  // Form data handlers
  handleInputChange: (field: string, value: string | boolean) => void;
  handleDelegateInputChange: (field: string, value: string) => void;
  
  // Delegate handlers
  handleAddDelegate: (eventId: string) => void;
  handleEditDelegate: (delegate: Delegate) => void;
  handleDeleteDelegate: (delegateId: string) => void;
  
  // Time slot handlers
  handleSaveTimeSlot: (timeSlotData: Omit<TimeSlot, 'id' | 'session_id'>) => void;
  handleEditTimeSlot: (timeSlot: TimeSlotData) => void;
  handleDeleteTimeSlot: (timeSlotId: string) => void;
  handleNewTimeSlotChange: (field: string, value: string) => void;
  
  // Form submission
  handleSubmit: (e: React.FormEvent) => void;
  
  // Validation
  validateSessionDetails: () => boolean;
  validateDelegateDetails: () => boolean;
  validateTimeSlots: () => boolean;
}

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface SessionDetailsStepProps {
  formData: SessionFormData;
  events: Event[];
  eventsLoading: boolean;
  eventsError: string | null;
  errors: Record<string, string>;
  onInputChange: (field: string, value: string | boolean) => void;
}

export interface DelegateStepProps {
  delegateData: DelegateData;
  eventDelegates: Delegate[];
  allDelegates: Delegate[];
  delegateErrors: Record<string, string>;
  formData: SessionFormData;
  onDelegateInputChange: (field: string, value: string) => void;
  onAddDelegate: (eventId: string) => void;
  onEditDelegate: (delegate: Delegate) => void;
  onDeleteDelegate: (delegateId: string) => void;
}

export interface TimeSlotsStepProps {
  timeSlots: TimeSlotData[];
  showTimeSlotForm: boolean;
  editingTimeSlot: TimeSlotData | null;
  timeSlotError: string;
  newTimeSlot: {
    start_time: string;
    end_time: string;
  };
  newTimeSlotErrors: Record<string, string>;
  onSaveTimeSlot: (timeSlotData: Omit<TimeSlot, 'id' | 'session_id'>) => void;
  onEditTimeSlot: (timeSlot: TimeSlotData) => void;
  onDeleteTimeSlot: (timeSlotId: string) => void;
  onNewTimeSlotChange: (field: string, value: string) => void;
  setShowTimeSlotForm: (show: boolean) => void;
  setEditingTimeSlot: (timeSlot: TimeSlotData | null) => void;
}

export interface ReviewStepProps {
  formData: SessionFormData;
  delegateData: DelegateData;
  timeSlots: TimeSlotData[];
  events: Event[];
}
