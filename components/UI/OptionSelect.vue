<template>
    <div  :class="{'border':!is_active,'border-2':is_active}" class=" w-full  border-[#0487AF] px-4 py-3 cursor-pointer rounded bg-[#0487AF] space-y-5 bg-opacity-10 hover:bg-opacity-20 duration-200 relative">
        <div class=" w-full flex items-center justify-between">
            <span class=" text-[#0487AF]">{{title}}</span>
            <div v-if="is_active" class=" text-[#0487AF]">
                <svg height="13" width="16" class=" fill-current"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
            </div>
        </div>
    </div>
</template>


<script setup>
    const props = defineProps({
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