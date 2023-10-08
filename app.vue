<template>
  <StepsContainer ref="StepsContainerRef"  :count="count">
    <template #step1>
     <Step1 @nextStep="next"/>
    </template>
    <template #step2>
      <Step2 @nextStep="next"/>
    </template>
    <template #step3>
      <Step3 @nextStep="next"/>
    </template>
    <template #step4>
       <Step4 @nextStep="next"/>
    </template>
     <template #step5>
       <Step5 @nextStep="next"/>
    </template>
      <template #step6>
       <Step6 @nextStep="next"/>
    </template>
  </StepsContainer>
</template>



<script setup>

import Step1 from '@/components/steps/Step1.vue';
import Step2 from '@/components/steps/Step2.vue';
import Step3 from '@/components/steps/Step3.vue';
import Step4 from '@/components/steps/Step4.vue';
import Step5 from '@/components/steps/Step5.vue';
import Step6 from '@/components/steps/Step6.vue';

const count = 6; // number of steps


import StepsContainer from '@/components/StepsContainer.vue';
const StepsContainerRef = ref(null);

const next = () => {
  StepsContainerRef.value.nextStep();
}

const prev = () => {
  StepsContainerRef.value.prevStep();
}

</script>