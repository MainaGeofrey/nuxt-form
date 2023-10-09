<template>
    <!--  <div class=" w-full max-w-[720px] mx-auto flex flex-col items-start md:space-x-7 space-y-4 ">
       <div class=" w-full flex items-center space-x-2">
            <div class="text-[#0487AF] flex items-center space-x-1">
                <span>3</span>
                <svg height="10" width="11" class=" fill-current "><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>
            </div>
            <h1 class="text-[#C23C3B]  text-xl">Date / Time</h1>
       </div>
       <div class="w-full max-w-[648px] space-y-3 ">
             <flat-pickr v-model="date" placeholder='yyyy-mm-dd' class=" w-full outline-none text-[#0487AF] border-b-2 border-[#0487AF] placeholder-[#0487AF] pb-1 font-semibold"/>
       </div>

        <div class=" flex space-x-4 items-center" @click="skip">
                 <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ">Skip</button>
                 <a class=" text-red-500 flex space-x-2 whitespace-nowrap" href="#"> <span>Press</span>  <span class=" font-bold">Enter ↵</span></a>
       </div>
    </div>-->

    <div v-if="showCalendar" >
        <CalendlyInlineWidget  v-bind="options" style="min-width: 320px; height: 700px;" />

    </div>



    <!--    <div class="calendly-inline-widget" data-url="https://calendly.com/caeappt/speakwithanexpert"
        style="min-width: 320px; height: 700px;"></div>-->
</template>

<script setup>
//import OptionSelectVue from "@/components/UI/OptionSelect.vue"
import { useFormStepsStore } from '@/store/StepsForm'
const nextstep = 5;
const formStore = useFormStepsStore();


const emit = defineEmits(['nextStep']);
//import flatPickr from 'vue-flatpickr-component';
//import 'flatpickr/dist/flatpickr.css';

const date = ref(null);
const showCalendar = ref(true)

const skip = () => {
        formStore.setNextStep(nextstep)
    emit('nextStep',8);
}


const options = {
    url: 'https://calendly.com/caeappt/speakwithanexpert',
}

useCalendlyEventListener({
    onDateAndTimeSelected: event => {
        console.log("onDateAndTimeSelected", event)
        showCalendar.value = false;
     //   skip()
    },
})

watch(showCalendar, (newValue, oldValue) => {
    console.log("new value", newValue)
    console.log("old value", oldValue)
    skip()
    
})

onMounted(() => {


console.log("calendy TTT")
    /**    const recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
            document.head.appendChild(recaptchaScript) 
            
            
            
            
            
            */



    //on click enter go skip
 /*   document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            skip()
        }
    })*/
})

/*function isCalendlyEvent(e) {
    return e.data.event && e.data.event.indexOf("calendly") === 0;
}


onMounted(() => {
    window.addEventListener("message", (e) => {
        if (isCalendlyEvent(e)) {
            console.log(e.data);
        }
    });
});


onBeforeUnmount(() => {
    window.removeEventListener("message", (e) => {
        if (isCalendlyEvent(e)) {
            console.log(e.data);

        }
    });
});*/
</script>


