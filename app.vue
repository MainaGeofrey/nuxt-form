<template>
  <StepsContainer ref="StepsContainerRef" :count="count">
    <template #step1>
      <Step1 @nextStep="next" />
    </template>
    <template #step2>
      <Step2 @nextStep="next" />
    </template>
    <template #step3>
      <Step3 @nextStep="next" />
    </template>
    <template #step4>

      <Step4 @nextStep="next" />
    </template>
    <template #step5>
      <Step5 @nextStep="next" />
    </template>
    <template #step6>
      <Step6 @nextStep="next" />
    </template>

    <template #step7>

      <Step7 @nextStep="next" />
    </template>

    <template #step8>
      <Step8 @nextStep="next" />
    </template>

    <template #step9>
      <Step9 @nextStep="next" />
    </template>

  </StepsContainer>
</template>



<script setup>

import Step1 from '@/components/steps/VehicleType.vue';
import Step2 from '@/components/steps/BudgetRange.vue';
import Step3 from '@/components/steps/DeliveryPickup.vue';
import Step4 from '@/components/steps/Search.vue';
import Step5 from '@/components/steps/OTP.vue';
import Step6 from '@/components/steps/ScheduleServe.vue';
import Step7 from '@/components/steps/Calendy.vue';
import Step8 from '@/components/steps/Step5.vue';
import Step9 from '@/components/steps/Step6.vue';

import { useFormStepsStore } from '@/store/StepsForm'
const count = 9; // number of steps


import StepsContainer from '@/components/StepsContainer.vue';
const StepsContainerRef = ref(null);
const formStore = useFormStepsStore();
const currentStep = formStore.currentStep
const hideCalendyStep = ref(false);

const next = (currentStep) => {

  console.log("current step **", currentStep)
  if (currentStep === 8) {
    console.log("mmmm")
    hideCalendyStep.value = true;
  }
  StepsContainerRef.value.nextStep();
}

const prev = () => {
  StepsContainerRef.value.prevStep();
}

</script>