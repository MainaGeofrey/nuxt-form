<template>
    <div class=" w-full max-w-[720px] mx-auto flex flex-col items-start md:space-x-7 space-y-4 ">
       <div class=" w-full flex items-center space-x-2">
            <div class="text-[#0487AF] flex items-center space-x-1">
                <span>4</span>
                <svg height="10" width="11" class=" fill-current "><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>
            </div>
            <h1 class="text-[#C23C3B]  text-xl">Checkbox Grid</h1>
       </div>
       <div class="w-full max-w-[648px] space-y-3 ">
            <div class=" w-full flex">
                <div class=" w-full"></div>
                <div class=" w-full text-center">
                    <span class=" text-[#0487AF] text-lg font-bold">Column 1</span>
                </div>
            </div>

            <div class=" w-full px-4 py-4 bg-[#0487AF] bg-opacity-10 flex items-center rounded ">
                <div class=" w-full">
                    <span class=" text-[#0487AF] text-start">Row 1</span>
                </div>
               <div class=" w-full flex">
                 <div class=" m-auto">
                      <label class="control control-checkbox">
                                <input type="checkbox" checked="checked" />
                            <div class="control_indicator"></div>
                     </label>
                 </div>
               </div>
            </div>
       </div>

        <div class=" flex space-x-4 items-center" @click="next">
                 <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ">OK</button>
                 <a class=" text-red-500 flex space-x-2 whitespace-nowrap" href="#"> <span>Press</span>  <span class=" font-bold">Enter ↵</span></a>
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
    //on click enter go skip
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            next()
        }
    })
})
</script>




