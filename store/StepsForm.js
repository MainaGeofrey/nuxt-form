import { defineStore } from 'pinia';

export const useFormStepsStore = defineStore({
    id: 'formSteps',
    state: () => ({
        currentStep: 1, // Initialize with the first step
        totalSteps: 6, // Total number of steps
    }),
    actions: {
        // Method to move to the next step
        nextStep() {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
            }
        },

        // Method to move to the previous step
        previousStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },

        // Method to set the current step directly
        setCurrentStep(stepNumber) {
            if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
                this.currentStep = stepNumber;
            }
        },
        // Method to set the current step to the next step
        setNextStep(nextStep) {
            this.setCurrentStep(nextStep) 
        }
    },
});
