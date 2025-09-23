import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SessionFormProps } from './types';
import { useSessionForm } from './hooks/useSessionForm';
import StepIndicator from './components/StepIndicator';
import SessionDetailsStep from './components/SessionDetailsStep';
import DelegateStep from './components/DelegateStep';
import TimeSlotsStep from './components/TimeSlotsStep';
import ReviewStep from './components/ReviewStep';

const SessionForm: React.FC<SessionFormProps> = ({
  isOpen,
  onClose,
  onSave,
  session
}) => {
  const { state, actions, setShowTimeSlotForm, setEditingTimeSlot } = useSessionForm(
    isOpen,
    session,
    onSave,
    onClose
  );

  if (!isOpen) return null;

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 1:
        return (
          <SessionDetailsStep
            formData={state.formData}
            events={state.events}
            eventsLoading={state.eventsLoading}
            eventsError={state.eventsError}
            errors={state.errors}
            onInputChange={actions.handleInputChange}
          />
        );
      case 2:
        return (
          <DelegateStep
            delegateData={state.delegateData}
            eventDelegates={state.eventDelegates}
            allDelegates={state.allDelegates}
            delegateErrors={state.delegateErrors}
            formData={state.formData}
            onDelegateInputChange={actions.handleDelegateInputChange}
            onAddDelegate={actions.handleAddDelegate}
            onEditDelegate={actions.handleEditDelegate}
            onDeleteDelegate={actions.handleDeleteDelegate}
          />
        );
      case 3:
        return (
          <TimeSlotsStep
            timeSlots={state.timeSlots}
            showTimeSlotForm={state.showTimeSlotForm}
            editingTimeSlot={state.editingTimeSlot}
            timeSlotError={state.timeSlotError}
            newTimeSlot={state.newTimeSlot}
            newTimeSlotErrors={state.newTimeSlotErrors}
            onSaveTimeSlot={actions.handleSaveTimeSlot}
            onEditTimeSlot={actions.handleEditTimeSlot}
            onDeleteTimeSlot={actions.handleDeleteTimeSlot}
            onNewTimeSlotChange={actions.handleNewTimeSlotChange}
            setShowTimeSlotForm={setShowTimeSlotForm}
            setEditingTimeSlot={setEditingTimeSlot}
          />
        );
      case 4:
        return (
          <ReviewStep
            formData={state.formData}
            delegateData={state.delegateData}
            timeSlots={state.timeSlots}
            events={state.events}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (state.currentStep) {
      case 1:
        return 'Session Details';
      case 2:
        return 'Delegate Information';
      case 3:
        return 'Time Slots';
      case 4:
        return 'Review & Save';
      default:
        return 'Session Form';
    }
  };

  const getButtonText = () => {
    switch (state.currentStep) {
      case 1:
        return 'Next: Delegate Info';
      case 2:
        return 'Next: Time Slots';
      case 3:
        return 'Next: Review';
      case 4:
        return session ? 'Update Session' : 'Create Session';
      default:
        return 'Next';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {session ? 'Edit Session' : 'Create New Session'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{getStepTitle()}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 py-4 border-b border-gray-100">
          <StepIndicator currentStep={state.currentStep} totalSteps={4} />
        </div>

        {/* Form Content */}
        <form onSubmit={actions.handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto p-6">
            {renderCurrentStep()}
          </div>

          {/* Footer with Navigation */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
            <div className="flex items-center space-x-3">
              {state.currentStep > 1 && (
                <button
                  type="button"
                  onClick={actions.handlePrevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </button>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {state.currentStep < 4 && <ChevronRight className="h-4 w-4 ml-1" />}
                {getButtonText()}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
