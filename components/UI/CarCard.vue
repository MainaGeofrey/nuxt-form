<template>
    <div :class="{'border':!is_active,'border-2':is_active}" class=" w-full  border-[#0487AF]  px-2 pt-7 pb-2 cursor-pointer rounded bg-[#0487AF] space-y-5 bg-opacity-10 hover:bg-opacity-20 duration-200 relative">
     
      
        <div class=" w-full h-[90px]">
            <img :src="image" class=" w-full h-full object-contain" alt="">
        </div>

        <div>
            <span class=" text-[#0487AF]">{{title}}</span>
        </div>

         <div v-if="is_active" class=" text-[#0487AF] absolute bottom-3 right-2">
        <svg height="13" width="16" class=" fill-current"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
      </div>
    </div>
</template>


<script setup>
 const props = defineProps({
     image: {
         type: String,
         required: true,
},
    title: {
            type: String,
            required: true,
    },
    is_active: {
            type: Boolean,
            required: false,
    },
 });
</script>

