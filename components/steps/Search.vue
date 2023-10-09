<template>
    <div class=" w-full max-w-[720px] mx-auto flex flex-col items-start md:space-x-7 space-y-4 ">
        <div class=" w-full flex items-center space-x-2">
            <div class="text-[#0487AF] flex items-center space-x-1">
                <span>4</span>
                <svg height="10" width="11" class=" fill-current ">
                    <path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path>
                    <path d="M8 4v2H0V4z"></path>
                </svg>
            </div>
            <h1 class="text-[#C23C3B]  text-xl">Address *</h1>
        </div>




      
            <div class="w-full max-w-[648px] space-y-3 relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </span>
                <input v-model="Name" placeholder="Search..." type="search"
                    class="py-2  pl-10 w-full focus:outline-none text-[#0487AF] border-b-2 border-[#0487AF] placeholder-[#0487AF] text-lg pb-1  px-1">
            </div>
   

        <div v-if="Name" class=" flex space-x-4 items-center" @click="next">
            <button type="button"
                class="inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ">OK</button>
            <a class=" text-red-500 flex space-x-2 whitespace-nowrap" href="#"> <span>Press</span> <span
                    class=" font-bold">Enter ↵</span></a>
        </div>

        <span class=" text-red-400 text-sm" v-else>This field is required</span>


    </div>
</template>

<script setup>
import OptionSelectVue from "@/components/UI/OptionSelect.vue"
const emit = defineEmits(['nextStep']);

const date = ref(null);
const showbtn = ref(false);
const Name = ref(null);

const next = () => {
    if (validate()) emit('nextStep');
}


const validate = () => {
    if (Name.value) {
        return true
    }
    return false
}


onMounted(() => {
    //on click enter go skip
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (validate()) emit('nextStep');
        }
    })
})
</script>


