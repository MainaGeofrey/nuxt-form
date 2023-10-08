<template>
    <div class=" w-full h-screen flex px-4 md:px-0 relative">
        <div class="m-auto w-full vff-animate fade-to-up" v-if="index < count + 1" >
            <transition :name="animation">
                <slot :name="currentStep" ref='stepRef'></slot>
            </transition>
        </div>

        <div class=" m-auto" v-else>
            <p class=" text-[#0487AF] text-lg text-center">
                Thank you for your message. We will get in touch with you shortly
            </p>
        </div>


       <div class="absolute   bottom-1 right-1 flex max-w-[483px] w-full">
            <div class=" w-full max-w-[200px] bg-white px-2 py-1 flex flex-col items-start">
                <span class=" text-xs">{{persentage}}% completed</span>
                <div class=" w-full bg-red-500 bg-opacity-30 h-1">
                    <div class=" bg-red-500 h-full" :style="{width:persentage + '%'}">

                    </div>
                </div>
            </div>
            <div class=" w-full bg-red-500 px-2 py-1 flex items-center justify-between">
                <span class=" text-white text-lg">Powerd by example</span>
                <div class=" flex items-center space-x-2">
                    <button @click="nextStep" class=" text-white" >
                        <svg class=" fill-current w-6 h-6 rotate-180" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="78.833 5.5 42.333 28.334" aria-hidden="true"><path d="M117.963,8.031l-17.961,20.529L82.042,8.031l-2.041,1.784l18.98,21.695c0.258,0.295,0.629,0.463,1.02,0.463c0.39,0,0.764-0.168,1.02-0.463l18.98-21.695L117.963,8.031z"></path></svg>
                    </button>
                    <button @click="prevStep" class=" text-white"  >
                        <svg class=" fill-current  w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="78.833 5.5 42.333 28.334" aria-hidden="true"><path d="M117.963,8.031l-17.961,20.529L82.042,8.031l-2.041,1.784l18.98,21.695c0.258,0.295,0.629,0.463,1.02,0.463c0.39,0,0.764-0.168,1.02-0.463l18.98-21.695L117.963,8.031z"></path></svg>
                    </button>
                </div>
            </div>
        </div>

      
      
    </div>
</template>
  


<script setup>

const props = defineProps({
    count: {
        type: Number,
        required: true,
    },
});

const animation = ref('slide-down');
const currentStep = ref('step1');
const index = ref(1);

const nextStep = () => {
    animation.value = 'slide-up';
    if (index.value < props.count + 1) {
        index.value++;
        currentStep.value = `step${index.value}`;
    }   
   
};

const prevStep = () => {
    animation.value = 'side-down';
    if (index.value > 1) {
        index.value--;
        currentStep.value = `step${index.value}`;
    }
    
};


const persentage = computed(() => {
    if(index.value == 1) return 0
    return ((index.value / (props.count + 1)) * 100).toFixed(0);
});


onMounted(() => {
    animation.value = 'slide-up';
});

//get slots number
const slots = ref(0);

onMounted(() => {
});




defineExpose({
    nextStep,
    prevStep,
});
</script>



