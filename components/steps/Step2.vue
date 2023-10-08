<template>
    <div class=" w-full max-w-[720px] mx-auto flex flex-col items-start md:space-x-7 space-y-4 ">
       <div class=" w-full flex items-center space-x-2">
            <div class="text-[#0487AF] flex items-center space-x-1">
                <span>2</span>
                <svg height="10" width="11" class=" fill-current "><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>
            </div>
            <h1 class="text-[#C23C3B]  text-xl">What is your Budget Range?*</h1>
       </div>
       <div class="w-full max-w-[648px] space-y-3 ">
            <OptionSelectVue :class="{'flash':item.is_active}" v-for="(item,index,key) in options" :key="key" :title="item.title" :is_active="item.is_active" @click="select(item)" />
            <span class=" text-red-400 text-sm">Choose one option</span>
       </div>
    </div>
</template>

<script setup>
import OptionSelectVue from "@/components/UI/OptionSelect.vue"
 const emit = defineEmits(['nextStep']);

const options = ref([
    {
        title: "150-200 Bi-Weekly",
        is_active: false,
    },
    {
        title: "250-350 Bi-Weekly",
        is_active: false,
    },
    {
        title: "Above 350 Bi-Weekly",
        is_active: false,
    },

])

const select = (item) => {
    options.value.forEach((element) => {
        element.is_active = false
    })
    item.is_active = true
     setTimeout(() => {
            emit('nextStep');
        }, 500);
}

</script>


