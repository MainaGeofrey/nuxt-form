<template>
    <div class=" w-full max-w-[720px] mx-auto flex flex-col items-start space-y-10 ">
       <div class="w-full max-w-[648px] space-y-3 ">
            <div class=" w-full border-2 border-[#ccc] py-4 px-4 cursor-pointer">
                <span class=" text-lg text-[#333]">Schedule a Call Back</span>
                <p class=" text-sm text-[#666]">Book a virtual appointment with an expert for an expedited pre-approval tailored to your specific needs</p>
            </div>
             <div class=" w-full border-2 border-[#ccc] py-4 px-4 cursor-pointer">
                <span class=" text-lg text-[#333]">Self-Serve</span>
                <p class=" text-sm text-[#666]">Enjoy a hassle-free experience using our platform and complete your pre-approval at your own pace</p>
            </div>
       </div>

       <div class=" flex space-x-4 items-center" @click="next">
                 <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ">Continue</button>
                 <a  class=" text-red-500 flex space-x-2 whitespace-nowrap" href="#"> <span>Press</span>  <span class=" font-bold">Enter ↵</span></a>
       </div>
    </div>
</template>

<script setup>
import OptionSelectVue from "@/components/UI/OptionSelect.vue"
 const emit = defineEmits(['nextStep']);

const next = () => {
    emit('nextStep');
}


onMounted(() => {
    //on click enter go next
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            next()
        }
    })
})


</script>


